// @ts-check
// ...

import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page, isMobile }) => {
  test.fixme(isMobile, 'newsletter-signup page does not work in mobile yet');

});
test('newsletter-signup', async({page, isMobile}) =>{

    await page.goto('/newsletter-signup/');
    await expect(page.locator('#wp--skip-link--target')).toMatchAriaSnapshot(`
    - heading "newsletter-signup" [level=1]
    - group "Name":
      - textbox "First"
      - text: First
      - textbox "Last"
      - text: Last
    - text: Email
    - textbox "Email"
    - button "Submit"
    `);
});
