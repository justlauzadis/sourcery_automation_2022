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
}

module.exports = { CalculatorInput };