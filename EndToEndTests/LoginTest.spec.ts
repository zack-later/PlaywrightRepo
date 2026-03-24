import { test } from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage";
import { WelcomePage } from "../page-objects/WelcomePage";
import { TakeATourModal } from "../components/TakeATourModal";

test.describe('Login Tests', () => {
    let loginPage: LoginPage;
    let welcomePage: WelcomePage;
    let takeATourModal: TakeATourModal;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        welcomePage = new WelcomePage(page);
        takeATourModal = new TakeATourModal(page);
        await loginPage.goto();
    });

    test('User can log in with valid credentials', async () => {
        await loginPage.login();
        await welcomePage.goto();
        await welcomePage.clickTakeAQuickTour();
        await takeATourModal.waitForModal();
        await takeATourModal.clickThroughTourSteps();
        await welcomePage.selectAllOptions();
    });
});