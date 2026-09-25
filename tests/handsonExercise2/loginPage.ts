// Login with valid credentilals and land on the products page of https://www.saucedemo.com/

import { Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async navigateToLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login( password: string) {
        await this.page.fill('#user-name', 'standard_user');
        await this.page.fill('#password', 'secret_sauce');
        await this.page.click('#login-button');
    }
}