import { test } from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage";
import { WelcomePage } from "../page-objects/WelcomePage";

test.describe('Login Tests', () => {
    let loginPage: LoginPage;
    let welcomePage: WelcomePage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        welcomePage = new WelcomePage(page);
        await loginPage.goto();
    });

    test('User can log in with valid credentials', async () => {
        await loginPage.login();
        await welcomePage.goto();
    });
});