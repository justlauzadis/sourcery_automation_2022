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
    test.describe(version + ': Add, Subtract, Divide, Multiply and Concelate', () => {
        test('Verify that user can use the same input for diferent actions', async ({ page }) => {
        let basicCalculatorPage = new BasicCalculatorPage (page);
            await basicCalculatorPage.navigate(); 
            await basicCalculatorPage.selectVersion(version);
            await basicCalculatorPage.assertPageObjectsFieldsandButtons();
            await basicCalculatorPage.assertPageObjectTitles();
            await basicCalculatorPage.fillInNumbersFields('1','2');

            await basicCalculatorPage.selectAritmethicAction('Add');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('3');
            
            await basicCalculatorPage.selectAritmethicAction('Subtract');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('-1');
             
            await basicCalculatorPage.selectAritmethicAction('Divide');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('0.5');
            
            await basicCalculatorPage.selectAritmethicAction('Multiply');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('2');

            await basicCalculatorPage.selectAritmethicAction('Concatenate');
            await basicCalculatorPage.assertAnswerOfAritmethicAction('12');

            await basicCalculatorPage.assertClearButtonFunctionality();
        });
    });
});