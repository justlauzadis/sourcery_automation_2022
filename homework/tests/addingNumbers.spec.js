// @ts-check
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
    test.describe(version + ': Add', () => {
        test('Verify that user can add natural/integer numbers', async ({ page }) => {
        let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate(); 
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.fillInNumbersFields('1','2');
            await basicCalculatorPage.selectAritmethicAction('Add');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('3');
            await basicCalculatorPage.assertIntegersOnlySelectorsFunctionality('3','3');  
            await basicCalculatorPage.assertClearButtonFunctionality();
        });
    });
});

data.forEach(version => {
    test.describe(version + ': Add', () => {
        test('Verify that user can add irrational numbers', async ({ page }) => {
            let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate(); 
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.fillInNumbersFields('1.11','0.11');
            await basicCalculatorPage.selectAritmethicAction('Add');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('1.2200000000000002');
            await basicCalculatorPage.assertIntegersOnlySelectorsFunctionality('1.2200000000000002','1');  
            await basicCalculatorPage.assertClearButtonFunctionality();
        });
    });
});

data.forEach(version => {
    test.describe(version + ': Add', () => {    
        test('Verify that user can add rational numbers', async ({ page }) => {
            let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate();
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.fillInNumbersFields('-22','22.1');
            await basicCalculatorPage.selectAritmethicAction('Add');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('0.10000000000000142');
            await basicCalculatorPage.assertIntegersOnlySelectorsFunctionality('0.10000000000000142','0');  
            await basicCalculatorPage.assertClearButtonFunctionality();

            await basicCalculatorPage.fillInNumbersFields('22','-22');
            await basicCalculatorPage.selectAritmethicAction('Add');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('0');
            await basicCalculatorPage.assertIntegersOnlySelectorsFunctionality('0','0');  
            await basicCalculatorPage.assertClearButtonFunctionality();

            await basicCalculatorPage.fillInNumbersFields('-22','-22');
            await basicCalculatorPage.selectAritmethicAction('Add');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('44');
            await basicCalculatorPage.assertIntegersOnlySelectorsFunctionality('44','44');  
            await basicCalculatorPage.assertClearButtonFunctionality();
        });
    });
});

data.forEach(version => {
    test.describe(version + ': Add', () => {
        test('Verify that user cannot use letter in any field', async ({ page }) => {
            let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate(); 
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.fillInNumbersFields('a','2');
            await basicCalculatorPage.selectAritmethicAction('Add');
            await basicCalculatorPage.assert1NumberFieldErrorMessageForSymbols();
            await basicCalculatorPage.assertClearButtonFunctionality();

            await basicCalculatorPage.fillInNumbersFields('2','a');
            await basicCalculatorPage.selectAritmethicAction('Add');
            await basicCalculatorPage.assert2NumberFieldErrorMessageForSymbols();
            await basicCalculatorPage.assertClearButtonFunctionality();
        });
    });
});




