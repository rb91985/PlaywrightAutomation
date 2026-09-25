# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e_SauceLab.spec.ts >> Fill checkout details and proceed to order summary
- Location: tests/handsonExercise2/checkoutPage.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#first-name')

```

# Test source

```ts
  1  | // Fill checkout details and proceed to order summary 
  2  | 
  3  | import { test, expect } from '@playwright/test';
  4  | 
  5  | test('Fill checkout details and proceed to order summary', async ({ page }) => {
  6  |   // Fill in checkout details
> 7  |   await page.fill('#first-name', 'John');
     |              ^ Error: page.fill: Test timeout of 30000ms exceeded.
  8  |   await page.fill('#last-name', 'Doe');
  9  |   await page.fill('#postal-code', '43065');
  10 | 
  11 |   // Click the continue button to proceed to order summary
  12 |   await page.click('#continue');
  13 | });
  14 | 
```