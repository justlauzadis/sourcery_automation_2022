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
    test.describe(version + ': Multiply', () => {
        test('Verify that user can multiply natural/integer numbers', async ({ page }) => {
        let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate(); 
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.assertPageObjectsFieldsandButtons();
            await basicCalculatorPage.assertPageObjectTitles();
            await basicCalculatorPage.fillInNumbersFields('1','2');
            await basicCalculatorPage.selectAritmethicAction('Multiply');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('2');
            await basicCalculatorPage.assertIntegersOnlySelectorsFunctionality('2','2');  
            await basicCalculatorPage.assertClearButtonFunctionality();
        });
    });
});

data.forEach(version => {
    test.describe(version + ': Multiply', () => {
        test('Verify that user can multiply 0 number', async ({ page }) => {
        let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate(); 
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.assertPageObjectsFieldsandButtons();
            await basicCalculatorPage.assertPageObjectTitles();
            await basicCalculatorPage.fillInNumbersFields('1','0');
            await basicCalculatorPage.selectAritmethicAction('Multiply');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('0'); 
            await basicCalculatorPage.assertClearButtonFunctionality();
        });
    });
});

data.forEach(version => {
    test.describe(version + ': Multiply', () => {
        test('Verify that user can multiply irrational numbers', async ({ page }) => {
            let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate(); 
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.assertPageObjectsFieldsandButtons();
            await basicCalculatorPage.assertPageObjectTitles();
            await basicCalculatorPage.fillInNumbersFields('1.11','0.11');
            await basicCalculatorPage.selectAritmethicAction('Multiply');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('0.12210000000000001');
            await basicCalculatorPage.assertIntegersOnlySelectorsFunctionality('0.12210000000000001','0');  
            await basicCalculatorPage.assertClearButtonFunctionality();
        });
    });
});

data.forEach(version => {
    test.describe(version + ': Multiply', () => {    
        test('Verify that user can multiply minus rational numbers', async ({ page }) => {
            let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate();
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.fillInNumbersFields('-22','22.1');
            await basicCalculatorPage.selectAritmethicAction('Multiply');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('-486.20000000000005');
            await basicCalculatorPage.assertIntegersOnlySelectorsFunctionality('-486.20000000000005','-486');  
            await basicCalculatorPage.assertClearButtonFunctionality();

            await basicCalculatorPage.fillInNumbersFields('22','-22.1');
            await basicCalculatorPage.selectAritmethicAction('Multiply');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('-486.20000000000005');
            await basicCalculatorPage.assertIntegersOnlySelectorsFunctionality('-486.20000000000005','-486');  
            await basicCalculatorPage.assertClearButtonFunctionality();
        });
    });
});

data.forEach(version => {
    test.describe(version + ': Multiply', () => {    
        test('Verify that user can multiply two minus rational numbers', async ({ page }) => {
            let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate();
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.fillInNumbersFields('-22','-22.1');
            await basicCalculatorPage.selectAritmethicAction('Multiply');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('486.20000000000005');
            await basicCalculatorPage.assertClearButtonFunctionality();
        });
    });
});

data.forEach(version => {
    test.describe(version + ': Multiply', () => {
        test('Verify that user cannot use letter  in the first number field when multipling', async ({ page }) => {
            let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate(); 
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.fillInNumbersFields('a','2');
            await basicCalculatorPage.selectAritmethicAction('Multiply');
            await basicCalculatorPage.assert1NumberFieldErrorMessageForSymbols();
        });
    });
});

data.forEach(version => {
    test.describe(version + ': Multiply', () => {
        test('Verify that user cannot multiply letter in the second number field when multipling', async ({ page }) => {
            let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate(); 
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.fillInNumbersFields('2','a');
            await basicCalculatorPage.selectAritmethicAction('Multiply');
            await basicCalculatorPage.assert2NumberFieldErrorMessageForSymbols();
        });

    });
});





