// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Search Results', () => {
  test('test', async ({page}) => {
    await page.goto('https://duckduckgo.com/');

    await page.pause();
  });
});
