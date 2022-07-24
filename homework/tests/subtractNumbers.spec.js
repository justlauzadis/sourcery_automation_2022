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
    test.describe(version + ': Subtract', () => {
        test('Verify that user can subtract natural/integer numbers', async ({ page }) => {
        let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate(); 
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.assertPageObjectsFieldsandButtons();
            await basicCalculatorPage.assertPageObjectTitles();
            await basicCalculatorPage.fillInNumbersFields('2','2');
            await basicCalculatorPage.selectAritmethicAction('Subtract');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('0');
            await basicCalculatorPage.assertIntegersOnlySelectorsFunctionality('0','0');  
            await basicCalculatorPage.assertClearButtonFunctionality();

            await basicCalculatorPage.fillInNumbersFields('1','2');
            await basicCalculatorPage.selectAritmethicAction('Subtract');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('-1');
            await basicCalculatorPage.assertClearButtonFunctionality();
        });
    });
});

data.forEach(version => {
    test.describe(version + ': Subtract', () => {
        test('Verify that user can subtract irrational numbers', async ({ page }) => {
            let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate(); 
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.assertPageObjectsFieldsandButtons();
            await basicCalculatorPage.assertPageObjectTitles();
            await basicCalculatorPage.fillInNumbersFields('2.11','1.01');
            await basicCalculatorPage.selectAritmethicAction('Subtract');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('1.0999999999999999');
            await basicCalculatorPage.assertIntegersOnlySelectorsFunctionality('1.0999999999999999','1');  
            await basicCalculatorPage.assertClearButtonFunctionality();
        });
    });
});

data.forEach(version => {
    test.describe(version + ': Subtract', () => {    
        test('Verify that user can subtract minus rational numbers', async ({ page }) => {
            let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate();
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.fillInNumbersFields('-22','22.11');
            await basicCalculatorPage.selectAritmethicAction('Subtract');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('-44.11');
            await basicCalculatorPage.assertIntegersOnlySelectorsFunctionality('-44.11','-44');  
            await basicCalculatorPage.assertClearButtonFunctionality();

            await basicCalculatorPage.fillInNumbersFields('22','-22');
            await basicCalculatorPage.selectAritmethicAction('Subtract');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('44'); 
            await basicCalculatorPage.assertClearButtonFunctionality();
        });
    });
});

data.forEach(version => {
    test.describe(version + ': Subtract', () => {    
        test('Verify that user can subtract between two minus rational numbers', async ({ page }) => {
            let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate();
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.fillInNumbersFields('-22','-22');
            await basicCalculatorPage.selectAritmethicAction('Subtract');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('0'); 
            await basicCalculatorPage.assertClearButtonFunctionality();
        });
    });
});


data.forEach(version => {
    test.describe(version + ': Subtract', () => {
        test('Verify that user cannot subtract letter in the first number field', async ({ page }) => {
            let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate(); 
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.fillInNumbersFields('a','2');
            await basicCalculatorPage.selectAritmethicAction('Subtract');
            await basicCalculatorPage.assert1NumberFieldErrorMessageForSymbols();
        });
    });
});

data.forEach(version => {
    test.describe(version + ': Subtract', () => {
        test('Verify that user cannot subtract letter in the second number field', async ({ page }) => {
            let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate(); 
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.fillInNumbersFields('2','a');
            await basicCalculatorPage.selectAritmethicAction('Subtract');
            await basicCalculatorPage.assert2NumberFieldErrorMessageForSymbols();
        });
    });
});





