class SelectVersion {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://testsheepnz.github.io/BasicCalculator');
    }

    async selectBuild(version) {
        await this.page.selectOption('#selectBuild', { label: version});
    }
}

module.exports = { SelectVersion };