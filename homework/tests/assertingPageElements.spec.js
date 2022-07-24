const { test } = require('@playwright/test');
const {BasicCalculatorPage } = require("../pages/basicCalculatorPage");

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
    test.describe(version + ': Assert Page Elements', () => {
        test('Assert if calculator contains first and second, answer fields, clear and canculate buttons', async ({ page }) => {
        let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate(); 
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.assertPageObjectsFieldsandButtons();
            await basicCalculatorPage.assertPageObjectTitles();
        });
    });
});