import { test } from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage";
import { WelcomePage } from "../page-objects/WelcomePage";
import { TakeATourModal } from "../components/TakeATourModal";

test.describe('Take A Tour Modal Tests', () => {
    let loginPage: LoginPage;
    let welcomePage: WelcomePage;
    let takeATourModal: TakeATourModal;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        welcomePage = new WelcomePage(page);
        takeATourModal = new TakeATourModal(page);
        await loginPage.goto();
        await loginPage.login();
        await welcomePage.goto();
    });

    test('User can navigate through the Take A Tour modal', async () => {
        await welcomePage.clickTakeAQuickTour();
        await takeATourModal.waitForModal();
        const returnedWelcomePage = await takeATourModal.clickThroughTourSteps();
        await returnedWelcomePage.assertWelcomePage();
    });
});
