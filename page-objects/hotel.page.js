'use strict';

class Hotel{
    constructor() {
        this.pageTitle = $('*[class*=title] h1');
        this.results = $('#results-wrapper');
    }
}

module.exports = new Hotel();