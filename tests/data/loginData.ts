import { expect } from "@playwright/test";
 

export async function loginToAsana(page: any, email: string, password: string): Promise<void> {
    await page.goto("https://app.asana.com/-/login");
    await expect(page.locator('text=Welcome to Asana')).toBeVisible();
    const acceptButtonSelector = '[id="onetrust-accept-btn-handler"]';

    if (acceptButtonSelector) {
        await page.click(acceptButtonSelector);
    } else {
        console.log('Accept cookies button not found.');
    }
    
    
    await page.locator('[type="email"]').fill(email);
    await page.getByRole('button', { name: 'Continue', exact: true }).click();
    await page.locator('[type="password"]').fill(password);
    await page.getByRole('button', { name: 'Log in', exact: true }).click();
}

export enum login {
email = 'ben+pose@workwithloop.com',
password = 'Password123',

}

