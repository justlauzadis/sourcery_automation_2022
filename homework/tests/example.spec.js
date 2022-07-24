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
      test.describe.parallel(version + ': Addition', () => {
      test('Should add two positive integers: 2 and 3', async ({page}) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('2');
          await page.locator('#number2Field').type('3');
          await page.selectOption('#selectOperationDropdown', {label: 'Add'});
          await page.locator('#calculateButton').click();
    
          await expect(page.locator('#numberAnswerField')).toHaveValue('5');
      });
    
      test('Should add two negative integers: -2 and -3 ', async ({page}) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('-2');
          await page.locator('#number2Field').type('-3');
          await page.selectOption('#selectOperationDropdown', {label: 'Add'});
          await page.locator('#calculateButton').click();
    
          await expect(page.locator('#numberAnswerField')).toHaveValue('-5');
      });
    
      test('Should add one positive and one negative number: 2 and -3', async ({page}) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('2');
          await page.locator('#number2Field').type('-3');
          await page.selectOption('#selectOperationDropdown', {label: 'Add'});
          await page.locator('#calculateButton').click();
    
          await expect(page.locator('#numberAnswerField')).toHaveValue('-1');
      });
    
      test('Should add two positive integers (with integer checkbox selected): 2 and 3', async ({page}) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('2');
          await page.locator('#number2Field').type('3');
          await page.selectOption('#selectOperationDropdown', {label: 'Add'});
          await page.locator('#integerSelect').check();
          await page.locator('#calculateButton').click();
    
          await expect(page.locator('#numberAnswerField')).toHaveValue('5');
      });
    
      test('Should add two negative integers (with integer checkbox selected): -2 and -3', async ({page}) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('-2');
          await page.locator('#number2Field').type('-3');
          await page.selectOption('#selectOperationDropdown', {label: 'Add'});
          await page.locator('#integerSelect').check();
          await page.locator('#calculateButton').click();
    
          await expect(page.locator('#numberAnswerField')).toHaveValue('-5');
      });
    
      test('Should add one positive and one negative integer (with integer checkbox selected): 2 and -3', async ({page}) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('2');
          await page.locator('#number2Field').type('-3');
          await page.selectOption('#selectOperationDropdown', {label: 'Add'});
          await page.locator('#integerSelect').check();
          await page.locator('#calculateButton').click();
    
          await expect(page.locator('#numberAnswerField')).toHaveValue('-1');
      });
    
      test('Should add two positive floats: 2.2 and 3.2', async ({page}) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('2.2');
          await page.locator('#number2Field').type('3.2');
          await page.selectOption('#selectOperationDropdown', {label: 'Add'});
          await page.locator('#calculateButton').click();
    
          await expect(page.locator('#numberAnswerField')).toHaveValue('5.4');
      });
    
      test('Should add two negative floats: -2.2 and -3.2', async ({page}) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('-2.2');
          await page.locator('#number2Field').type('-3.2');
          await page.selectOption('#selectOperationDropdown', {label: 'Add'});
          await page.locator('#calculateButton').click();
    
          await expect(page.locator('#numberAnswerField')).toHaveValue('-5.4');
      });
    
      test('Should add one positive and one negative float: 2.2 and -3.2', async ({page}) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('2.2');
          await page.locator('#number2Field').type('-3.2');
          await page.selectOption('#selectOperationDropdown', {label: 'Add'});
          await page.locator('#calculateButton').click();
    
          await expect(page.locator('#numberAnswerField')).toHaveValue('-1');
      });
    
      test('Should add two positive floats resulting an integer (with integer checkbox selected): 2.2 and 3.2', async ({page}) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('2.2');
          await page.locator('#number2Field').type('3.2');
          await page.selectOption('#selectOperationDropdown', {label: 'Add'});
          await page.locator('#integerSelect').check();
          await page.locator('#calculateButton').click();
    
          await expect(page.locator('#numberAnswerField')).toHaveValue('5');
      });
    
      test('Should add two negative floats resulting an integer (with integer checkbox selected): -2.2 and -3.2', async ({page}) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('-2.2');
          await page.locator('#number2Field').type('-3.2');
          await page.selectOption('#selectOperationDropdown', {label: 'Add'});
          await page.locator('#integerSelect').check();
          await page.locator('#calculateButton').click();
    
          await expect(page.locator('#numberAnswerField')).toHaveValue('-5');
      });
    
      test('Should add one positive and one negative float (with integer checkbox selected): 2.2 and -3.2', async ({page}) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('2.2');
          await page.locator('#number2Field').type('-3.2');
          await page.selectOption('#selectOperationDropdown', {label: 'Add'});
          await page.locator('#integerSelect').check();
          await page.locator('#calculateButton').click();
    
          await expect(page.locator('#numberAnswerField')).toHaveValue('-1');
      });
    
      test('Should show error message when a letter is typed in first number field: a and 3', async ({page}) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('a');
          await page.locator('#number2Field').type('3');
          await page.selectOption('#selectOperationDropdown', {label: 'Add'});
          await page.locator('#calculateButton').click();
    
          await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
      });
    
      test('Should show error message when a letter is typed in second number field: 2 and a', async ({page}) => {
        await page.goto('https://testsheepnz.github.io/BasicCalculator');
          await page.selectOption('#selectBuild', { label: version});
          await page.locator('#number1Field').type('2');
          await page.locator('#number2Field').type('a');
          await page.selectOption('#selectOperationDropdown', {label: 'Add'});
          await page.locator('#calculateButton').click();
    
          await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
      });
    
    
      });
    
      test.describe.parallel(version + ': Subtraction', () => {
        test('Should subtract two positive integers: 2 and 3', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('-1');
        });
    
        test('Should subtract two negative integers: -2 and -3', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('-2');
            await page.locator('#number2Field').type('-3');
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('1');
        });
    
        test('Should subtract one positive and one negative number: 2 and -3', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2');
            await page.locator('#number2Field').type('-3');
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('5');
        });
    
        test('Should subtract two positive integers (with integer checkbox selected): 2 and 3', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#integerSelect').check();
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('-1');
        });
    
        test('Should subtract two negative integers (with integer checkbox selected): -2 and -3', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('-2');
            await page.locator('#number2Field').type('-3');
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#integerSelect').check();
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('1');
        });
    
        test('Should subtract one positive and one negative number (with integer checkbox selected): 2 and -3', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2');
            await page.locator('#number2Field').type('-3');
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#integerSelect').check();
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('5');
        });
    
        test('Should subtract two positive floats resulting an integer (with integer checkbox selected): 2.2 and 3.2', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2.2');
            await page.locator('#number2Field').type('3.2');
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#integerSelect').check();
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('-1');
        });
    
        test('Should subtract two negative floats resulting an integer (with integer checkbox selected): -2.2 and -3.2', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('-2.2');
            await page.locator('#number2Field').type('-3.2');
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#integerSelect').check();
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('1');
        });
    
        test('Should subtract one positive and one negative float (with integer checkbox selected): 2.2 and -3.2', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2.2');
            await page.locator('#number2Field').type('-3.2');
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#integerSelect').check();
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('5');
        });
    
        test('Should subtract two positive floats: 2.2 and 3.2', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2.2');
            await page.locator('#number2Field').type('3.2');
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('-1');
        });
    
        test('Should subtract two negative floats: -2.2 and -3.2', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('-2.2');
            await page.locator('#number2Field').type('-3.2');
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('1');
        });
    
        test('Should subtract one positive and one negative float: 2.2 and -3.2', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2.2');
            await page.locator('#number2Field').type('-3.2');
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('5.4');
        });
    
        test('Should show error message when a letter is typed in first number field: a and 3', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('a');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
        });
      
        test('Should show error message when a letter is typed in second number field: 2 and a', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2');
            await page.locator('#number2Field').type('a');
            await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
        });
    
      });
    
      test.describe.parallel(version + ': Multiplication', () => {
        test('Should multiply two positive integers (with integer checkbox selected): 2 and 3', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#integerSelect').check();
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('6');
        });
    
        test('Should multiply two negative integers (with integer checkbox selected): -2 and -3', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('-2');
            await page.locator('#number2Field').type('-3');
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#integerSelect').check();
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('6');
        });
    
        test('Should multiply one positive and one negative number (with integer checkbox selected): 2 and -3', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2');
            await page.locator('#number2Field').type('-3');
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#integerSelect').check();
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('-6');
        });
    
        test('Should multiply one positive and one negative number: 2 and -3', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2');
            await page.locator('#number2Field').type('-3');
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('-6');
        });
    
        test('Should multiply two positive integers: 2 and 3', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('6');
        });
    
        test('Should multiply two negative integers: -2 and -3', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('-2');
            await page.locator('#number2Field').type('-3');
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('6');
        });
    
        test('Should multiply two positive floats: 2.2 and 3.2', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2.2');
            await page.locator('#number2Field').type('3.2');
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('7.04');
        });
    
        test('Should multiply two negative floats: -2.2 and -3.2', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('-2.2');
            await page.locator('#number2Field').type('-3.2');
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('7.04');
        });
    
        test('Should multiply one positive and one negative float: 2.2 and -3.2', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2.2');
            await page.locator('#number2Field').type('-3.2');
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('-7.04');
        });
    
        test('Should multiply two positive floats resulting an integer (with integer checkbox selected): 2.2 and 3.2', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2.2');
            await page.locator('#number2Field').type('3.2');
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#integerSelect').check();
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('7');
        });
    
        test('Should multiply two negative floats resulting an integer (with integer checkbox selected): -2.2 and -3.2', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('-2.2');
            await page.locator('#number2Field').type('-3.2');
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#integerSelect').check();
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('7');
        });
    
        test('Should multiply one positive and one negative float resulting an integer  (with integer checkbox selected): 2.2 and -3.2', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2.2');
            await page.locator('#number2Field').type('-3.2');
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#integerSelect').check();
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('-7');
        });
    
        test('Should show error message when a letter is typed in first number field: a and 3', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('a');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
        });
      
        test('Should show error message when a letter is typed in second number field: 2 and a', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2');
            await page.locator('#number2Field').type('a');
            await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
        });
      });
    
      test.describe.parallel(version + ': Division', () => {
        test('Should divide two positive integers (with integer checkbox selected): 2 and 3', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#integerSelect').check();
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('0');
        });
    
        test('Should divide two negative integers  (with integer checkbox selected): -2 and -3', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('-2');
            await page.locator('#number2Field').type('-3');
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#integerSelect').check();
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('0');
        });
    
        test('Should divide one positive and one negative number (with integer checkbox selected): 2 and -3', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2');
            await page.locator('#number2Field').type('-3');
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#integerSelect').check();
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('0');
        });
    
        test('Should divide one positive and one negative number: 2 and -3', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2');
            await page.locator('#number2Field').type('-3');
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('-0.6666666666666666');
        });
    
        test('Should divide two positive integers: 2 and 3', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('0.6666666666666666');
        });
    
        test('Should divide two negative integers: -2 and -3', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('-2');
            await page.locator('#number2Field').type('-3');
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('0.6666666666666666');
        });
    
        test('Should divide two positive floats: 2.2 and 3.2', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2.2');
            await page.locator('#number2Field').type('3.2');
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('0.6875');
        });
    
        test('Should divide two negative floats: -2.2 and -3.2', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('-2.2');
            await page.locator('#number2Field').type('-3.2');
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('0.6875');
        });
    
        test('Should divide one positive and one negative float: 2.2 and -3.2', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2.2');
            await page.locator('#number2Field').type('-3.2');
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('-0.6875');
        });
    
        test('Should divide two positive floats resulting an integer (with integer checkbox selected): 2.2 and 3.2', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2.2');
            await page.locator('#number2Field').type('3.2');
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#integerSelect').check();
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('0');
        });
    
        test('Should divide two negative floats resulting an integer (with integer checkbox selected): -2.2 and -3.2', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('-2.2');
            await page.locator('#number2Field').type('-3.2');
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#integerSelect').check();
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('0');
        });
    
        test('Should divide one positive and one negative float resulting an integer (with integer checkbox selected): 2.2 and -3.2', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2.2');
            await page.locator('#number2Field').type('-3.2');
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#integerSelect').check();
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('0');
        });
    
        test('Should show error message when a letter is typed in first number field: a and 3', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('a');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#errorMsgField')).toHaveText('Number 1 is not a number');
        });
      
        test('Should show error message when a letter is typed in second number field: 2 and a', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2');
            await page.locator('#number2Field').type('a');
            await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#errorMsgField')).toHaveText('Number 2 is not a number');
        });
    
    
    
        
    
      });
    
      test.describe.parallel(version + ': Concatenation', () => {
        test('Should concatenate two letters: a and b', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('a');
            await page.locator('#number2Field').type('b');
            await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('ab');
        });
    
        test('Should concatenate two numbers: 2 and 3', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('23');
        });
    
        test('Should concatenate a number and a letter: 2 and b', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('2');
            await page.locator('#number2Field').type('b');
            await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('2b');
        });
    
        test('Should concatenate a letter and a number: a and 3', async ({page}) => {
          await page.goto('https://testsheepnz.github.io/BasicCalculator');
            await page.selectOption('#selectBuild', { label: version});
            await page.locator('#number1Field').type('a');
            await page.locator('#number2Field').type('3');
            await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
            await page.locator('#calculateButton').click();
      
            await expect(page.locator('#numberAnswerField')).toHaveValue('a3');
        });
    
      });
  });





