# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e_SauceLab.spec.ts >> Verify the order confirmation message appears
- Location: tests/handsonExercise2/orderConfirmationPage.ts:5:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.complete-header')
Expected: "THANK YOU FOR YOUR ORDER"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" locator('.complete-header') with timeout 5000ms
  - waiting for locator('.complete-header')

```

# Test source

```ts
  1 | // Verify the order confirmation message appears
  2 | 
  3 | import { test, expect } from '@playwright/test';
  4 | 
  5 | test('Verify the order confirmation message appears', async ({ page }) => {
  6 |   const confirmationMessage = await page.locator('.complete-header');
> 7 |   await expect(confirmationMessage).toHaveText('THANK YOU FOR YOUR ORDER');
    |                                     ^ Error: expect(locator).toHaveText(expected) failed
  8 | });
```