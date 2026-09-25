# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e_SauceLab.spec.ts >> Verify order summary shows the correct items and total
- Location: tests/handsonExercise2/checkoutSummaryPage.ts:5:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.cart_item .inventory_item_name')
Expected: "Sauce Labs Backpack"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" locator('.cart_item .inventory_item_name') with timeout 5000ms
  - waiting for locator('.cart_item .inventory_item_name')

```

# Test source

```ts
  1  | // Verify order summary shows the correct items and total 
  2  | 
  3  | import { test, expect } from '@playwright/test';
  4  | 
  5  | test('Verify order summary shows the correct items and total', async ({ page }) => {
  6  |   // Verify the item name in the order summary
  7  |   const itemName = await page.locator('.cart_item .inventory_item_name');
> 8  |   await expect(itemName).toHaveText('Sauce Labs Backpack');
     |                          ^ Error: expect(locator).toHaveText(expected) failed
  9  | 
  10 |   // Verify the item quantity in the order summary
  11 |   const itemQuantity = await page.locator('.cart_item .cart_quantity');
  12 |   await expect(itemQuantity).toHaveText('1');
  13 | 
  14 |   // Verify the total amount in the order summary
  15 |   const totalAmount = await page.locator('.summary_total_label');
  16 |   await expect(totalAmount).toHaveText('Total: $29.99');
  17 | });
  18 | 
```