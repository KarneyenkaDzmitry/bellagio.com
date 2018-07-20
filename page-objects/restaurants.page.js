'use strict';

class Restaurants {
    constructor() {
        this.pageTitle = $('h1');
        this.resultsWrapper = $('#results-wrapper');
        this.filterButtons = $$('button[id*=tagsFilter]');
        this.filterResults = $$('div.result');
    }
    filter(cousine, price, meal){
        const options = [cousine, price, meal]; 
        this.filterButtons.map((elem, ind) => {
            if (options[ind]!=='Clear'){
            const opt = `//a[text()="${options[ind]}"]`;
            browser.driver.sleep(1000)
            .then(()=>elem.click())
            .then(()=>browser.driver.sleep(1000))
            .then(()=>elem.element(by.xpath(opt)).click());
        }});
    };

    getListOfRestaurants() {
        return this.filterResults.$$('h3').map((elem)=>elem.getText());
    }
}

module.exports = new Restaurants();