import { test } from "@playwright/test";
import LoginPageActions from "../actions/LoginPageActions"; 
import WelcomePageActions from "../actions/WelcomePageActions";

test.describe('Login Tests', () => {
    let loginPageActions: LoginPageActions;
    let welcomePageActions: WelcomePageActions;

    test.beforeEach(async ({ page }) => {
        loginPageActions = new LoginPageActions(page);
        welcomePageActions = new WelcomePageActions(page);
        await loginPageActions.goto();
    });

    test('User can log in with valid credentials', async () => {
        await loginPageActions.login();
        await welcomePageActions.goto();
    });
});