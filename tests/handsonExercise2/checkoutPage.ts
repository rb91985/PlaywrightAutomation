// Fill checkout details and proceed to order summary 

import { test, expect } from '@playwright/test';

test('Fill checkout details and proceed to order summary', async ({ page }) => {
  // Fill in checkout details
  await page.fill('#first-name', 'John');
  await page.fill('#last-name', 'Doe');
  await page.fill('#postal-code', '43065');

  // Click the continue button to proceed to order summary
  await page.click('#continue');
});
