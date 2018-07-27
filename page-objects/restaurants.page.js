'use strict';

class Restaurants {
    constructor() {
        this.pageTitle = $('h1');
        this.resultsWrapper = $('#results-wrapper');
        this.filterButtons = $$('button[id*=tagsFilter]');
        this.filterResults = $$('div.result');
    }

    filter(cousine, price, meal) {
        const options = [cousine, price, meal];
        this.filterButtons.map((elem, ind) => {
            if (options[ind] !== 'Clear') {
                const opt = `//a[text()="${options[ind]}"][@class]`;
                browser.wait(ec.elementToBeClickable(elem), 5000)
                    .then(() => elem.click())
                    .then(() => elem.element(by.xpath(opt)))
                    .then((element) => {
                        browser.wait(ec.visibilityOf(element), 5000); return element;
                    })
                    .then((element) => element.click());
            }
        });
    }

    getListOfRestaurants() {
        return this.filterResults.$$('h3').map((elem) => elem.getText());
    }
}

module.exports = new Restaurants();
