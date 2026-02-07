import { Locator, Page, expect } from "@playwright/test"; 

export class CreateAccountsPage {
    private readonly saveButton: Locator;
    private readonly cancelButton: Locator

    constructor(private page: Page) {
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    }

}