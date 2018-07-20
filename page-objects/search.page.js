'use strict';

class Search {
    constructor() {
        this.searchField = element(by.model('globalSearchKeyword'));
        this.searchButton = $('*[aria-label=Search]');
        this.searchTitle = $('.site-search-header');
        this.resultsWrapper = $('#results-wrapper');
        this.searchResults = $('[class*=search-results]');
        this.noResult= $('.no-result');
        //.no-result
    }
    find(text) {
        return this.searchField.sendKeys(text)
        .then(()=>browser.driver.sleep(3000))
        .then(()=>this.searchButton.click());
    }

}

module.exports = new Search();