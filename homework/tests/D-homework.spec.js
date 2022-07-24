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
});

data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Adding 0 and -1 results in -1', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('0');
      await page.locator('#number2Field').type('-1');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
    
      await expect(page.locator('#numberAnswerField')).toHaveValue('-1');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Adding 0 and 0 results in 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('0');
      await page.locator('#number2Field').type('-1');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});
      await page.locator('#calculateButton').click();
    
      await expect(page.locator('#numberAnswerField')).toHaveValue('0');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Subtract', () => {
    test('Subtract 2 and 3 results in -1', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
    
      await expect(page.locator('#numberAnswerField')).toHaveValue('-1');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Subtract', () => {
    test('Subtract 0 and 0 results in 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('0');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});
      await page.locator('#calculateButton').click();
    
      await expect(page.locator('#numberAnswerField')).toHaveValue('0');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Multiply', () => {
    test('Multiply 2 and 3 results in 6', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
    
      await expect(page.locator('#numberAnswerField')).toHaveValue('6');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Multiply', () => {
    test('Multiply 0 and 3 results in 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('0');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
    
      await expect(page.locator('#numberAnswerField')).toHaveValue('0');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Multiply', () => {
    test('Multiply -5 and -3 results in 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-5');
      await page.locator('#number2Field').type('-3');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
    
      await expect(page.locator('#numberAnswerField')).toHaveValue('15');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Multiply', () => {
    test('Multiply -2 and 3 results in 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});
      await page.locator('#calculateButton').click();
    
      await expect(page.locator('#numberAnswerField')).toHaveValue('-6');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Divide', () => {
    test('Divide 5 and 2 results in 2.5', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('5');
      await page.locator('#number2Field').type('2');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
    
      await expect(page.locator('#numberAnswerField')).toHaveValue('2.5');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Divide', () => {
    test('Divide 0 and 5 results in 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('0');
      await page.locator('#number2Field').type('5');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
    
      await expect(page.locator('#numberAnswerField')).toHaveValue('0');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Divide', () => {
    test('Divide 1 and -2 results in -0.5', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('1');
      await page.locator('#number2Field').type('-2');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
    
      await expect(page.locator('#numberAnswerField')).toHaveValue('-0.5');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Divide', () => {
    test('Divide -1 and -2 results in 0.5', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-1');
      await page.locator('#number2Field').type('-2');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
    
      await expect(page.locator('#numberAnswerField')).toHaveValue('0.5');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Concatenate', () => {
    test('Concatenate 2 and 3 results in 23', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
    
      await expect(page.locator('#numberAnswerField')).toHaveValue('23');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Concatenate', () => {
    test('Concatenate -2 and -3 results in -2-3', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-2');
      await page.locator('#number2Field').type('-3');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
    
      await expect(page.locator('#numberAnswerField')).toHaveValue('-2-3');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Concatenate', () => {
    test('Concatenate 0 and 0 results in 00', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('0');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
    
      await expect(page.locator('#numberAnswerField')).toHaveValue('00');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Concatenate', () => {
    test('Concatenate -1 and 0 results in -10', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-1');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});
      await page.locator('#calculateButton').click();
    
      await expect(page.locator('#numberAnswerField')).toHaveValue('-10');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Divide', () => {
    test('Divide from 0 results error message should be displayed', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('3');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      
      await expect(page.locator('#errorMsgField')).toContainText('Divide by zero error!');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Divide', () => {
    test('Test Clear button', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      await page.locator('#clearButton').click();
      
      await expect(page.locator('#numberAnswerField')).toHaveValue('');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Divide', () => {
    test('Test Integer only check box', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      await page.locator('#integerSelect').click();
      
      await expect(page.locator('#numberAnswerField')).toHaveValue('0');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Divide', () => {
    test('Test Integer only check box', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
      await page.locator('#calculateButton').click();
      await page.locator('#integerSelect').click();
      
      await expect(page.locator('#numberAnswerField')).toHaveValue('0');
    });
  });
});