'use strict';

class Header {
    constructor() {
        this.guestServicesButton = $('.nav-services-btn');
        this.findReservationReference = $('#unsignedIn-guest-menu > li:nth-child(1) > a');
        this.hotel = $('a[class*=hotel]');
        this.restaurants = $('a[class*=restaurants]');
        this.searchButton = $('*[aria-label*="open search"]');
        this.entertainment = $('a[class*=entertainment]');
    }
    goToReservation() {
        return browser.wait(ec.elementToBeClickable(this.guestServicesButton), 5000)
            .then(() => this.guestServicesButton.click())
            .then(() => browser.wait(ec.elementToBeClickable(this.findReservationReference), 5000))
            .then(() => this.findReservationReference.click());
    }
    chooseHotel() {
        return this.hotel.click();
    }
    chooseRestaurants() {
        return browser.wait(ec.presenceOf(this.guestServicesButton), 5000)
            .then(() => this.restaurants.click());
    }

    chooseEntertainment() {
        return this.entertainment.click();
    }
    openSearchBox() {
        return this.searchButton.click();
    }
}

module.exports = new Header();
