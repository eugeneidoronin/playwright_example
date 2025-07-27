// @ts-check
// ...

import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup.beforeEach(async ({ page, isMobile }) => {
  setup.fixme(isMobile, 'wp-login page does not work in mobile yet');

});

setup('authenticate', async ({ page }) => {
 // navigate to the destination page and enter password
  await page.goto('/wp-login.php');
  await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('test');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('1');
  await page.getByRole('button', { name: 'Log In' }).click();

// dump the context
  await page.context().storageState({ path: authFile });
});