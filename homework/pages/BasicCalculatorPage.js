const { expect } = require('@playwright/test');

exports.BasicCalculatorPage = class BasicCalculatorPage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://testsheepnz.github.io/BasicCalculator');
        return this;
        
    }

   async selectVersion(version) {
        await this.page.selectOption('#selectBuild', {label: version});
   }

   async assertPageObjectsFieldsandButtons(){
        await expect(this.page.locator('#number1Field')).toBeVisible();
        await expect(this.page.locator('#number2Field')).toBeVisible();

        await expect(this.page.locator('#selectOperationDropdown')).toBeVisible();

        await expect(this.page.locator('#calculateButton')).toBeVisible();
        await expect(this.page.locator('#calculateButton')).toHaveValue('Calculate');
        
        await expect(this.page.locator('#clearButton')).toBeVisible();
        await expect(this.page.locator('#clearButton')).toHaveValue('Clear');
        
        await expect(this.page.locator('#numberAnswerField')).toBeVisible();

       //if ((expect(this.page.locator('#selectOperationDropdown')).toContainText('Concatenate'))) {
       //     await expect(this.page.locator('#integerSelect')).toBeDisabled();
       //} else {
       //     await expect(this.page.locator('#intSelectionLabel')).toBeVisible();
       //}
        await expect(this.page.locator('#intSelectionLabel')).toBeVisible();
    }

    async assertPageObjectTitles() {
        await expect(this.page.locator('#calcForm')).toContainText('Calculate');
        //missing different the attributes
        //await expect(this.page.locator('label [class = description]')).toContainText('First number');
        //await expect(this.page.locator('label [class = description]')).toContainText('Second number');
        //await expect(this.page.locator('label [class = description]')).toContainText('Operation');
        //await expect(this.page.locator('label [class = description]')).toContainText('Answer');
        await expect(this.page.locator('#intSelectionLabel')).toContainText('Integers only');
    }


   async fillInNumbersFields(number1, number2) {
        await this.page.locator('#number1Field').type(number1);
        await this.page.locator('#number2Field').type(number2);
    }

    
   async selectAritmethicAction(label){
        await this.page.selectOption('#selectOperationDropdown', {label});
        await this.page.locator('#calculateButton').click();
    }


    async assertAnswerOfAritmethicAction(numberAnswer) {
        
        /*await this.page.locator('#number1Field').type(number1);
        await this.page.locator('#number2Field').type(number2);
        
        await this.page.selectOption('#selectOperationDropdown', {label});
        await this.page.locator('#calculateButton').click();
       let numberAnswer;
    
        switch(label) {
            case 'Add':
                numberAnswer = number1 + number2;
            break

            case 'Substract':
                numberAnswer = number1 - number2;
            break

            case 'Multiply':
                numberAnswer = number1*number2;
            break

            case 'Divide':
                numberAnswer= number1/number2;
            break

            case 'Concatenate':
                numberAnswer = number1.concat(number2);
            break
        }
        numberAnswer = number1 + number2; */

        await expect(this.page.locator('#numberAnswerField')).toHaveValue(numberAnswer);
    }

    async assertClearButtonFunctionality() {
        await this.page.locator('#clearButton').click();
        await expect(this.page.locator('#numberAnswerField')).toBeEmpty();
    }

    async assertIntegersOnlySelectorsFunctionality(numberAnswer,integerAnswer) {
        await expect(this.page.locator('#numberAnswerField')).toHaveValue(numberAnswer);
        await this.page.locator('#integerSelect').click();
        await expect(this.page.locator('#numberAnswerField')).toHaveValue(integerAnswer);
    }

    async assert1NumberFieldErrorMessageForSymbols(){
        await expect(this.page.locator('#errorMsgField')).toContainText('Number 1 is not a number');
    }

    async assert2NumberFieldErrorMessageForSymbols(){
        await expect(this.page.locator('#errorMsgField')).toContainText('Number 2 is not a number'); 
    }

    async assertErrorMessageForZeroDivide( ){
        await expect(this.page.locator('#errorMsgField')).toContainText('Divide by zero error!')
    }
}