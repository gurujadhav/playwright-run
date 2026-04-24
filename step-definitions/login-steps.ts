import loginPage = require('../page-objects/LoginPage');
import { envConfig } from '../.envConfigrc';

Given("I launch {string} page", async (test: string) => {
  await page.goto(envConfig.baseUrl[test as keyof typeof envConfig.baseUrl], DELAY_10s);
});

When("I login as {string}", async (userType: string) => {
  await loginPage.login(userType);
});

Then("I should be logged in successfully", async () => {
  await loginPage.verifyLoginSuccess();
});
