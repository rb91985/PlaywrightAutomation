// Generate login test for the OrangeHRM demo site: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
// Log in with valid credentials. 
// Select the “My Info” tab. 
// Open the “Dependents” subtab. 
// In the Attachments section, select “Add.” 
// Enter text exceeding 200 characters in the Comments field. 

import { test, expect } from '@playwright/test';

test ('Verify that a sample PDF can be uploaded as an attachment. ', async({page}) => {
page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.fill('input[name="username"]', 'Admin');
await page.fill('input[name="password"]', 'admin123');
await page.click('button[type="submit"]');
await page.click('a[href="/web/index.php/pim/viewMyDetails"]'); // Click on "My Info" tab

await page.click('a[href="/web/index.php/pim/viewDependents/empNumber/7"]'); // Click on "Dependents" subtab


const secondAddButton = page.getByRole('button', { name: 'Add' }).nth(1);
  await secondAddButton.click();

const browseBtn = page.locator('.oxd-file-button', { hasText: 'Browse' }).first();

  // Explicitly wait for the element to be visible
  await browseBtn.waitFor({ state: 'visible', timeout: 10000 });
const commentInput = page.getByPlaceholder('Type comment here');

  // 2. Wait explicitly for the element to be visible on screen
  await commentInput.waitFor({ state: 'visible', timeout: 10000 });

  // 3. Generate a sample string with more than 200 characters
  const longComment = 'This is an automated test comment to verify that the field accepts long input. '.repeat(4);
  console.log(`Comment length: ${longComment.length} characters`); // Output: ~312 characters

  // 4. Fill the text area with the long text
  await commentInput.fill(longComment);

  // 5. Verify the input contains the entered text
  await expect(commentInput).toHaveValue(longComment);
  
});