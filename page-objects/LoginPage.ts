import { Locator, Page, expect } from "@playwright/test";
import { WelcomePage } from "./WelcomePage";

export class LoginPage {
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly url = 'https://demo.suiteondemand.com/index.php?module=Users&action=Login'; 

    constructor(private page: Page) {
        this.page = page;
        this.username = page.getByPlaceholder('Username').first();
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Log In'})
    }

    async goto() {
        await this.page.goto(this.url);
        await expect(this.page).toHaveURL(this.url);
    }

    
    async login(username: string = 'will', password: string = 'will'): Promise<WelcomePage> {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
            
        return new WelcomePage(this.page);
    }
}