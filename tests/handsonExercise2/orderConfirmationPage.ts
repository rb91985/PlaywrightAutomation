// Verify the order confirmation message appears

import { test, expect } from '@playwright/test';

test('Verify the order confirmation message appears', async ({ page }) => {
  const confirmationMessage = await page.locator('.complete-header');
  await expect(confirmationMessage).toHaveText('THANK YOU FOR YOUR ORDER');
});