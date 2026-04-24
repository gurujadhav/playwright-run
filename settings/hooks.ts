import * as fs from 'fs';
import * as path from 'path';
import { Before, After, BeforeAll, AfterAll, Status } from '@cucumber/cucumber';
import { chromium, Browser } from 'playwright';
import { CustomWorld } from './world';
import { launchOptions, contextOptions } from '../playwright.config';

let browser: Browser;

BeforeAll({ timeout: 30_000 }, async function () {
  fs.mkdirSync('reports/videos', { recursive: true });
  browser = await chromium.launch(launchOptions);
});

AfterAll(async function () {
  await browser?.close();
});

Before(async function (this: CustomWorld) {
  this.browser = browser;
  this.context = await browser.newContext(contextOptions);
  this.page    = await this.context.newPage();
  Object.assign(globalThis, { page: this.page });
});

After({ timeout: 60_000 }, async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const screenshot = await this.page.screenshot({ fullPage: true });
    this.attach(screenshot, 'image/png');
  }

  const video = this.page?.video();
  await this.page?.close();

  if (video) {
    const tmpPath = await video.path();
    const safeName = scenario.pickle.name
      .replace(/[^a-z0-9]/gi, '_')
      .toLowerCase()
      .slice(0, 80);
    const namedPath = path.join('reports', 'videos', `${safeName}.webm`);

    await video.saveAs(namedPath);
    fs.unlinkSync(tmpPath);

    const videoBuffer = fs.readFileSync(namedPath);
    this.attach(videoBuffer, 'video/webm');
  }

  await this.context?.close();
});
