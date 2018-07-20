'use strict';

class Header {
    constructor() {
        this.guestServicesButton = $('.nav-services-btn');
        this.findReservationReference = $('#unsignedIn-guest-menu > li:nth-child(1) > a');
        this.hotel = $('a[class*=hotel]');
        this.restaurants = $('a[class*=restaurants]');
        

    }
    goToReservation() {
        return this.guestServicesButton.click()
            .then(() => this.findReservationReference.click());
    }
    chooseHotel() {
        return this.hotel.click();
    }
    chooseRestaurants() {
        return this.restaurants.click();
    }
    
}

module.exports = new Header();