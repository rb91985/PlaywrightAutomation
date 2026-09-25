# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e_SauceLab.spec.ts >> Add product to cart and verify remove button
- Location: tests/handsonExercise2/inventoryPage.ts:6:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#add-to-cart-sauce-labs-backpack')

```

# Test source

```ts
  1  | // Add a product to the cart and verify the card batch updates, by button by id or name #add-to-cart-sauce-labs-backpack
  2  | // Verify the remove button appears after adding a product with the button name #remove-sauce-labs-backpack
  3  | 
  4  | import { test, expect } from '@playwright/test';
  5  | 
  6  | test('Add product to cart and verify remove button', async ({ page }) => {
  7  |   // Add a product to the cart
> 8  |   await page.click('#add-to-cart-sauce-labs-backpack');
     |              ^ Error: page.click: Test timeout of 30000ms exceeded.
  9  | 
  10 |   // Verify the cart badge updates
  11 |   const cartBadge = await page.locator('.shopping_cart_badge');
  12 |   await expect(cartBadge).toHaveText('1');
  13 | 
  14 |   // Verify the remove button appears
  15 |   const removeButton = await page.locator('#remove-sauce-labs-backpack');
  16 |   await expect(removeButton).toBeVisible();
  17 | });
```