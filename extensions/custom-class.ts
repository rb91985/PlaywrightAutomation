import {Page} from '@playwright/test';
export class CustomActions {
    private page: Page;
  constructor(page: Page) {
    this.page = page;}

  async login(username: string, password: string) {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#submit');
    await this.page.waitForURL('https://practicetestautomation.com/logged-in-successfully/');}

  async logout() {
    await this.page.click('//*[@id="loop-container"]/div/article/div[2]/div/div/div/a');
    await this.page.waitForURL('https://practicetestautomation.com/practice-test-login/');
  }};