// @ts-check
const { test, expect } = require('@playwright/test');
const { CalculatorInput } = require('../pages/CalculatorInput');
const { SelectVersion } = require('../pages/SelectVersion');

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
    test('Adding 2 and 3 to get the result 5', async ({ page }) => {
      let selectVersion = new SelectVersion(page);
      let calculatorInput = new CalculatorInput(page);
      await selectVersion.navigate();
      await selectVersion.selectBuild(version);
      await calculatorInput.firstNum('2');
      await calculatorInput.secondNum('3');
      await calculatorInput.selectFunc('Add');
      await page.locator('#calculateButton').click();
      
      await expect(page.locator('#numberAnswerField'), 'Fails to add 2 and 3').toHaveValue('5');
    });
  });

  test.describe(version + ': Concatenate', () => {
    test('Concatenating 2 and 3 to get the result 23', async ({ page }) => {
      let selectVersion = new SelectVersion(page);
      let calculatorInput = new CalculatorInput(page);
      await selectVersion.navigate();
      await selectVersion.selectBuild(version);
      await calculatorInput.firstNum('2');
      await calculatorInput.secondNum('3');
      await calculatorInput.selectFunc('Concatenate');
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('23');
    });
  });

  test.describe(version + ': Subtract', () => {
    test('Subtracting 2 and 3 to get the result -1', async ({ page }) => {
      let selectVersion = new SelectVersion(page);
      let calculatorInput = new CalculatorInput(page);
      await selectVersion.navigate();
      await selectVersion.selectBuild(version);
      await calculatorInput.firstNum('2');
      await calculatorInput.secondNum('3');
      await calculatorInput.selectFunc('Subtract');
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('-1');
    });
  });

  test.describe(version + ': Multiply', () => {
    test('Multiplying 2 and 3 to get the result 6', async ({ page }) => {
      let selectVersion = new SelectVersion(page);
      let calculatorInput = new CalculatorInput(page);
      await selectVersion.navigate();
      await selectVersion.selectBuild(version);
      await calculatorInput.firstNum('2');
      await calculatorInput.secondNum('3');
      await calculatorInput.selectFunc('Multiply');
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('6');
    });
  });

  test.describe(version + ': Divide', () => {
    test('Dividing 2 and 3 to get the result 0.6666666666666666', async ({ page }) => {
      let selectVersion = new SelectVersion(page);
      let calculatorInput = new CalculatorInput(page);
      await selectVersion.navigate();
      await selectVersion.selectBuild(version);
      await calculatorInput.firstNum('2');
      await calculatorInput.secondNum('3');
      await calculatorInput.selectFunc('Divide');
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField')).toHaveValue('0.6666666666666666');
    });
  });

  test.describe(version + ': Divide by 0', () => {
    test('Divinding 3 by zero for error message', async ({ page }) => {
      let selectVersion = new SelectVersion(page);
      let calculatorInput = new CalculatorInput(page);
      await selectVersion.navigate();
      await selectVersion.selectBuild(version);
      await calculatorInput.firstNum('2');
      await calculatorInput.secondNum('0');
      await calculatorInput.selectFunc('Divide');
      await page.locator('#calculateButton').click();
      
      await expect(page.locator('#errorMsgField')).toHaveText('Divide by zero error!');     
    });    
  });

  test.describe(version + ': Input field', () => {
    test('Checking if number1 and number2 field is visible', async ({ page }) => {
      let selectVersion = new SelectVersion(page);
      await selectVersion.navigate();
      await selectVersion.selectBuild(version);
      await expect(page.locator('#number1Field'), 'number1 input field is not visible').toBeVisible();
      await expect(page.locator('#number2Field'), 'number2 input field is not visible').toBeVisible();     
    });
  });


  test.describe(version + ': Clear button', () => {
    test('Checking if clear button is not disabled', async ({ page }) => {
      let selectVersion = new SelectVersion(page);
      await selectVersion.navigate();
      await selectVersion.selectBuild(version);
      await expect(page.locator('#clearButton'), 'Clear button is disabled').toBeEnabled();
    });
  });

  test.describe(version + ': Calculate button', () => {
    test('Checking if calculate button is visible', async ({ page }) => {
      let selectVersion = new SelectVersion(page);
      await selectVersion.navigate();
      await selectVersion.selectBuild(version);
      await expect(page.locator('#calculateButton'), 'Calculate button is not visible').toBeVisible();
    });
  });

  test.describe(version + ': Integers checkbox', () => {
    test('Checking if checkbox is not disabled', async ({ page }) => {
      let selectVersion = new SelectVersion(page);
      await selectVersion.navigate();
      await selectVersion.selectBuild(version);
      await expect(page.locator('#integerSelect'), 'Integers checkbox is disabled').toBeEnabled();
    });
  });

  test.describe(version + ': Integers selected', () => {
    test('Dividing 7 and 3 to get the result 2', async ({ page }) => {
      let selectVersion = new SelectVersion(page);
      let calculatorInput = new CalculatorInput(page);
      await selectVersion.navigate();
      await selectVersion.selectBuild(version);
      await calculatorInput.firstNum('7');
      await calculatorInput.secondNum('3');
      await calculatorInput.selectFunc('Divide');
      await page.locator('#integerSelect').check();
      await page.locator('#calculateButton').click();
  
      await expect(page.locator('#numberAnswerField'), ).toHaveValue('2');
    });
  });

  test.describe(version + ': Character number1', () => {
      test('Using character in number1field for error message', async ({ page }) => {
        let selectVersion = new SelectVersion(page);
        let calculatorInput = new CalculatorInput(page);
        await selectVersion.navigate();
        await selectVersion.selectBuild(version);
        await calculatorInput.firstNum('B');
        await calculatorInput.secondNum('3');
        await calculatorInput.selectFunc('Add');
        await page.locator('#calculateButton').click();
    
        await expect(page.locator('#errorMsgField'), 'Number 1 is not a number').toHaveText('Number 1 is not a number'); 
      });
    });

    test.describe(version + ': Character number2', () => {
      test('Using character in number2field for error message', async ({ page }) => {
        let selectVersion = new SelectVersion(page);
        let calculatorInput = new CalculatorInput(page);
        await selectVersion.navigate();
        await selectVersion.selectBuild(version);
        await calculatorInput.firstNum('3');
        await calculatorInput.secondNum('B');
        await calculatorInput.selectFunc('Add');
        await page.locator('#calculateButton').click();
    
        await expect(page.locator('#errorMsgField'), 'Number 2 is not a number').toHaveText('Number 2 is not a number'); 
      });
    });
    
});