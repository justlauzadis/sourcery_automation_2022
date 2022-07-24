const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../pages/SearchPage');

const data = [
  'Prototype',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
]


data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Function add, 4 + 3 result should be 7', async ({ page }) => {
      let searchPage = new SearchPage(page);
      await searchPage.navigate();
      await page.selectOption('#selectBuild', { label: version});
      await searchPage.search('4', '3');
      await searchPage.selectOption('Add');
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('7');
    });

    test('Function subtract, 4 - 3 = result should be 1', async ({ page }) => {
      let searchPage = new SearchPage(page);
      await searchPage.navigate();
      await page.selectOption('#selectBuild', { label: version});
      await searchPage.search('4', '3'); // field1 and field2 value
      await searchPage.selectOption('Subtract'); // operation field
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('1');
    });
    
    test('Function multiply, 5 * 2 = result should be 10', async ({ page }) => {
      let searchPage = new SearchPage(page);
      await searchPage.navigate();
      await page.selectOption('#selectBuild', { label: version});
      await searchPage.search('5', '2'); // field1 and field2 value
      await searchPage.selectOption('Multiply'); // operation field
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('10');
    });

    test('Function divide, 6/2 = result should be 3', async ({ page }) => {
      let searchPage = new SearchPage(page);
      await searchPage.navigate();
      await page.selectOption('#selectBuild', { label: version});
      await searchPage.search('6', '2'); // field1 and field2 value
      await searchPage.selectOption('Divide'); // operation field
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('3');
    });

    test('Function concatenate, 1 and 1 = result should be 11', async ({ page }) => {
      let searchPage = new SearchPage(page);
      await searchPage.navigate();
      await page.selectOption('#selectBuild', { label: version});
      await searchPage.search('1', '1'); // field1 and field2 value
      await searchPage.selectOption('Concatenate'); // operation field
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('11');
    });
  });
});