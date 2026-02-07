import { Locator, Page, expect } from "@playwright/test";
import { WelcomePage } from "../page-objects/WelcomePage";


export class TakeATourModal {
    private readonly modal: Locator;
    private readonly nextButton: Locator;
    private readonly finishedButton: Locator;
    private readonly step1Title: Locator;
    private readonly step2Title: Locator;
    private readonly step3Title: Locator;
    private readonly step4Title: Locator;
    private readonly finalStepTitle: Locator;


    constructor(private page: Page) {
        this.modal = page.locator('div.swal2-popup.swal2-modal');
        this.nextButton = page.getByRole('button', { name: 'Next' });
        this.finishedButton = page.getByRole('button', { name: 'Finished' });
        this.step1Title = page.getByRole('heading', { name: 'Simplify your data entry' });
        this.step2Title = page.getByRole('heading', { name: 'Connect multiple data sources' });
        this.step3Title = page.getByRole('heading', { name: 'Restrict access to sensitive data' });
        this.step4Title = page.getByRole('heading', { name: 'Powerful automation with Workflows' });
        this.finalStepTitle = page.getByRole('heading', { name: 'Redefine Customisation' });
    }

    async waitForModal() {
        await expect(this.modal).toBeVisible();
        await expect(this.nextButton).toBeVisible();
    }

    async clickNextButton() {
        await this.nextButton.click();
    }

    async clickThroughTourSteps(): Promise<WelcomePage> {
        await this.takeATourStep1();
        await this.takeATourStep2();
        await this.takeATourStep3();
        await this.takeATourStep4();
        await this.takeATourFinalStep();
        return this.takeATourFinalStep();
    }

    async takeATourStep1() {
        await expect(this.step1Title).toBeVisible();
        await this.nextButton.click();
    }

    async takeATourStep2() {
        await expect(this.step2Title).toBeVisible();
        await this.nextButton.click();
    }

    async takeATourStep3() {
        await expect(this.step3Title).toBeVisible();
        await this.nextButton.click();
    }   

    async takeATourStep4() {
        await expect(this.step4Title).toBeVisible();
        await this.nextButton.click();
    }

    async takeATourFinalStep(): Promise<WelcomePage> {
        await expect(this.finalStepTitle).toBeVisible();
        await this.finishedButton.click();
        return new WelcomePage(this.page);
    }
}