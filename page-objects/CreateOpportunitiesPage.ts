import { Locator, Page, expect } from "@playwright/test";

export class CreateOpportunitiesPage {
    private readonly saveButton: Locator;
    private readonly cancelButton: Locator;
    private readonly url =
        "https://demo.suiteondemand.com/index.php?module=Opportunities&action=EditView&return_module=Opportunities&return_action=DetailView";

    constructor(private page: Page) {
        this.page = page;
        this.saveButton = page.getByRole("button", { name: "Save" });
        this.cancelButton = page.getByRole("button", { name: "Cancel" });
    }

    async assertLoaded() {
        await expect(
            this.page.getByRole("heading", { name: "CREATE" })
        ).toBeVisible();
    }

    async clickSave() {
        await this.saveButton.click();
    }

    async clickCancel() {
        await this.cancelButton.click();
    }
}
