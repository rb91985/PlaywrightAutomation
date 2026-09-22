//Generate login test for the OrangeHRM demo site: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
// Log in with valid credentials. 
// Select the “My Info” tab. 
// Clear the existing value in the name field. 
// Enter a new name and select “Save.” 
// Refresh the page. 
// The updated employee name is saved and remains visible after the page is refreshed 

import { test, expect } from '@playwright/test';

test ('Verify that the employee name can be updated successfully. ', async({page}) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.fill('input[name="username"]', 'Admin');
await page.fill('input[name="password"]', 'admin123');
await page.click('button[type="submit"]');
await page.waitForURL('**/dashboard/index'); // Wait for login to complete
await page.click('a[href="/web/index.php/pim/viewMyDetails"]'); // Click on "My Info" tab
await page.waitForURL('**/pim/viewPersonalDetails/**'); // Wait for My Info page to load
await page.fill('input[name="firstName"]', 'NewName'); // Clear and enter new name
await page.fill('input[name="middleName"]', 'NewMiddleName'); // Clear and enter new middle name
await page.getByRole('button', { name: 'Save' }).first().click(); // Click "Save"
await page.getByText('Successfully Updated').waitFor(); // Wait for save confirmation toast
await page.reload(); // Refresh the page
const firstNameInput = page.locator('input[name="firstName"]');
const middleNameInput = page.locator('input[name="middleName"]');
await expect(firstNameInput).toHaveValue('NewName'); // Verify the updated name is saved (auto-waits for reload to finish)
await expect(middleNameInput).toHaveValue('NewMiddleName'); // Verify the updated middle name is saved
});