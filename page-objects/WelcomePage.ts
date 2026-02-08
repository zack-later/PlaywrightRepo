import { Locator, Page, expect } from "@playwright/test";
import { TakeATourModal } from "../components/TakeATourModal";
import { createPageFactory, CreateOption } from "../factory/PageFactory";

export class WelcomePage {
    private readonly welcomeMessage: Locator;
    private readonly takeAQuickTourButton: Locator;
    private readonly createDropdown: Locator;
    private readonly createDropdownOptions: Locator;
    
    private readonly url = 'https://demo.suiteondemand.com/index.php?module=Home&action=Demo';

    constructor(private page: Page) {
        this.page = page;
        this.welcomeMessage = page.getByRole('heading', { name: 'Welcome to the SuiteCRM 7 Demo' });
        this.takeAQuickTourButton = page.getByRole('link', { name: 'Take a quick tour' });
        this.createDropdown = page.locator('.desktop-bar #quickcreatetop'); //a.dropdown-toggle
        this.createDropdownOptions = this.createDropdown.locator('ul.dropdown-menu li a');
    }

    async assertWelcomePage() {
        await expect(this.welcomeMessage).toBeVisible();
    }

    async goto() {
            await this.page.goto(this.url);
            await this.assertWelcomePage();
        }

    async clickTakeAQuickTour(): Promise<TakeATourModal> {
        await this.takeAQuickTourButton.click();
        return new TakeATourModal(this.page);
    }

    async selectCreateOption<T extends CreateOption>(
    optionName: T
  ): Promise<InstanceType<typeof createPageFactory[T]>> {

    await this.createDropdown.click();

    const option = this.createDropdownOptions
      .filter({ hasText: optionName })
      .first();

    await Promise.all([
      this.page.waitForLoadState('domcontentloaded'),
      option.click(),
    ]);

    //THIS is where the factory is used
    const PageClass = createPageFactory[optionName];
    const nextPage = new PageClass(this.page) as InstanceType<
      (typeof createPageFactory)[T]
    >;

    await nextPage.assertLoaded();
    return nextPage;
  }
}