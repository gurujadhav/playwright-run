import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';
import { CustomWorld } from '../shared-objects/world';
import { LoginPage } from '../page-objects/LoginPage';
import credentials from '../test-data/credentials.json';

let loginPage: LoginPage;

Given('I navigate to the login page', async function (this: CustomWorld) {
  loginPage = new LoginPage(this.page, this.baseUrl);
  await loginPage.goto();
});

Given('I am logged in as {string}', async function (this: CustomWorld, role: string) {
  const user = credentials.users[role as keyof typeof credentials.users];
  if (!user) throw new Error(`No credentials found for role: ${role}`);
  loginPage = new LoginPage(this.page, this.baseUrl);
  await loginPage.goto();
  await loginPage.login(user.username, user.password);
});

When('I enter username {string}', async function (this: CustomWorld, username: string) {
  await loginPage.enterUsername(username);
});

When('I enter password {string}', async function (this: CustomWorld, password: string) {
  await loginPage.enterPassword(password);
});

When('I click the login button', async function (this: CustomWorld) {
  await loginPage.clickLoginButton();
});

Then('I should be redirected to the home page', async function (this: CustomWorld) {
  expect(await loginPage.getCurrentUrl()).toContain('/inventory');
});

Then('I should see a welcome message', async function (this: CustomWorld) {
  expect(await loginPage.getTitle()).toBeTruthy();
});

Then('I should see an error message {string}', async function (this: CustomWorld, expected: string) {
  expect(await loginPage.getErrorMessage()).toContain(expected);
});

Then('I should see the {string} dashboard', async function (this: CustomWorld, dashboard: string) {
  expect(await loginPage.getCurrentUrl()).toContain('/inventory');
  const heading = await this.page.textContent('.title');
  expect((heading ?? '').toLowerCase()).toContain(dashboard.toLowerCase());
});
