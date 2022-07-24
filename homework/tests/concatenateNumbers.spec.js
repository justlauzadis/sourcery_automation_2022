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
    test.describe(version + ': Concatenate', () => {
        test('Verify that user can concatenate natural/integer numbers', async ({ page }) => {
        let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate(); 
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.assertPageObjectsFieldsandButtons();
            await basicCalculatorPage.assertPageObjectTitles();
            await basicCalculatorPage.fillInNumbersFields('1','2');
            await basicCalculatorPage.selectAritmethicAction('Concatenate');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('12');
            await basicCalculatorPage.assertClearButtonFunctionality();
        });
    });
});

data.forEach(version => {
    test.describe(version + ': Concatenate', () => {
        test('Verify that user can concatenate irrational numbers', async ({ page }) => {
            let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate(); 
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.assertPageObjectsFieldsandButtons();
            await basicCalculatorPage.assertPageObjectTitles();
            await basicCalculatorPage.fillInNumbersFields('1.11','0.11');
            await basicCalculatorPage.selectAritmethicAction('Concatenate');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('1.110.11');
            await basicCalculatorPage.assertClearButtonFunctionality();
        });
    });
});

data.forEach(version => {
    test.describe(version + ': Concatenate', () => {    
        test('Verify that user can concatenate any symbols in numbers field', async ({ page }) => {
            let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate();
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.fillInNumbersFields('-22a','-test=+');
            await basicCalculatorPage.selectAritmethicAction('Concatenate');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('-22a-test=+');
            await basicCalculatorPage.assertClearButtonFunctionality();
        });
    });
});






