import { test, expect,TestInfo } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.locator('text=Installation').click()

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
test('navigate to sauce labs', async ({ page }) => {
  await test.step( `navigate to sauce demo `, async() =>{ 
    await page.goto('https://www.saucedemo.com/');
  })
  
  await test.step( `input username `, async() =>{ 
    await page.locator('//input[@name="user-name"]').fill('standard_user');
  })

  await test.step( `input password `, async() =>{ 
    await page.locator('//input[@placeholder="Password"]').fill('secret_sauce')
  })

  await test.step( `click on loginbutton `, async() =>{ 
    await page.locator('//input[@name="login-button"]').click()
  })
  
  await test.step( `click on loginbutton `, async() =>{ 
    await page.getByText('Add to cart').nth(0).click()
  })
});
test('navigate to automation exercise', async ({ page }) => {
  await test.step( `navigate to sauce demo `, async() =>{ 
    await page.goto('https://automationexercise.com/');
  })
  await test.step( `wait for home loading to finish `, async() =>{ 
    await page.locator('//a[text()=" Home"]').click()
    await page.waitForLoadState('domcontentloaded')
  })

  await test.step( `click on data slide ="0" `, async() =>{ 
    await page.locator('//li[@data-slide-to="0"]').click()
  })

  await test.step( `click on test cases doc `, async() =>{ 
    await page.locator('//button[text()="Test Cases"]').nth(0).click()
  })

  

  // await test.step( `click on loginbutton `, async() =>{ 
  //   await page.locator('//input[@name="login-button"]').click()
  // })
 
});
test('click on signup login for automation exercise', async ({ page }) => {
 
  await test.step( `navigate to sauce demo `, async() =>{ 
    await page.goto('https://automationexercise.com');
  })
  await test.step( `wait for home loading to finish `, async() =>{ 
    await page.locator('//a[text()=" Home"]').click()
    await page.waitForLoadState('domcontentloaded')
  })
  await test.step( `click on signup data for login `, async() =>{ 
    await page.getByRole('link',{name:' Signup / Login'}).click()
    await page.waitForLoadState('domcontentloaded')
  })
  // await test.step( `click on loginbutton `, async() =>{ 
  //   await page.locator('//input[@name="login-button"]').click()
  // })
 
});
test('do accessablity scan for  sauce labs', async ({ page }, testInfo) => {
  await test.step( `navigate to sauce demo `, async() =>{ 
    await page.goto('https://www.saucedemo.com/');
  })
  
  await test.step( `input username `, async() =>{ 
    await page.locator('//input[@name="user-name"]').fill('standard_user');
  })

  await test.step( `input password `, async() =>{ 
    await page.locator('//input[@placeholder="Password"]').fill('secret_sauce')
  })

  await test.step( `click on loginbutton `, async() =>{ 
    await page.locator('//input[@name="login-button"]').click()
  })




  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  await testInfo.attach('accessibility-scan-results', {
    body: JSON.stringify(accessibilityScanResults, null, 2),
    contentType: 'application/json'
  });

  expect(accessibilityScanResults.violations).toEqual([]);
});
test('add to cart sauce demo', async ({ page }) => {
  await test.step( `navigate to sauce demo `, async() =>{ 
    await page.goto('https://www.saucedemo.com/');
  })
  
  await test.step( `input username `, async() =>{ 
    await page.locator('//input[@name="user-name"]').fill('standard_user');
  })

  await test.step( `input password `, async() =>{ 
    await page.locator('//input[@placeholder="Password"]').fill('secret_sauce')
  })

  await test.step( `click on loginbutton `, async() =>{ 
    await page.locator('//input[@name="login-button"]').click()
  })
  
  await test.step( `click on loginbutton `, async() =>{ 
    await page.getByText('Add to cart').nth(0).click()
  })
});
test('checkout Sauce Demo', async ({ page }) => {
  await test.step( `navigate to sauce demo `, async() =>{ 
    await page.goto('https://www.saucedemo.com/');
  })
  
  await test.step( `input username `, async() =>{ 
    await page.locator('//input[@name="user-name"]').fill('standard_user');
  })

  await test.step( `input password `, async() =>{ 
    await page.locator('//input[@placeholder="Password"]').fill('secret_sauce')
  })

  await test.step( `click on loginbutton `, async() =>{ 
    await page.locator('//input[@name="login-button"]').click()
  })
  
  await test.step( `click on loginbutton `, async() =>{ 
    await page.getByText('Add to cart').nth(0).click()
  })

  await test.step( `click on loginbutton `, async() =>{ 
    await page.locator('//a[@data-test="shopping-cart-link"]').nth(0).click()
  })

  await test.step( `click on check Out`, async() =>{ 
    await page.getByText('checkOut').nth(0).click()
  })

  await test.step( `click on loginbutton `, async() =>{ 
    await page.locator('//input[@name="firstName"]').pressSequentially('asho Hagi')
  })
});
test('input first username', async ({ page }) => {
  await test.step( `navigate to sauce demo `, async() =>{ 
    await page.goto('https://www.saucedemo.com/');
  })
  
  await test.step( `input username `, async() =>{ 
    await page.locator('//input[@name="user-name"]').fill('standard_user');
  })

  await test.step( `input password `, async() =>{ 
    await page.locator('//input[@placeholder="Password"]').fill('secret_sauce')
  })

  await test.step( `click on loginbutton `, async() =>{ 
    await page.locator('//input[@name="login-button"]').click()
  })
  
  await test.step( `click on loginbutton `, async() =>{ 
    await page.getByText('Add to cart').nth(0).click()
  })

  await test.step( `click on loginbutton `, async() =>{ 
    await page.locator('//a[@data-test="shopping-cart-link"]').nth(0).click()
  })

  await test.step( `click on check Out`, async() =>{ 
    await page.getByText('checkOut').nth(0).click()
  })

  await test.step( `click on loginbutton `, async() =>{ 
    await page.locator('//input[@name="firstName"]').pressSequentially('asho Hagi')
  })
});