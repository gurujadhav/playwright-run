import { Page } from 'playwright';
import { timeouts } from '../playwright.config';

export abstract class BasePage {
  constructor(protected page: Page, protected baseUrl: string) {}

  async navigate(path: string = ''): Promise<void> {
    await this.page.goto(`${this.baseUrl}${path}`, { timeout: timeouts.navigation });
    await this.page.waitForLoadState('domcontentloaded');
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  async waitForSelector(selector: string, timeout = timeouts.default): Promise<void> {
    await this.page.waitForSelector(selector, { state: 'visible', timeout });
  }

  async click(selector: string): Promise<void> {
    await this.waitForSelector(selector);
    await this.page.click(selector);
  }

  async fill(selector: string, value: string): Promise<void> {
    await this.waitForSelector(selector);
    await this.page.fill(selector, value);
  }

  async getText(selector: string): Promise<string> {
    await this.waitForSelector(selector);
    return (await this.page.textContent(selector)) ?? '';
  }

  async isVisible(selector: string): Promise<boolean> {
    try {
      await this.page.waitForSelector(selector, { state: 'visible', timeout: 3000 });
      return true;
    } catch {
      return false;
    }
  }

  async selectOption(selector: string, value: string): Promise<void> {
    await this.waitForSelector(selector);
    await this.page.selectOption(selector, value);
  }
}