class SearchResultsPage {

  constructor(page) {
    this.page = page;
  }

  async getResultHeadingHrefAttribute(index) {
    return await this.page.locator(`#r1-${index} h2 a`).getAttribute('href');
  }

  
  async getResultHeadinginPage(index) {
    //It's all crap
    elements =  await this.page.locator(`#r1-${index} h2 a`).getAttribute('href');
    for (index = 0; index < elements.length; index++) {
      elements += elements[index]
      if (index === 9 || elements)  {
        break;
      }
    console.log(elements)
    await this.page.pause
    }
  }

async getQueryInputText() {
      return await this.page.locator('input[name=q]').getAttribute('value');
    }

}

module.exports = { SearchResultsPage };
