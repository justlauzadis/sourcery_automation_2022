const { test, expect } = require('@playwright/test');

test.describe('Search results', () => {
    test('.test', async ({ page }) => {
    await page.goto('https://duckduckgo.com/');
    await page.locator('input[name=q]').fill('test');
    await page.pause();
    });
});