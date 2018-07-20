'use strict';

class Header {
    constructor() {
        this.guestServicesButton = $('.nav-services-btn');
        this.findReservationReference = $('#unsignedIn-guest-menu > li:nth-child(1) > a');
        this.hotel=$('a[class*=hotel]');
    }
    goToReservation() {
        return this.guestServicesButton.click()
        .then(()=>this.findReservationReference.click());
    }
    chooseHotel() {
       return  this.hotel.click();
    }
}

module.exports = new Header();