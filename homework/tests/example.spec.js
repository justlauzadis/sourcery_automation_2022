// @ts-check
const { test, expect } = require('@playwright/test');
const { CalculatorInput } = require('../pages/CalculatorInput');
const { Build } = require('../pages/Build');

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
  test.describe(version, () => {
    test.beforeEach(async ({ page }) => {
      let build = new Build(page);
      await build.navigate();
      await build.selectBuild(version);
     });  
  
    test('Adding 2 and 3 to get the result 5', async ({ page }) => {
      let calculatorInput = new CalculatorInput(page);
      await calculatorInput.typeFirstNum('2');
      await calculatorInput.typeSecondNum('3');
      await calculatorInput.selectFunc('Add');
      await calculatorInput.calculate();
      
      await expect(page.locator('#numberAnswerField'), 'Adding 2 and 3').toHaveValue('5');
    });

    test('Concatenating 2 and 3 to get the result 23', async ({ page }) => {
      let calculatorInput = new CalculatorInput(page);
      await calculatorInput.typeFirstNum('2');
      await calculatorInput.typeSecondNum('3');
      await calculatorInput.selectFunc('Concatenate');
      await calculatorInput.calculate();
  
      await expect(page.locator('#numberAnswerField'), 'Concatenating 2 and 3').toHaveValue('23');
    });
 
    test('Subtracting 2 and 3 to get the result -1', async ({ page }) => {
      let calculatorInput = new CalculatorInput(page);
      await calculatorInput.typeFirstNum('2');
      await calculatorInput.typeSecondNum('3');
      await calculatorInput.selectFunc('Subtract');
      await calculatorInput.calculate();
  
      await expect(page.locator('#numberAnswerField'), 'Subtracting 2 and 3').toHaveValue('-1');
    });

    test('Multiplying 2 and 3 to get the result 6', async ({ page }) => {
      let calculatorInput = new CalculatorInput(page);
      await calculatorInput.typeFirstNum('2');
      await calculatorInput.typeSecondNum('3');
      await calculatorInput.selectFunc('Multiply');
      await calculatorInput.calculate();
  
      await expect(page.locator('#numberAnswerField'), 'Mutiplying 2 and 3').toHaveValue('6');
    });

    test('Dividing 2 and 3 to get the result 0.6666666666666666', async ({ page }) => {
      let calculatorInput = new CalculatorInput(page);
      await calculatorInput.typeFirstNum('2');
      await calculatorInput.typeSecondNum('3');
      await calculatorInput.selectFunc('Divide');
      await calculatorInput.calculate();
  
      await expect(page.locator('#numberAnswerField'), 'Dividing 2 and 3').toHaveValue('0.6666666666666666');
    });
 
    test('Divinding 3 by zero for error message', async ({ page }) => {
      let calculatorInput = new CalculatorInput(page);
      await calculatorInput.typeFirstNum('2');
      await calculatorInput.typeSecondNum('0');
      await calculatorInput.selectFunc('Divide');
      await calculatorInput.calculate();
      
      await expect(page.locator('#errorMsgField'), 'Dividing by 0').toHaveText('Divide by zero error!');     
    });    
  
    test('Checking if number1 and number2 field is visible', async ({ page }) => {
      await expect(page.locator('#number1Field'), 'number1 input field visibility').toBeVisible();
      await expect(page.locator('#number2Field'), 'number2 input field visibility').toBeVisible();     
    });

    test('Checking if clear button is not disabled', async ({ page }) => {
      await expect(page.locator('#clearButton'), 'Clear button is disabled').toBeEnabled();
    });

    test('Checking if calculate button is visible', async ({ page }) => {
      await expect(page.locator('#calculateButton'), 'Calculate button visibility').toBeVisible();
    });
 
    test('Checking if checkbox is not disabled', async ({ page }) => {
      await expect(page.locator('#integerSelect'), 'Integers checkbox is disabled').toBeEnabled();
    });
  
    test('Dividing 7 and 3 to get the result 2', async ({ page }) => {
      let calculatorInput = new CalculatorInput(page);
      await calculatorInput.typeFirstNum('7');
      await calculatorInput.typeSecondNum('3');
      await calculatorInput.selectFunc('Divide');
      await calculatorInput.intSelect();
      await calculatorInput.calculate();
  
      await expect(page.locator('#numberAnswerField'), 'Not integers answer').toHaveValue('2');
    });

      test('Using character in number1field for error message', async ({ page }) => {
        let calculatorInput = new CalculatorInput(page);
        await calculatorInput.typeFirstNum('B');
        await calculatorInput.typeSecondNum('3');
        await calculatorInput.selectFunc('Add');
        await calculatorInput.calculate();
    
        await expect(page.locator('#errorMsgField'), 'Letters in number1 field').toHaveText('Number 1 is not a number'); 
    });

      test('Using character in number2field for error message', async ({ page }) => {
        let calculatorInput = new CalculatorInput(page);
        await calculatorInput.typeFirstNum('3');
        await calculatorInput.typeSecondNum('B');
        await calculatorInput.selectFunc('Add');
        await calculatorInput.calculate();
    
        await expect(page.locator('#errorMsgField'), 'Letters in number2 field').toHaveText('Number 2 is not a number'); 
      });
    });
  });