const { test, expect } = require('@playwright/test');
const { SearchPage } = require('./SearchPage');
const { SearchResultsPage } = require('./SearchResultsPage');

test.describe('Search Results', () => {
    test('First result should contain devbridge.com', async ({ page }) => {
        let searchPage = new SearchPage(page);
        await searchPage.navigate();
        await searchPage.search('devbridge');

        let searchResultsPage = new SearchResultsPage(page);
        expect(await searchResultsPage.getResultHeadingHrefAttribute(0)).toContain('devbridge.com');
    });

    test('First page should contain linkedin.com', async ({ page }) => {
        let searchPage = new SearchPage(page);
        await searchPage.navigate();
        await searchPage.search('devbridge');


        let searchResultsPage = new SearchResultsPage(page);
        expect(await searchResultsPage.getResultHeadingHrefAttribute(2)).toContain('linkedin.com');
    });  
    test('Search query should get populated in Search Results page', async ({ page }) => {
        let searchPage = new SearchPage(page);
        await searchPage.navigate();
        await searchPage.search('devbridge');

        let searchResultsPage = new SearchResultsPage(page);
        expect(await searchResultsPage.getQueryInput()).toEqual('devbridge');
    });
});
