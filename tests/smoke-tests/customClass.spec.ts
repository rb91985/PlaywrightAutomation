import {test} from '@playwright/test';
import {CustomActions} from '../../extensions/custom-class';

test('login and logout test using custom class', async ({ page }) => {
  const actions = new CustomActions(page);
  await actions.login('student', 'Password123');
  await actions.logout();
}); 