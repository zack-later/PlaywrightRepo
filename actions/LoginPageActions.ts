import { Page, expect } from "@playwright/test";
import LoginPage from "../page-objects/LoginPage";
import WelcomePage from "../page-objects/WelcomePage";

class LoginPageActions {
    readonly loginPage: LoginPage;

    constructor(page: Page) {
        this.loginPage = new LoginPage(page);
    }
    
    async goto() {
        await this.loginPage.goto();
        await expect(this.loginPage.page).toHaveURL('https://demo.suiteondemand.com/index.php?module=Users&action=Login');
    }

    async login() {
        await this.loginPage.username.fill('will');
        await this.loginPage.password.fill('will');
        await this.loginPage.loginButton.click();
        return new WelcomePage(this.loginPage.page);
    }
}

export default LoginPageActions;