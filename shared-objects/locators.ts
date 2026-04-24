const locators = {
  login: {
    username: 'input[placeholder="name@lab.com"]',
    password: 'input[type="password"]',
    submitButton: '//button[contains(text(), "Enter Dashboard")]',
    continueButton: '//button[contains(text(), "Continue")]',
    closePopupButton:
      '//button[contains(text(), "Continue")]/../../../div/button',
  },
};

export = locators;
