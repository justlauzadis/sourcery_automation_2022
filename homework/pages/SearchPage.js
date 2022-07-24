class SearchPage {

    constructor(page) {
      this.page = page;
    }

    async navigate() {
      await this.page.goto('https://testsheepnz.github.io/BasicCalculator');
    }

    async search(text1, text2) {
      await this.page.locator('#number1Field').type(text1);
      await this.page.locator('#number2Field').type(text2);
    }

    async selectOption(text3) {
      await this.page.selectOption('#selectOperationDropdown', {label: text3});
    }

  }
  module.exports = { SearchPage };