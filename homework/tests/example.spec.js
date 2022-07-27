// @ts-nocheck
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

// Check the checkbox
// page.locator("#agree").check();

// Assert the checked state
// assertTrue(page.locator("#agree").isChecked());

//Make loop until find

// while (condition) {
//   // code block to be executed
// }
 
// let i = 0;
 
// while (i < 5) {        
//   console.log(i);
//   i++;
// }


data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Concatenating 2 and 3 results in 23', async ({ page }) => {
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



// Devide by zero error message (bak.)

// data.forEach(version => {
//   test.describe(version + 'Devide by 0', () => {
//     test('Concatenating 2 and 3 results in 23', async ({ page }) => {
//       await page.goto('https://testsheepnz.github.io/BasicCalculator');
//       await page.selectOption('#selectBuild', { label: version});
//       await page.locator('#number1Field').type('2');
//       await page.locator('#number2Field').type('0');
//       await page.selectOption('#selectOperationDropdown', {label: 'Divide'});
//       await page.locator('#calculateButton').click();
  
//       await expect(page.locator('#numberAnswerField')).toHaveText('Divide by zero error!');
//       await page.pause();
//     });
//   });
// });