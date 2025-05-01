import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
 
  await page.goto('https://www.saucedemo.com/');
  await page.locator('//input[@name="user-name"]').fill('standard_user');
  await page.locator('//input[@placeholder="Password"]').fill('secret_sauce')
  await page.locator('//input[@name="login-button"]').click()

  await page.waitForURL('https://www.saucedemo.com/inventory.html', { timeout: 5000 });
  await page.getByText('Add to cart').nth(0).click()
  await page.context().storageState({ path: authFile });
});