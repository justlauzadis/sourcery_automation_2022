// @ts-check
const { test, expect } = require('@playwright/test');

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
    test('Adding 3,3 and 4 results in 7', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('3,3');
      await page.locator('#number2Field').type('4');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#integerSelect').click();
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('7');
    });
    test('Adding -3 and 4 results in 1', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-3');
      await page.locator('#number2Field').type('4');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('1');
    });
    test('Adding -3 and -4 results in -7', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-3');
      await page.locator('#number2Field').type('-4');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('-7');
     });
     test('Adding 0 and 4 results in 4', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('0');
      await page.locator('#number2Field').type('4');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('4');
     });
     test('Adding 0 and 0 results in 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('0');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('0');
     });
     test('Adding -3 and 0 results in -3', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-3');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('-3');
     });
    });
  test.describe(version + ': Subtract', () => {
    test('Subtracting 5 and 4 results in 1', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('5');
      await page.locator('#number2Field').type('4');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('1');
    });
  test.describe(version + ': Multiply', () => {
     test('Multiplying 2 and 4 results in 8', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('4');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
   
       await expect(page.locator('#numberAnswerField')).toHaveValue('8');
    });
  });
    test.describe(version + ': Divide', () => {
      test('Dividing 6 and 2 results in 3', async ({ page }) => {
       await page.goto('https://testsheepnz.github.io/BasicCalculator');
       await page.selectOption('#selectBuild', { label: version});
       await page.locator('#number1Field').type('6');
       await page.locator('#number2Field').type('2');
       await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
       await page.locator('#calculateButton').click();
   
       await expect(page.locator('#numberAnswerField')).toHaveValue('3');
      });
    });
    test.describe(version + ': Concatenate', () => {
      test('Concatenating 1 and 2 results in 12', async ({ page }) => {
       await page.goto('https://testsheepnz.github.io/BasicCalculator');
       await page.selectOption('#selectBuild', { label: version});
       await page.locator('#number1Field').type('1');
       await page.locator('#number2Field').type('2');
       await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
       await page.locator('#calculateButton').click();
   
       await expect(page.locator('#numberAnswerField')).toHaveValue('12');
      });
    });

});
});
