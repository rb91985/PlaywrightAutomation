# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: handsonExercise/tc02login.spec.ts >> Verify that a new dependent can be added. 
- Location: tests/handsonExercise/tc02login.spec.ts:9:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('textbox').nth(2)
    - locator resolved to <input data-v-1f99f73c="" data-v-4a95a2e0="" placeholder="yyyy-dd-mm" class="oxd-input oxd-input--active"/>
    - fill("other")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

```

# Test source

```ts
  1  | //Generate login test for the OrangeHRM demo site: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  2  | // Select the “My Info” tab. 
  3  | // Open the “Dependents” subtab. 
  4  | // Add a dependent name and select “Other” as the relationship. 
  5  | // Specify the relationship and save the entry. 
  6  | 
  7  | import { test, expect } from '@playwright/test';
  8  | 
  9  | test ('Verify that a new dependent can be added. ', async({page}) => {
  10 | page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  11 | await page.fill('input[name="username"]', 'Admin');
  12 | await page.fill('input[name="password"]', 'admin123');
  13 | await page.click('button[type="submit"]');
  14 | await page.click('a[href="/web/index.php/pim/viewMyDetails"]'); // Click on "My Info" tab
  15 | await page.click('a[href="/web/index.php/pim/viewDependents/empNumber/7"]'); // Click on "Dependents" subtab
  16 | 
  17 | await page.click('button[type="button"]:has-text("Add")'); // Click "Add" button
  18 | 
  19 | // await page.fill('input[class="oxd-input oxd-input--active"]', 'DependentName'); // Enter dependent name
  20 | 
  21 | await page.getByRole('textbox').nth(1).fill('DependentName');
  22 | 
  23 | // await page.selectOption('select[class="oxd-select-text-input"]', 'other'); // Select "Other" as relationship
  24 | 
> 25 | // await page.getByRole('textbox').nth(2).fill('other');
     |                                        ^ Error: locator.fill: Target page, context or browser has been closed
  26 | 
  27 | // await page.locator('.oxd-select-option', { hasText: /^Other$/ }).click();
  28 | 
  29 | const dropdown = page.locator('.orangehrm-edit-employee-content form .oxd-select-text-input').first();
  30 |   
  31 |   // Open the dropdown menu
  32 |   await dropdown.click();
  33 | 
  34 |   // 2. Select the option with the exact text "Other"
  35 |   const optionOther = page.locator('.oxd-select-option', { hasText: /^Other$/ });
  36 |   await optionOther.click();
  37 | 
  38 |   // 3. Optional assertion to verify "Other" is selected
  39 |   await expect(dropdown).toHaveText('Other');
  40 | 
  41 |   await page.getByRole('textbox').nth(2).isVisible();
  42 |   await page.getByRole('textbox').nth(2).fill('SpecifiedRelationship');
  43 | 
  44 | 
  45 | // await page.fill('input[name="relationship"]', 'SpecifiedRelationship'); // Specify the relationship
  46 | 
  47 | // await page.getByRole('textbox').nth(2).fill('test');
  48 | await page.click('button[type="submit"]'); // Click "Save"
  49 | });
```