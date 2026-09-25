// Verify order summary shows the correct items and total 

import { test, expect } from '@playwright/test';

test('Verify order summary shows the correct items and total', async ({ page }) => {
  // Verify the item name in the order summary
  const itemName = await page.locator('.cart_item .inventory_item_name');
  await expect(itemName).toHaveText('Sauce Labs Backpack');

  // Verify the item quantity in the order summary
  const itemQuantity = await page.locator('.cart_item .cart_quantity');
  await expect(itemQuantity).toHaveText('1');

  // Verify the total amount in the order summary
  const totalAmount = await page.locator('.summary_total_label');
  await expect(totalAmount).toHaveText('Total: $29.99');
});
