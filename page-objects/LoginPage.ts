import helper = require("../shared-objects/helpers");
import locators = require("../shared-objects/locators");
import credentials = require("../test-data/credentials.json");

const loginPage = {
  login: async (userType: string) => {
    await helper.waitAndFill(
      locators.login.username,
      credentials[userType as keyof typeof credentials].username,
    );
    await helper.waitAndFill(
      locators.login.password,
      credentials[userType as keyof typeof credentials].password,
    );
    await helper.waitAndClick(locators.login.submitButton);
  },

  verifyLoginSuccess: async () => {
    await helper.waitAndClick(locators.login.closePopupButton);
  },
};

export = loginPage;
