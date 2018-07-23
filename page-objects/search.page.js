'use strict';
const EC = protractor.ExpectedConditions;

class Search {
    constructor() {
        this.searchField = element(by.model('globalSearchKeyword'));
        this.searchButton = $('*[aria-label=Search]');
        this.searchTitle = $('.site-search-header');
        this.resultsWrapper = $('#results-wrapper');
        this.searchResults = $('[class*=search-results]');
        this.noResult= $('.no-result');
    }
    find(text) {
        return this.searchField.sendKeys(text)
        .then(()=>browser.wait(EC.elementToBeClickable(this.searchButton), 5000))
        .then(()=>this.searchButton.click());
    }

    getFirstResultTitle() {
        return this.searchResults.$('h2').getText();
    }
}

module.exports = new Search();