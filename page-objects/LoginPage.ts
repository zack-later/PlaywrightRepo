import { Locator, Page } from "@playwright/test";

class LoginPage {
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly page: Page;
    readonly url = 'https://demo.suiteondemand.com/index.php?module=Users&action=Login'; 

    constructor(page: Page) {
        this.page = page;
        this.username = page.getByPlaceholder('Username').first();
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Log In'})
    }

    async goto() {
        await this.page.goto(this.url);
    }
}

export default LoginPage;