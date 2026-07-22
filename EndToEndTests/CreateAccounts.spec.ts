import { expect, test } from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage";
import { WelcomePage } from "../page-objects/WelcomePage";
import { CreateAccountsPage } from "../page-objects/CreateAccountsPage";
import { newAccount } from "../test-data/accounts";

test.describe('Create Accounts Tests', () => {
    let loginPage: LoginPage;
    let welcomePage: WelcomePage;
    let createAccountsPage: CreateAccountsPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        welcomePage = new WelcomePage(page);
        await loginPage.goto();
        await loginPage.login();
        await welcomePage.goto();
        createAccountsPage = await welcomePage.selectCreateOption('Create Accounts');
    });

    test('User can create a new account', async ({ page }) => {
        const account = newAccount();

        await createAccountsPage.fillName(account.name);
        await createAccountsPage.fillOfficePhone(account.officePhone);
        await createAccountsPage.fillWebsite(account.website);
        await createAccountsPage.fillFax(account.fax);
        await createAccountsPage.fillEmailAddress(account.emailAddress);
        await createAccountsPage.fillBillingAddress(account.billingAddress);
        await createAccountsPage.fillShippingAddress(account.shippingAddress);
        await createAccountsPage.fillDescription(account.description);
        await createAccountsPage.selectAccountType(account.accountType);
        await createAccountsPage.selectIndustry(account.industry);
        await createAccountsPage.fillAnnualRevenue(account.annualRevenue);
        await createAccountsPage.fillEmployees(account.employees);
        await createAccountsPage.clickSave();

        await expect(page).toHaveURL(/action=DetailView.*module=Accounts|module=Accounts.*action=DetailView/);
        await expect(page.getByRole('heading', { name: account.name })).toBeVisible();
    });
});
