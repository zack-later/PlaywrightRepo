import { Page, expect } from "@playwright/test";
import WelcomePage from "../page-objects/WelcomePage";

class WelcomePageActions {
    readonly welcomePage: WelcomePage;

    constructor(page: Page) {
        this.welcomePage = new WelcomePage(page);
    }
    
    async goto() {
        await this.welcomePage.goto();
        await expect(this.welcomePage.page).toHaveURL('https://demo.suiteondemand.com/index.php?module=Home&action=Demo');
    }
}

export default WelcomePageActions;