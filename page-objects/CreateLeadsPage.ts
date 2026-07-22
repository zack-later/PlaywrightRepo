import { Locator, Page, expect } from "@playwright/test";

export class CreateLeadsPage {
    private readonly saveButton: Locator;
    private readonly cancelButton: Locator;
    private readonly salutationSelect: Locator;
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly officePhoneInput: Locator;
    private readonly titleInput: Locator;
    private readonly mobilePhoneInput: Locator;
    private readonly departmentInput: Locator;
    private readonly faxInput: Locator;
    private readonly accountNameInput: Locator;
    private readonly websiteInput: Locator;
    private readonly primaryStreetTextarea: Locator;
    private readonly primaryCityInput: Locator;
    private readonly primaryStateInput: Locator;
    private readonly primaryPostalCodeInput: Locator;
    private readonly primaryCountryInput: Locator;
    private readonly otherStreetTextarea: Locator;
    private readonly otherCityInput: Locator;
    private readonly otherStateInput: Locator;
    private readonly otherPostalCodeInput: Locator;
    private readonly otherCountryInput: Locator;
    private readonly copyOtherFromPrimaryCheckbox: Locator;
    private readonly emailAddressInput: Locator;
    private readonly descriptionTextarea: Locator;
    private readonly statusSelect: Locator;
    private readonly leadSourceSelect: Locator;
    private readonly statusDescriptionTextarea: Locator;
    private readonly leadSourceDescriptionTextarea: Locator;
    private readonly opportunityAmountInput: Locator;
    private readonly referredByInput: Locator;
    private readonly campaignInput: Locator;
    private readonly assignedToInput: Locator;
    private readonly url =
        "https://demo.suiteondemand.com/index.php?module=Leads&action=EditView&return_module=Leads&return_action=DetailView";

    constructor(private page: Page) {
        this.page = page;
        this.saveButton = page.getByRole("button", { name: "Save" }).first();
        this.cancelButton = page.getByRole("button", { name: "Cancel" }).first();
        this.salutationSelect = page.locator("#salutation");
        this.firstNameInput = page.locator("#first_name");
        this.lastNameInput = page.locator("#last_name");
        this.officePhoneInput = page.locator("#phone_work");
        this.titleInput = page.locator("#title");
        this.mobilePhoneInput = page.locator("#phone_mobile");
        this.departmentInput = page.locator("#department");
        this.faxInput = page.locator("#phone_fax");
        this.accountNameInput = page.locator("#EditView_account_name");
        this.websiteInput = page.locator("#website");
        this.primaryStreetTextarea = page.locator("#primary_address_street");
        this.primaryCityInput = page.locator("#primary_address_city");
        this.primaryStateInput = page.locator("#primary_address_state");
        this.primaryPostalCodeInput = page.locator("#primary_address_postalcode");
        this.primaryCountryInput = page.locator("#primary_address_country");
        this.otherStreetTextarea = page.locator("#alt_address_street");
        this.otherCityInput = page.locator("#alt_address_city");
        this.otherStateInput = page.locator("#alt_address_state");
        this.otherPostalCodeInput = page.locator("#alt_address_postalcode");
        this.otherCountryInput = page.locator("#alt_address_country");
        this.copyOtherFromPrimaryCheckbox = page.locator("#alt_checkbox");
        this.emailAddressInput = page.locator("#Leads0emailAddress0");
        this.descriptionTextarea = page.locator("#description");
        this.statusSelect = page.locator("#status");
        this.leadSourceSelect = page.locator("#lead_source");
        this.statusDescriptionTextarea = page.locator("#status_description");
        this.leadSourceDescriptionTextarea = page.locator("#lead_source_description");
        this.opportunityAmountInput = page.locator("#opportunity_amount");
        this.referredByInput = page.locator("#refered_by");
        this.campaignInput = page.locator("#campaign_name");
        this.assignedToInput = page.locator("#assigned_user_name");
    }

    async assertLoaded() {
        await expect(
            this.page.getByRole("heading", { name: "CREATE" })
        ).toBeVisible();
    }

    async selectSalutation(salutation: "Mr." | "Ms." | "Mrs." | "Miss" | "Dr." | "Prof.") {
        await this.salutationSelect.selectOption(salutation);
    }

    async fillFirstName(firstName: string) {
        await this.firstNameInput.fill(firstName);
    }

    async fillLastName(lastName: string) {
        await this.lastNameInput.fill(lastName);
    }

    async fillOfficePhone(phone: string) {
        await this.officePhoneInput.fill(phone);
    }

    async fillTitle(title: string) {
        await this.titleInput.fill(title);
    }

    async fillMobilePhone(phone: string) {
        await this.mobilePhoneInput.fill(phone);
    }

    async fillDepartment(department: string) {
        await this.departmentInput.fill(department);
    }

    async fillFax(fax: string) {
        await this.faxInput.fill(fax);
    }

    async fillAccountName(accountName: string) {
        await this.accountNameInput.fill(accountName);
    }

    async fillWebsite(website: string) {
        await this.websiteInput.fill(website);
    }

    async fillPrimaryAddress(address: { street: string; city: string; state: string; postalCode: string; country: string }) {
        await this.primaryStreetTextarea.fill(address.street);
        await this.primaryCityInput.fill(address.city);
        await this.primaryStateInput.fill(address.state);
        await this.primaryPostalCodeInput.fill(address.postalCode);
        await this.primaryCountryInput.fill(address.country);
    }

    async fillOtherAddress(address: { street: string; city: string; state: string; postalCode: string; country: string }) {
        await this.otherStreetTextarea.fill(address.street);
        await this.otherCityInput.fill(address.city);
        await this.otherStateInput.fill(address.state);
        await this.otherPostalCodeInput.fill(address.postalCode);
        await this.otherCountryInput.fill(address.country);
    }

    async checkCopyOtherFromPrimary() {
        await this.copyOtherFromPrimaryCheckbox.check();
    }

    async fillEmailAddress(email: string) {
        await this.emailAddressInput.fill(email);
    }

    async fillDescription(description: string) {
        await this.descriptionTextarea.fill(description);
    }

    async selectStatus(status: "New" | "Assigned" | "In Process" | "Converted" | "Recycled" | "Dead") {
        await this.statusSelect.selectOption(status);
    }

    async selectLeadSource(leadSource: string) {
        await this.leadSourceSelect.selectOption(leadSource);
    }

    async fillStatusDescription(description: string) {
        await this.statusDescriptionTextarea.fill(description);
    }

    async fillLeadSourceDescription(description: string) {
        await this.leadSourceDescriptionTextarea.fill(description);
    }

    async fillOpportunityAmount(amount: string) {
        await this.opportunityAmountInput.fill(amount);
    }

    async fillReferredBy(referredBy: string) {
        await this.referredByInput.fill(referredBy);
    }

    async fillCampaign(campaign: string) {
        await this.campaignInput.fill(campaign);
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
