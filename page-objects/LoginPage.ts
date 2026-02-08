import { Locator, Page, expect } from "@playwright/test";
import { WelcomePage } from "./WelcomePage";
import { users } from "../test-data/users";

export class LoginPage {
    private readonly username: Locator;
    private readonly password: Locator;
    private readonly loginButton: Locator;
    private readonly url = 'https://demo.suiteondemand.com/index.php?module=Users&action=Login'; 

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

    async login(username: string = users.username, password: string = users.password): Promise<WelcomePage> {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
            
        return new WelcomePage(this.page);
    }
}