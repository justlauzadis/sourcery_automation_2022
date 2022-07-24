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
    test.describe(version + ': Divide', () => {
        test('Verify that user can divide natural/integer numbers', async ({ page }) => {
        let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate(); 
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.assertPageObjectsFieldsandButtons();
            await basicCalculatorPage.assertPageObjectTitles();
            await basicCalculatorPage.fillInNumbersFields('1','2');
            await basicCalculatorPage.selectAritmethicAction('Divide');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('0.5');
            await basicCalculatorPage.assertIntegersOnlySelectorsFunctionality('0.5','0');  
            await basicCalculatorPage.assertClearButtonFunctionality();
        });
    });
});

data.forEach(version => {
    test.describe(version + ': Divide', () => {
        test('Verify that user can divide irrational numbers', async ({ page }) => {
            let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate(); 
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.assertPageObjectsFieldsandButtons();
            await basicCalculatorPage.assertPageObjectTitles();
            await basicCalculatorPage.fillInNumbersFields('1.11','0.11');
            await basicCalculatorPage.selectAritmethicAction('Divide');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('10.090909090909092');
            await basicCalculatorPage.assertIntegersOnlySelectorsFunctionality('10.090909090909092','10');  
            await basicCalculatorPage.assertClearButtonFunctionality();
        });
    });
});

data.forEach(version => {
    test.describe(version + ': Divide', () => {    
        test('Verify that user can divide rational numbers', async ({ page }) => {
            let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate();
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.fillInNumbersFields('-22','22.1');
            await basicCalculatorPage.selectAritmethicAction('Divide');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('-0.9954751131221719');
            await basicCalculatorPage.assertIntegersOnlySelectorsFunctionality('-0.9954751131221719','0');  
            await basicCalculatorPage.assertClearButtonFunctionality();

            await basicCalculatorPage.fillInNumbersFields('4','-6');
            await basicCalculatorPage.selectAritmethicAction('Divide');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('-0.6666666666666666');
            await basicCalculatorPage.assertClearButtonFunctionality();

            await basicCalculatorPage.fillInNumbersFields('-4','-6');
            await basicCalculatorPage.selectAritmethicAction('Divide');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('0.6666666666666666');
            await basicCalculatorPage.assertClearButtonFunctionality();
            
        });
    });
});

data.forEach(version => {
    test.describe(version + ': Divide', () => {    
        test('Verify that user cannot divide from 0 numbers', async ({ page }) => {
            let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate();
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.fillInNumbersFields('4','0');
            await basicCalculatorPage.selectAritmethicAction('Divide');
            await basicCalculatorPage.assertErrorMessageForZeroDivide();
            await basicCalculatorPage.assertClearButtonFunctionality();
        });
    });
});

data.forEach(version => {
    test.describe(version + ': Divide', () => {    
        test('Verify that user can divide 0 numbers', async ({ page }) => {
            let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate();
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.fillInNumbersFields('0','2');
            await basicCalculatorPage.selectAritmethicAction('Divide');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('0');
            await basicCalculatorPage.assertIntegersOnlySelectorsFunctionality('0','0');  
            await basicCalculatorPage.assertClearButtonFunctionality();
        });
    });
});

data.forEach(version => {
    test.describe(version + ': Divide', () => {
        test('Verify that user cannot use letter in the first number field when divide', async ({ page }) => {
            let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate(); 
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.fillInNumbersFields('a','2');
            await basicCalculatorPage.selectAritmethicAction('Divide');
            await basicCalculatorPage.assert1NumberFieldErrorMessageForSymbols();
            await basicCalculatorPage.assertClearButtonFunctionality();
        });
    });
});

data.forEach(version => {
    test.describe(version + ': Divide', () => {
        test('Verify that user cannot use letter in the second number field when divide', async ({ page }) => {
            let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate(); 
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.fillInNumbersFields('2','a');
            await basicCalculatorPage.selectAritmethicAction('Divide');
            await basicCalculatorPage.assert2NumberFieldErrorMessageForSymbols();
            await basicCalculatorPage.assertClearButtonFunctionality();
        });

    });
});







