# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e_SauceLab.spec.ts >> Verify added product in cart
- Location: tests/handsonExercise2/cartPage.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.shopping_cart_link')

```

# Test source

```ts
  1  | // navigate to the cart and verify the added product is listed, by checking the cart item name and quantity
  2  | 
  3  | import { test, expect } from '@playwright/test';
  4  | 
  5  | test('Verify added product in cart', async ({ page }) => {
  6  |   // Navigate to the cart
> 7  |   await page.click('.shopping_cart_link');
     |              ^ Error: page.click: Test timeout of 30000ms exceeded.
  8  | 
  9  |   // Verify the added product is listed
  10 |   const cartItemName = await page.locator('.cart_item .inventory_item_name');
  11 |   await expect(cartItemName).toHaveText('Sauce Labs Backpack');
  12 | 
  13 |   const cartItemQuantity = await page.locator('.cart_item .cart_quantity');
  14 |   await expect(cartItemQuantity).toHaveText('1');
  15 | });
```