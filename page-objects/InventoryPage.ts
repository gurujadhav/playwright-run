import { Page } from 'playwright';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  private readonly selectors = {
    pageTitle:    '.title',
    productItem:  '.inventory_item',
    productName:  '.inventory_item_name',
    productPrice: '.inventory_item_price',
    sortDropdown: '[data-test="product_sort_container"]',
  };

  constructor(page: Page, baseUrl: string) {
    super(page, baseUrl);
  }

  async goto(): Promise<void> {
    await this.navigate('/inventory.html');
  }

  async getPageHeading(): Promise<string> {
    return this.getText(this.selectors.pageTitle);
  }

  async getProductCount(): Promise<number> {
    await this.waitForSelector(this.selectors.productItem);
    return (await this.page.$$(this.selectors.productItem)).length;
  }

  async getProductNames(): Promise<string[]> {
    await this.waitForSelector(this.selectors.productName);
    return this.page.$$eval(
      this.selectors.productName,
      els => els.map(el => el.textContent?.trim() ?? '')
    );
  }

  async getProductPrices(): Promise<number[]> {
    await this.waitForSelector(this.selectors.productPrice);
    const texts = await this.page.$$eval(
      this.selectors.productPrice,
      els => els.map(el => el.textContent?.trim() ?? '0')
    );
    return texts.map(p => parseFloat(p.replace('$', '')));
  }

  async sortBy(option: string): Promise<void> {
    const optionMap: Record<string, string> = {
      'Price (low to high)': 'lohi',
      'Price (high to low)': 'hilo',
      'Name (A to Z)':       'az',
      'Name (Z to A)':       'za',
    };
    await this.selectOption(this.selectors.sortDropdown, optionMap[option] ?? option);
  }

  async containsProduct(name: string): Promise<boolean> {
    const names = await this.getProductNames();
    return names.some(n => n.includes(name));
  }
}
