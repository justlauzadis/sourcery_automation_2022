class SearchResultsPage {

    constructor(page) {
      this.page = page;
    }  

    async getMainHrefAttributeFromResult(resultIndex) {
        return await this.page.locator(`#r1-${resultIndex - 1} h2 a`).getAttribute('href');
    }
    async getQueryInputText() {
        return this.page.locator('input[name = q]').getAttribute('value');
    }
}

module.exports = { SearchResultsPage };
