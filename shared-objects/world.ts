import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from 'playwright';
import { envConfig } from '../.envConfigrc';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!:    Page;
  baseUrl:  string;
  headless: boolean;

  constructor(options: IWorldOptions) {
    super(options);
    this.baseUrl  = envConfig.baseUrl;
    this.headless = envConfig.headless;
  }
}

setWorldConstructor(CustomWorld);
