class CalculatorInput {
    constructor(page) {
        this.page = page;
    }

    async firstNum(num) {
        await this.page.locator('#number1Field').type(num);
    }

    async secondNum(num) {
        await this.page.locator('#number2Field').type(num);
    }

    async selectFunc(func) {
        await this.page.selectOption('#selectOperationDropdown', {label: func});
    }

    async calculate() {
        await this.page.locator('#calculateButton').click();
    }

    async intSelect() {
        await this.page.locator('#integerSelect').check();
    }
}

module.exports = { CalculatorInput };