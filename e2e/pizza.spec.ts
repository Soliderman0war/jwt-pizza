import { test, expect } from 'playwright-test-coverage';

test('test', async ({ page }) => {
  const menuResponse = [{ title: 'Veggie', description: 'A garden of delight' }];

  await page.route('*/**/api/order/menu', async (route) => {
    expect(route.request().method()).toBe('GET');
    await route.fulfill({ json: menuResponse });
  });

  await page.goto('http://localhost:3000/');
  await expect(page.getByText('Pizza')).toBeVisible();

});