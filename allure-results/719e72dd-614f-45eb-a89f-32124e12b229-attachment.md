# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e_SauceLab.spec.ts >> End-to-end test for Sauce Labs
- Location: tests/e2e_SauceLab.spec.ts:9:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#login-button')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import './handsonExercise2/loginPage';
  3  | import './handsonExercise2/inventoryPage';
  4  | import './handsonExercise2/cartPage';
  5  | import './handsonExercise2/checkoutPage';
  6  | import './handsonExercise2/checkoutSummaryPage';
  7  | import './handsonExercise2/orderConfirmationPage';
  8  | 
  9  | test('End-to-end test for Sauce Labs', async ({ page }) => {
  10 |   // The test steps would go here, for example:
  11 |   // 1. Login
  12 |   // 2. Add item to cart
  13 |   // 3. Proceed to checkout
  14 |   // 4. Fill checkout details
  15 |   // 5. Verify order summary
  16 |   // 6. Confirm order
  17 | 
  18 |   const loginPage = await page.locator('#login-button');
> 19 |   await loginPage.click();
     |                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  20 |   // Add item to cart
  21 |   const addItemButton = await page.locator('#add-to-cart-sauce-labs-backpack');
  22 |   await addItemButton.click();  
  23 |   // Proceed to checkout
  24 |   const cartButton = await page.locator('#shopping_cart_container');
  25 |   await cartButton.click();
  26 |   const checkoutButton = await page.locator('#checkout');
  27 |   await checkoutButton.click();
  28 |   // Fill checkout details
  29 |   const firstNameInput = await page.locator('#first-name');
  30 |   await firstNameInput.fill('John');
  31 |   const lastNameInput = await page.locator('#last-name');
  32 |   await lastNameInput.fill('Doe');
  33 |   const postalCodeInput = await page.locator('#postal-code');
  34 |   await postalCodeInput.fill('43065');
  35 |   const continueButton = await page.locator('#continue');
  36 |   await continueButton.click();
  37 |   // Verify order summary
  38 |   const itemName = await page.locator('.cart_item .inventory_item_name');
  39 |   await expect(itemName).toHaveText('Sauce Labs Backpack');
  40 | 
  41 |   const itemQuantity = await page.locator('.cart_item .cart_quantity');
  42 |   await expect(itemQuantity).toHaveText('1');
  43 | 
  44 |   const totalAmount = await page.locator('.summary_total_label');
  45 |   await expect(totalAmount).toHaveText('Total: $29.99');
  46 | 
  47 |   // Confirm order
  48 |   const finishButton = await page.locator('#finish');
  49 |   await finishButton.click();
  50 | 
  51 |   const confirmationMessage = await page.locator('.complete-header');
  52 |   await expect(confirmationMessage).toHaveText('THANK YOU FOR YOUR ORDER');
  53 |   // End of test
  54 |   await page.close();
  55 | 
  56 | });
```