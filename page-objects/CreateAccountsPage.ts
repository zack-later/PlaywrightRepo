import { Locator, Page, expect } from "@playwright/test";

export class CreateAccountsPage {
    private readonly saveButton: Locator;
    private readonly cancelButton: Locator;
    private readonly nameInput: Locator;
    private readonly officePhoneInput: Locator;
    private readonly websiteInput: Locator;
    private readonly faxInput: Locator;
    private readonly emailAddressInput: Locator;
    private readonly billingStreetTextarea: Locator;
    private readonly billingCityInput: Locator;
    private readonly billingStateInput: Locator;
    private readonly billingPostalCodeInput: Locator;
    private readonly billingCountryInput: Locator;
    private readonly shippingStreetTextarea: Locator;
    private readonly shippingCityInput: Locator;
    private readonly shippingStateInput: Locator;
    private readonly shippingPostalCodeInput: Locator;
    private readonly shippingCountryInput: Locator;
    private readonly copyShippingFromBillingCheckbox: Locator;
    private readonly descriptionTextarea: Locator;
    private readonly assignedToInput: Locator;
    private readonly accountTypeSelect: Locator;
    private readonly industrySelect: Locator;
    private readonly annualRevenueInput: Locator;
    private readonly employeesInput: Locator;
    private readonly memberOfInput: Locator;
    private readonly campaignInput: Locator;
    private readonly url = 'https://demo.suiteondemand.com/index.php?module=Accounts&action=EditView&return_module=Accounts&return_action=DetailView';

    constructor(private page: Page) {
        this.page = page;
        this.saveButton = page.getByRole('button', { name: 'Save' }).first();
        this.cancelButton = page.getByRole('button', { name: 'Cancel' }).first();
        this.nameInput = page.locator('#name');
        this.officePhoneInput = page.locator('#phone_office');
        this.websiteInput = page.locator('#website');
        this.faxInput = page.locator('#phone_fax');
        this.emailAddressInput = page.locator('#Accounts0emailAddress0');
        this.billingStreetTextarea = page.locator('#billing_address_street');
        this.billingCityInput = page.locator('#billing_address_city');
        this.billingStateInput = page.locator('#billing_address_state');
        this.billingPostalCodeInput = page.locator('#billing_address_postalcode');
        this.billingCountryInput = page.locator('#billing_address_country');
        this.shippingStreetTextarea = page.locator('#shipping_address_street');
        this.shippingCityInput = page.locator('#shipping_address_city');
        this.shippingStateInput = page.locator('#shipping_address_state');
        this.shippingPostalCodeInput = page.locator('#shipping_address_postalcode');
        this.shippingCountryInput = page.locator('#shipping_address_country');
        this.copyShippingFromBillingCheckbox = page.locator('#shipping_checkbox');
        this.descriptionTextarea = page.locator('#description');
        this.assignedToInput = page.locator('#assigned_user_name');
        this.accountTypeSelect = page.locator('#account_type');
        this.industrySelect = page.locator('#industry');
        this.annualRevenueInput = page.locator('#annual_revenue');
        this.employeesInput = page.locator('#employees');
        this.memberOfInput = page.locator('#parent_name');
        this.campaignInput = page.locator('#campaign_name');
    }

    async assertLoaded() {
        await expect(
            this.page.getByRole('heading', { name: 'CREATE' })
        ).toBeVisible();
    }

    async fillName(name: string) {
        await this.nameInput.fill(name);
    }

    async fillOfficePhone(phone: string) {
        await this.officePhoneInput.fill(phone);
    }

    async fillWebsite(website: string) {
        await this.websiteInput.fill(website);
    }

    async fillFax(fax: string) {
        await this.faxInput.fill(fax);
    }

    async fillEmailAddress(email: string) {
        await this.emailAddressInput.fill(email);
    }

    async fillBillingAddress(address: { street: string; city: string; state: string; postalCode: string; country: string }) {
        await this.billingStreetTextarea.fill(address.street);
        await this.billingCityInput.fill(address.city);
        await this.billingStateInput.fill(address.state);
        await this.billingPostalCodeInput.fill(address.postalCode);
        await this.billingCountryInput.fill(address.country);
    }

    async fillShippingAddress(address: { street: string; city: string; state: string; postalCode: string; country: string }) {
        await this.shippingStreetTextarea.fill(address.street);
        await this.shippingCityInput.fill(address.city);
        await this.shippingStateInput.fill(address.state);
        await this.shippingPostalCodeInput.fill(address.postalCode);
        await this.shippingCountryInput.fill(address.country);
    }

    async checkCopyShippingFromBilling() {
        await this.copyShippingFromBillingCheckbox.check();
    }

    async fillDescription(description: string) {
        await this.descriptionTextarea.fill(description);
    }

    async fillAssignedTo(user: string) {
        await this.assignedToInput.fill(user);
    }

    async selectAccountType(type: string) {
        await this.accountTypeSelect.selectOption(type);
    }

    async selectIndustry(industry: string) {
        await this.industrySelect.selectOption(industry);
    }

    async fillAnnualRevenue(revenue: string) {
        await this.annualRevenueInput.fill(revenue);
    }

    async fillEmployees(employees: string) {
        await this.employeesInput.fill(employees);
    }

    async fillMemberOf(memberOf: string) {
        await this.memberOfInput.fill(memberOf);
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
