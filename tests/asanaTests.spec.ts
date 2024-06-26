import { test, expect } from "@playwright/test";
import { testCases } from "./data/testCases";
import { loginToAsana, login } from "./data/loginData";

  
test.describe('Asana Data-Driven Tests', () => {
    testCases.forEach((data) => {
        test(`${data.id}: ${data.name}`, async ({ page }) => {
            await test.step('Login to Asana', async () => {
                await loginToAsana(page, login.email, login.password);
            });

            await test.step('Navigate to the project page', async () => {
                await page.click(`text=${data.leftNav}`);
                 page.getByText(data.card_title);
                 expect (page.getByText(data.card_title)).toBeVisible
            });

            await test.step('Verify the card is within the right column', async () => {
                const projectColumn = '[data-testid="VerticalScroller"]';
                const todoColumnLocator = page.locator(projectColumn);
                const projectLocator = todoColumnLocator.locator(`text=${data.card_title}`);
                await expect(todoColumnLocator).toBeVisible(); 
                return await projectLocator.isVisible();
            });
        });
    });
});

