# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: handsonExercise/tc05login.spec.ts >> Verify that a sample PDF can be uploaded as an attachment. 
- Location: tests/handsonExercise/tc05login.spec.ts:10:5

# Error details

```
Error: page.click: Unexpected token "" while parsing css selector "a[href="/web/index.php/pim/viewDependents/empNumber/7""]". Did you mean to CSS.escape it?
Call log:
  - waiting for a[href="/web/index.php/pim/viewDependents/empNumber/7""]

```

# Test source

```ts
  1  | // Generate login test for the OrangeHRM demo site: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  2  | // Log in with valid credentials. 
  3  | // Select the “My Info” tab. 
  4  | // Open the “Dependents” subtab. 
  5  | // In the Attachments section, select “Add.” 
  6  | // Enter text exceeding 200 characters in the Comments field. 
  7  | 
  8  | import { test, expect } from '@playwright/test';
  9  | 
  10 | test ('Verify that a sample PDF can be uploaded as an attachment. ', async({page}) => {
  11 | page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  12 | await page.fill('input[name="username"]', 'Admin');
  13 | await page.fill('input[name="password"]', 'admin123');
  14 | await page.click('button[type="submit"]');
  15 | await page.click('a[href="/web/index.php/pim/viewMyDetails"]'); // Click on "My Info" tab
> 16 | await page.click('a[href="/web/index.php/pim/viewDependents/empNumber/7""]'); // Click on "Dependents" subtab
     |            ^ Error: page.click: Unexpected token "" while parsing css selector "a[href="/web/index.php/pim/viewDependents/empNumber/7""]". Did you mean to CSS.escape it?
  17 | 
  18 | await page.click('button[type="button"]:has-text("Add")'); // Click "Add" button in Attachments section
  19 | await page.setInputFiles('input[type="file"]', '/Users/rameshbalasubramanian/PlaywrightAutomation/Samplefileupload.rtf'); // Upload sample PDF
  20 | await page.click('button[type="submit"]'); // Click "Save" for attachment
  21 | await page.getByText('Successfully Uploaded').waitFor(); // Wait for upload confirmation toast
  22 | 
  23 | });
```