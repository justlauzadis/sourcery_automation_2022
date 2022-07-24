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
    test('Adding 2 and 3 results in 5', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('5');
    });
  });
  test.describe(version + ': Subtract', () => {
    test('Subtracting 2 and 3 results in -1', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('-1');
    });
  });
  test.describe(version + ': Multiply', () => {
    test('Multiplying 2 and 3 results in 6', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('6');
    });
  });
  test.describe(version + ': Divide', () => {
    test('Dividing 4 and 2 results in 2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('4');
      await page.locator('#number2Field').type('2');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('2');
    });
  });
  test.describe(version + ': Concatenate', () => {
    test('Concatenating 2 and 3 results in 23', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('23');
    });
  });
  test.describe(version + ': Letter', () => {
    test('Adding letter in any field when doing non concatenate operation doesnt do operation', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('a');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    });
  });
  test.describe(version + ': Zero', () => {
    test('Dividing by zero does no calculation', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('')
    });
  });
  test.describe(version + ': Integer select button ', () => {
    test('Integer select button can be selected', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await page.locator('#number1Field').type('2.5');
      await page.locator('#number2Field').type('3.8');
      await page.selectOption('#selectOperationDropdown', { label: 'Add' });
      await page.locator('#calculateButton').click();

      await page.locator('#integerSelect').click();

     expect(await page.isChecked('#integerSelect')).toBeTruthy()
    });
  })
  test.describe(version + ': Integer checkbox disabled', () => {
    test('Integer checkbox disabled with concatenate operation', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version });
      await page.locator('#number1Field').type('2.5');
      await page.locator('#number2Field').type('3.8');
      await page.selectOption('#selectOperationDropdown', { label: 'Concatenate' });
      await page.locator('#calculateButton').click();
  
      const locator = page.locator('#integerSelect');
      await expect(locator).toBeDisabled();
    });
  });
});