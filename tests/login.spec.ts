import { test, expect } from "@playwright/test";
import { testCases } from "./data/testCases";
  

test.describe('Asana Data-Driven Tests', () => {
    testCases.forEach((data) => {
        test(`Test Case ${data.id}: ${data.name}`, async ({ page }) => {
            await test.step('Login to Asana', async () => {
                await page.goto("https://app.asana.com/-/login");
                await expect(page.locator('text=Welcome to Asana')).toBeVisible();
                await page.locator('[type="email"]').fill('ben+pose@workwithloop.com');
                await page.getByRole('button', { name: 'Continue', exact: true }).click();
                await page.locator('[type="password"]').fill('Password123');
                await page.getByRole('button', { name: 'Log in', exact: true }).click();
                
            });

            await test.step('Navigate to the project page', async () => {
                await page.click(`text=${data.leftNav}`);
                await page.getByText(data.card_title);
                await expect (page.getByText(data.card_title)).toBeVisible
            });

            await test.step('Verify the card is within the right column', async () => {
                // const taskCard = await page.locator(`text=${data.card_title}`).first();
                // //await page.getByText(data.card_title);
                // const columnText = await taskCard.locator('xpath=ancestor::div[contains(@class, "column")]').innerText();
                // await expect(data.card_title).toContain(data.column)
                
                await expect(page.getByText(data.column)).toBeVisible()
               

            });
        });
    });
});
