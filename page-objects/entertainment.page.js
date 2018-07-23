'use strict';

class Entertainment {
    constructor() {
        this.pageTitle = $('h1');
        this.resultsWrapper = $('#results-wrapper');
        this.filterButtons = $$('button[id*=tagsFilter]');
        this.filterResults = $$('div.result');
        this.defaultComponent =$('div[class=\"theme-default component-base\"]');
    }
    getDefaultComponentTitle() {
        return this.defaultComponent.$('span').getText();
    }
}

module.exports = new Entertainment();