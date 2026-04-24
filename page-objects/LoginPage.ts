import { Page } from 'playwright';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private readonly selectors = {
    usernameInput: '#user-name',
    passwordInput: '#password',
    loginButton:   '#login-button',
    errorMessage:  '[data-test="error"]',
  };

  constructor(page: Page, baseUrl: string) {
    super(page, baseUrl);
  }

  async goto(): Promise<void> {
    await this.navigate('/');
  }

  async enterUsername(username: string): Promise<void> {
    await this.fill(this.selectors.usernameInput, username);
  }

  async enterPassword(password: string): Promise<void> {
    await this.fill(this.selectors.passwordInput, password);
  }

  async clickLoginButton(): Promise<void> {
    await this.click(this.selectors.loginButton);
  }

  async login(username: string, password: string): Promise<void> {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }

  async getErrorMessage(): Promise<string> {
    return this.getText(this.selectors.errorMessage);
  }

  async isErrorVisible(): Promise<boolean> {
    return this.isVisible(this.selectors.errorMessage);
  }
}
