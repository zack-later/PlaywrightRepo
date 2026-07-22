import { Locator, Page, expect } from "@playwright/test";

export class CreateOpportunitiesPage {
    private readonly saveButton: Locator;
    private readonly cancelButton: Locator;
    private readonly nameInput: Locator;
    private readonly accountNameInput: Locator;
    private readonly currencySelect: Locator;
    private readonly dateClosedInput: Locator;
    private readonly amountInput: Locator;
    private readonly opportunityTypeSelect: Locator;
    private readonly salesStageSelect: Locator;
    private readonly leadSourceSelect: Locator;
    private readonly probabilityInput: Locator;
    private readonly campaignInput: Locator;
    private readonly nextStepInput: Locator;
    private readonly descriptionTextarea: Locator;
    private readonly assignedToInput: Locator;
    private readonly url =
        "https://demo.suiteondemand.com/index.php?module=Opportunities&action=EditView&return_module=Opportunities&return_action=DetailView";

    constructor(private page: Page) {
        this.page = page;
        this.saveButton = page.getByRole("button", { name: "Save" }).first();
        this.cancelButton = page.getByRole("button", { name: "Cancel" }).first();
        this.nameInput = page.locator("#name");
        this.accountNameInput = page.locator("#account_name");
        this.currencySelect = page.locator("#currency_id_select");
        this.dateClosedInput = page.locator("#date_closed");
        this.amountInput = page.locator("#amount");
        this.opportunityTypeSelect = page.locator("#opportunity_type");
        this.salesStageSelect = page.locator("#sales_stage");
        this.leadSourceSelect = page.locator("#lead_source");
        this.probabilityInput = page.locator("#probability");
        this.campaignInput = page.locator("#campaign_name");
        this.nextStepInput = page.locator("#next_step");
        this.descriptionTextarea = page.locator("#description");
        this.assignedToInput = page.locator("#assigned_user_name");
    }

    async assertLoaded() {
        await expect(
            this.page.getByRole("heading", { name: "CREATE" })
        ).toBeVisible();
    }

    async fillName(name: string) {
        await this.nameInput.fill(name);
    }

    async fillAccountName(accountName: string) {
        await this.accountNameInput.fill(accountName);
    }

    async selectCurrency(currency: string) {
        await this.currencySelect.selectOption({ label: currency });
    }

    async fillDateClosed(date: string) {
        await this.dateClosedInput.fill(date);
    }

    async fillAmount(amount: string) {
        await this.amountInput.fill(amount);
    }

    async selectOpportunityType(type: "Existing Business" | "New Business") {
        await this.opportunityTypeSelect.selectOption(type);
    }

    async selectSalesStage(salesStage: string) {
        await this.salesStageSelect.selectOption({ label: salesStage });
    }

    async selectLeadSource(leadSource: string) {
        await this.leadSourceSelect.selectOption(leadSource);
    }

    async fillProbability(probability: string) {
        await this.probabilityInput.fill(probability);
    }

    async fillCampaign(campaign: string) {
        await this.campaignInput.fill(campaign);
    }

    async fillNextStep(nextStep: string) {
        await this.nextStepInput.fill(nextStep);
    }

    async fillDescription(description: string) {
        await this.descriptionTextarea.fill(description);
    }

    async fillAssignedTo(user: string) {
        await this.assignedToInput.fill(user);
    }

    async clickSave() {
        await this.saveButton.click();
    }

    async clickCancel() {
        await this.cancelButton.click();
    }
}
