'use strict';

class Search {
    constructor() {
        this.searchField = element(by.model('globalSearchKeyword'));
        this.searchButton = $('*[aria-label=Search]');
    }
    find(text) {
        this.searchField.sendKeys(text)
        .then(()=>browser.driver.sleep(1000))
        .then(()=>this.searchButton.click());
    }
}

module.exports = new Search();