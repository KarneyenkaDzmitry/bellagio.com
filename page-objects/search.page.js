'use strict';
const { logger } = require('../configs/logger.conf');
class Search {
    constructor() {
        this.searchField = element(by.model('globalSearchKeyword'));
        this.searchButton = $('*[aria-label=Search]');
        this.searchTitle = $('.site-search-header');
        this.resultsWrapper = $('#results-wrapper');
        this.searchResults = $('[class*=search-results]');
        this.noResult = $('.no-result');
    }
    find(text) {
        return this.searchField.sendKeys(text)
            .then(() => browser.wait(ec.elementToBeClickable(this.searchButton), 5000))
            .then(() => this.searchButton.click())
            .catch(error => {
                logger.error(`Inside function find(${text}) Search page`, error);
                return error;
            });
    }

    getFirstResultTitle() {
        return this.searchResults.$('h2').getText();
    }
}

module.exports = new Search();
