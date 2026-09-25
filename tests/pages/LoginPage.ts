import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object Model for the OrangeHRM Login page.
 * Encapsulates all locators and actions required to authenticate a user.
 * URL: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
 */
export class LoginPage {
  readonly page: Page;

  // Locators
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly dashboardHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator('.oxd-alert-content-text');
    this.dashboardHeader = page.locator('.oxd-topbar-header-breadcrumb h6');
  }

  /**
   * Navigates to the OrangeHRM login page.
   */
  async goto(): Promise<void> {
    try {
      await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      await expect(this.usernameInput).toBeVisible();
    } catch (error) {
      console.error(`[LoginPage.goto] Failed to load login page: ${error}`);
      throw error;
    }
  }

  /**
   * Enters the username into the username field.
   * @param username - the username to type
   */
  async enterUsername(username: string): Promise<void> {
    try {
      await this.usernameInput.waitFor({ state: 'visible' });
      await this.usernameInput.fill(username);
    } catch (error) {
      console.error(`[LoginPage.enterUsername] Failed to enter username "${username}": ${error}`);
      throw error;
    }
  }

  /**
   * Enters the password into the password field.
   * @param password - the password to type
   */
  async enterPassword(password: string): Promise<void> {
    try {
      await this.passwordInput.waitFor({ state: 'visible' });
      await this.passwordInput.fill(password);
    } catch (error) {
      console.error(`[LoginPage.enterPassword] Failed to enter password: ${error}`);
      throw error;
    }
  }

  /**
   * Clicks the login button to submit the credentials.
   */
  async clickLogin(): Promise<void> {
    try {
      await this.loginButton.waitFor({ state: 'visible' });
      await this.loginButton.click();
    } catch (error) {
      console.error(`[LoginPage.clickLogin] Failed to click login button: ${error}`);
      throw error;
    }
  }

  /**
   * Performs a full login flow using the supplied credentials, enabling
   * data-driven testing by parameterizing username and password.
   * @param username - the login username
   * @param password - the login password
   */
  async login(username: string, password: string): Promise<void> {
    try {
      await this.enterUsername(username);
      await this.enterPassword(password);
      await this.clickLogin();
    } catch (error) {
      console.error(`[LoginPage.login] Login failed for user "${username}": ${error}`);
      throw error;
    }
  }

  /**
   * Waits for and asserts that the dashboard is displayed after a successful login.
   */
  async verifyLoginSuccess(): Promise<void> {
    try {
      await this.page.waitForURL('**/dashboard/index');
      await expect(this.dashboardHeader).toBeVisible();
    } catch (error) {
      console.error(`[LoginPage.verifyLoginSuccess] Dashboard not displayed after login: ${error}`);
      throw error;
    }
  }

  /**
   * Retrieves the error message text shown for a failed login attempt.
   * @returns the trimmed error message text
   */
  async getErrorMessage(): Promise<string> {
    try {
      await this.errorMessage.waitFor({ state: 'visible' });
      return (await this.errorMessage.textContent())?.trim() ?? '';
    } catch (error) {
      console.error(`[LoginPage.getErrorMessage] Failed to retrieve error message: ${error}`);
      throw error;
    }
  }
}
