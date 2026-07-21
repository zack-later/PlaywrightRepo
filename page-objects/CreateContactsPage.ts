import { Locator, Page, expect } from '@playwright/test';

export class CreateContactsPage {
    private readonly saveButton: Locator;
    private readonly cancelButton: Locator;
    private readonly salutationSelect: Locator;
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly officePhoneInput: Locator;
    private readonly mobilePhoneInput: Locator;
    private readonly titleInput: Locator;
    private readonly departmentInput: Locator;
    private readonly accountNameInput: Locator;
    private readonly faxInput: Locator;
    private readonly emailAddressInput: Locator;
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
    private readonly descriptionTextarea: Locator;
    private readonly assignedToInput: Locator;
    private readonly leadSourceSelect: Locator;
    private readonly reportsToInput: Locator;
    private readonly campaignInput: Locator;
    private readonly url = 'https://demo.suiteondemand.com/index.php?module=Contacts&action=EditView&return_module=Contacts&return_action=DetailView';

    constructor(private page: Page) {
        this.page = page;
        this.saveButton = page.getByRole('button', { name: 'Save' }).first();
        this.cancelButton = page.getByRole('button', { name: 'Cancel' }).first();
        this.salutationSelect = page.locator('#salutation');
        this.firstNameInput = page.locator('#first_name');
        this.lastNameInput = page.locator('#last_name');
        this.officePhoneInput = page.locator('#phone_work');
        this.mobilePhoneInput = page.locator('#phone_mobile');
        this.titleInput = page.locator('#title');
        this.departmentInput = page.locator('#department');
        this.accountNameInput = page.locator('#account_name');
        this.faxInput = page.locator('#phone_fax');
        this.emailAddressInput = page.locator('#Contacts0emailAddress0');
        this.primaryStreetTextarea = page.locator('#primary_address_street');
        this.primaryCityInput = page.locator('#primary_address_city');
        this.primaryStateInput = page.locator('#primary_address_state');
        this.primaryPostalCodeInput = page.locator('#primary_address_postalcode');
        this.primaryCountryInput = page.locator('#primary_address_country');
        this.otherStreetTextarea = page.locator('#alt_address_street');
        this.otherCityInput = page.locator('#alt_address_city');
        this.otherStateInput = page.locator('#alt_address_state');
        this.otherPostalCodeInput = page.locator('#alt_address_postalcode');
        this.otherCountryInput = page.locator('#alt_address_country');
        this.copyOtherFromPrimaryCheckbox = page.locator('#alt_checkbox');
        this.descriptionTextarea = page.locator('#description');
        this.assignedToInput = page.locator('#assigned_user_name');
        this.leadSourceSelect = page.locator('#lead_source');
        this.reportsToInput = page.locator('#report_to_name');
        this.campaignInput = page.locator('#campaign_name');
    }

    async assertLoaded() {
        await expect(
            this.page.getByRole('heading', { name: 'CREATE' })
        ).toBeVisible();
    }

    async selectSalutation(salutation: 'Mr.' | 'Ms.' | 'Mrs.' | 'Miss' | 'Dr.' | 'Prof.') {
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

    async fillMobilePhone(phone: string) {
        await this.mobilePhoneInput.fill(phone);
    }

    async fillTitle(title: string) {
        await this.titleInput.fill(title);
    }

    async fillDepartment(department: string) {
        await this.departmentInput.fill(department);
    }

    async fillAccountName(accountName: string) {
        await this.accountNameInput.fill(accountName);
    }

    async fillFax(fax: string) {
        await this.faxInput.fill(fax);
    }

    async fillEmailAddress(email: string) {
        await this.emailAddressInput.fill(email);
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

    async fillDescription(description: string) {
        await this.descriptionTextarea.fill(description);
    }

    async fillAssignedTo(user: string) {
        await this.assignedToInput.fill(user);
    }

    async selectLeadSource(leadSource: string) {
        await this.leadSourceSelect.selectOption(leadSource);
    }

    async fillReportsTo(reportsTo: string) {
        await this.reportsToInput.fill(reportsTo);
    }

    async fillCampaign(campaign: string) {
        await this.campaignInput.fill(campaign);
    }

     async clickSave() {
        await this.saveButton.click();
    }

    async clickCancel() {
        await this.cancelButton.click();
    }
}
