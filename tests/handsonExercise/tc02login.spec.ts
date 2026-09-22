//Generate login test for the OrangeHRM demo site: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
// Select the “My Info” tab. 
// Open the “Dependents” subtab. 
// Add a dependent name and select “Other” as the relationship. 
// Specify the relationship and save the entry. 

import { test, expect } from '@playwright/test';

test ('Verify that a new dependent can be added. ', async({page}) => {
page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.fill('input[name="username"]', 'Admin');
await page.fill('input[name="password"]', 'admin123');
await page.click('button[type="submit"]');
await page.click('a[href="/web/index.php/pim/viewMyDetails"]'); // Click on "My Info" tab
await page.click('a[href="/web/index.php/pim/viewDependents/empNumber/7"]'); // Click on "Dependents" subtab

await page.click('button[type="button"]:has-text("Add")'); // Click "Add" button

// await page.fill('input[class="oxd-input oxd-input--active"]', 'DependentName'); // Enter dependent name

await page.getByRole('textbox').nth(1).fill('DependentName');

// await page.selectOption('select[class="oxd-select-text-input"]', 'other'); // Select "Other" as relationship

// await page.getByRole('textbox').nth(2).fill('other');

// await page.locator('.oxd-select-option', { hasText: /^Other$/ }).click();

const dropdown = page.locator('.orangehrm-edit-employee-content form .oxd-select-text-input').first();
  
  // Open the dropdown menu
  await dropdown.click();

  // 2. Select the option with the exact text "Other"
  const optionOther = page.locator('.oxd-select-option', { hasText: /^Other$/ });
  await optionOther.click();

  // 3. Optional assertion to verify "Other" is selected
  await expect(dropdown).toHaveText('Other');

  await page.getByRole('textbox').nth(2).isVisible();
  await page.getByRole('textbox').nth(2).fill('SpecifiedRelationship');


// await page.fill('input[name="relationship"]', 'SpecifiedRelationship'); // Specify the relationship


await page.click('button[type="submit"]'); // Click "Save"
});