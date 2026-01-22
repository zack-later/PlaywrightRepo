import { Locator, Page } from "@playwright/test";


class WelcomePage {
    readonly page: Page;
    readonly welcomeMessage: Locator;
    
    readonly url = 'https://demo.suiteondemand.com/index.php?module=Home&action=Demo';

    constructor(page: Page) {
        this.page = page;
        this.welcomeMessage = page.getByText('Welcome to the SuiteCRM 7 Demo');
    }

    async goto() {
        await this.page.goto(this.url);
    }
}

export default WelcomePage;