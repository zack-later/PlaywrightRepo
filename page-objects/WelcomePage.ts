import { Locator, Page, expect } from "@playwright/test";
import { TakeATourModal } from "../components/TakeATourModal";
import { link } from "node:fs";


export class WelcomePage {
    readonly welcomeMessage: Locator;
    readonly takeAQuickTourButton: Locator;
    
    readonly url = 'https://demo.suiteondemand.com/index.php?module=Home&action=Demo';

    constructor(private page: Page) {
        this.page = page;
        this.welcomeMessage = page.getByText('Welcome to the SuiteCRM 7 Demo');
        this.takeAQuickTourButton = page.getByRole('link', { name: 'Take a quick tour' });
    }
    async goto() {
            await this.page.goto(this.url);
            await expect(this.page).toHaveURL(this.url);
        }

    async clickTakeAQuickTour(): Promise<TakeATourModal> {
        await this.takeAQuickTourButton.click();
        return new TakeATourModal(this.page);; 
    }
}