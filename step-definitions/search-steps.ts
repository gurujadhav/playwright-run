import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';
import { CustomWorld } from '../shared-objects/world';
import { InventoryPage } from '../page-objects/InventoryPage';

let inventoryPage: InventoryPage;

Given('I am on the products page', async function (this: CustomWorld) {
  inventoryPage = new InventoryPage(this.page, this.baseUrl);
  await inventoryPage.goto();
});

When('I sort products by {string}', async function (this: CustomWorld, sortOption: string) {
  await inventoryPage.sortBy(sortOption);
});

Then('I should see products listed', async function (this: CustomWorld) {
  expect(await inventoryPage.getProductCount()).toBeGreaterThan(0);
});

Then('the product list should contain {string}', async function (this: CustomWorld, productName: string) {
  expect(await inventoryPage.containsProduct(productName)).toBe(true);
});

Then('the products should be displayed in ascending price order', async function (this: CustomWorld) {
  const prices = await inventoryPage.getProductPrices();
  for (let i = 0; i < prices.length - 1; i++) {
    expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
  }
});

Then('the products should be displayed in descending price order', async function (this: CustomWorld) {
  const prices = await inventoryPage.getProductPrices();
  for (let i = 0; i < prices.length - 1; i++) {
    expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1]);
  }
});

Then('the first product name should come before the last alphabetically', async function (this: CustomWorld) {
  const names = await inventoryPage.getProductNames();
  expect(names.length).toBeGreaterThan(1);
  expect(names[0].toLowerCase() <= names[names.length - 1].toLowerCase()).toBe(true);
});
