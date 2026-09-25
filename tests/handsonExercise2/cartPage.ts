// navigate to the cart and verify the added product is listed, by checking the cart item name and quantity

import { test, expect } from '@playwright/test';

test('Verify added product in cart', async ({ page }) => {
  // Navigate to the cart
  await page.click('.shopping_cart_link');

  // Verify the added product is listed
  const cartItemName = await page.locator('.cart_item .inventory_item_name');
  await expect(cartItemName).toHaveText('Sauce Labs Backpack');

  const cartItemQuantity = await page.locator('.cart_item .cart_quantity');
  await expect(cartItemQuantity).toHaveText('1');
});