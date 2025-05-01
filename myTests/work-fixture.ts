import { test as base, expect } from '@playwright/test';

type Account = { username: string; password: string };

// Extend Playwright Test to include a worker-scoped fixture
export const test = base.extend<{}, { account: Account }>({
  account: [async ({ browser }, use, workerInfo) => {
    // Generate a unique username per worker
    const username = 'standard_user' 
    // 'user' + workerInfo.workerIndex;
    const password = 'secret_sauce';

    // Create an account in the browser
    const page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.locator('//input[@name="user-name"]').fill('standard_user');
    await page.locator('//input[@placeholder="Password"]').fill('secret_sauce')
    await page.locator('//input[@name="login-button"]').click()
    await page.getByText('Sign up').click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html', { timeout: 5000 });
    await page.close();

    // Provide the account details for all tests in the worker
    await use({ username, password });
  }, { scope: 'worker' }]
});

export { expect };