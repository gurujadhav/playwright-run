import { Browser, BrowserContext, Page } from 'playwright';
import { World, IWorldOptions, setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(30_000);

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!:    Page;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
