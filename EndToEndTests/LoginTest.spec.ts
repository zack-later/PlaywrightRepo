import { expect, test } from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage";
import { WelcomePage } from "../page-objects/WelcomePage";
import { invalidUser } from "../test-data/users";

test.describe('Login Tests', () => {
    let loginPage: LoginPage;
    let welcomePage: WelcomePage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        welcomePage = new WelcomePage(page);
        await loginPage.goto();
    });

    test('User can log in with valid credentials', async ({ page }) => {
        await loginPage.login();
        await welcomePage.goto();
        await welcomePage.assertWelcomePage();
        await welcomePage.selectAllOptions();

        // The final "Create" option currently maps to Tasks.
        await expect(page).toHaveURL(/module=Tasks&action=EditView/);
        await expect(page.getByRole('heading', { name: 'CREATE' })).toBeVisible();
    });

    test('Invalid credentials attempt', async ({ page }) => {
        await loginPage.login(invalidUser.username, invalidUser.password);

        await expect(page).toHaveURL(/module=Users&action=Login/);
        await expect(page.getByText('You must specify a valid username and password.')).toBeVisible();
    });
});