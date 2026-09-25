// Add a product to the cart and verify the card batch updates, by button by id or name #add-to-cart-sauce-labs-backpack
// Verify the remove button appears after adding a product with the button name #remove-sauce-labs-backpack

import { test, expect } from '@playwright/test';

test('Add product to cart and verify remove button', async ({ page }) => {
  // Add a product to the cart
  await page.click('#add-to-cart-sauce-labs-backpack');

  // Verify the cart badge updates
  const cartBadge = await page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('1');

  // Verify the remove button appears
  const removeButton = await page.locator('#remove-sauce-labs-backpack');
  await expect(removeButton).toBeVisible();
});