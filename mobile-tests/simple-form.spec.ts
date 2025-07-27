// @ts-check
// ...

import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('simple-form', async ({ page }) => {
  await page.goto('/simple-form/');

  // First verify the initial form state without validation errors
  await expect(page.locator('#wp--skip-link--target')).toMatchAriaSnapshot(`
  - main:
    - heading "simple-form" [level=1]
    - group "Name":
      - text: Name
      - textbox "First"
      - text: First
      - textbox "Last"
      - text: Last
    - text: Email
    - textbox "Email"
    - text: Comment or Message
    - textbox "Comment or Message"
    - button "Submit"
  `);

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName });
  const comment = faker.lorem.sentences(2);

  // Continue with the form filling
  await page.getByRole('textbox', { name: 'First' }).click();
  await page.getByRole('textbox', { name: 'First' }).fill(firstName);
  await page.getByRole('textbox', { name: 'Last' }).click();
  await page.getByRole('textbox', { name: 'Last' }).fill(lastName);
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(email);
  await page.getByRole('textbox', { name: 'Comment or Message' }).click();
  await page.getByRole('textbox', { name: 'Comment or Message' }).fill(comment);
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#wpforms-confirmation-8')).toBeVisible();
});

