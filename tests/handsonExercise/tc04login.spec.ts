// Generate login test for the OrangeHRM demo site: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
// Log in with valid credentials. 
// Select the “My Info” tab. 
// Open the “Dependents” subtab. 
// In the Attachments section, select “Add.” 
// Browse to and select a sample PDF from the device. 
// Select “Save.


import { test, expect } from '@playwright/test';

test ('Verify that a sample PDF can be uploaded as an attachment. ', async({page}) => {
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
await page.getByRole('button', { name: 'Save' }).click(); // Click "Save" (Add Dependent form is inline, not a modal)
await page.getByRole('heading', { name: 'Add Dependent' }).waitFor({ state: 'hidden' }); // Wait for the inline Add form to close and the table to re-enable

// await page.click('button[type="button"]:has-text("Edit")'); // Click "Edit" button for the dependent

const dependentsTable = page.getByRole('table').first(); // "Assigned Dependents" is the first table on the page
await dependentsTable.getByRole('row').nth(1).locator('button:has(.bi-pencil-fill)').click(); // Click the edit (pencil) icon for the first dependent
await page.getByRole('heading', { name: 'Edit Dependent' }).waitFor({ state: 'visible' }); // Edit Dependent is also an inline form, not a modal

await page.getByRole('textbox').nth(1).fill('UpdatedDependentName');

await page.getByRole('button', { name: 'Save' }).click(); // Click "Save"
await page.getByRole('heading', { name: 'Edit Dependent' }).waitFor({ state: 'hidden' }); // Wait for the inline Edit form to close and the table to re-enable


const secondAddButton = page.getByRole('button', { name: 'Add' }).nth(1);
  await secondAddButton.click();

const browseBtn = page.locator('.oxd-file-button', { hasText: 'Browse' }).first();

  // Explicitly wait for the element to be visible
  await browseBtn.waitFor({ state: 'visible', timeout: 10000 });

  // Listen for the file picker event before clicking
  const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    browseBtn.click()
  ]);

  // Attach the file
  await fileChooser.setFiles('/Users/rameshbalasubramanian/PlaywrightAutomation/Samplefileupload.rtf');

  const saveButton = page.getByRole('button', { name: 'Save' }).last();

  // Wait explicitly for visibility (default timeout: 30s)
  await saveButton.waitFor({ state: 'visible', timeout: 10000 });
  await saveButton.click();

await expect(page.locator('.oxd-table-body').getByText('Samplefileupload.rtf').first()).toBeVisible(); // Verify the attachment now appears in the Attachments table

});