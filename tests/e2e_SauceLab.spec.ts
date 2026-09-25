import { test, expect } from '@playwright/test';
import './handsonExercise2/loginPage';
import { LoginPage } from './handsonExercise2/loginPage';
import './handsonExercise2/inventoryPage';
import './handsonExercise2/cartPage';
import './handsonExercise2/checkoutPage';
import './handsonExercise2/checkoutSummaryPage';
import './handsonExercise2/orderConfirmationPage';

test('End-to-end test for Sauce Labs', async ({ page }) => {
  // The test steps would go here, for example:
  // 1. Login
  // 2. Add item to cart
  // 3. Proceed to checkout
  // 4. Fill checkout details
  // 5. Verify order summary
  // 6. Confirm order

  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.login('standard_user');
  // Add item to cart
  const addItemButton = await page.locator('#add-to-cart-sauce-labs-backpack');
  await addItemButton.click();  
  // Proceed to checkout
  const cartButton = await page.locator('#shopping_cart_container');
  await cartButton.click();
  const checkoutButton = await page.locator('#checkout');
  await checkoutButton.click();
  // Fill checkout details
  const firstNameInput = await page.locator('#first-name');
  await firstNameInput.fill('John');
  const lastNameInput = await page.locator('#last-name');
  await lastNameInput.fill('Doe');
  const postalCodeInput = await page.locator('#postal-code');
  await postalCodeInput.fill('43065');
  const continueButton = await page.locator('#continue');
  await continueButton.click();
  // Verify order summary
  const itemName = await page.locator('.cart_item .inventory_item_name');
  await expect(itemName).toHaveText('Sauce Labs Backpack');

  const itemQuantity = await page.locator('.cart_item .cart_quantity');
  await expect(itemQuantity).toHaveText('1');

  const totalAmount = await page.locator('.summary_total_label');
  await expect(totalAmount).toHaveText('Total: $29.99');

  // Confirm order
  const finishButton = await page.locator('#finish');
  await finishButton.click();

  const confirmationMessage = await page.locator('.complete-header');
  await expect(confirmationMessage).toHaveText('THANK YOU FOR YOUR ORDER');
  // End of test
  await page.close();



});