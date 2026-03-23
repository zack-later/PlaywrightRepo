import { Locator, Page, expect } from "@playwright/test";

export class CreateLeadsPage {
    private readonly saveButton: Locator;
    private readonly cancelButton: Locator;
    private readonly url =
        "https://demo.suiteondemand.com/index.php?module=Leads&action=EditView&return_module=Leads&return_action=DetailView";

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
