'use strict';

class Reservation {
    constructor() {
        this.accountPageTitle = element(by.css('.account-page-title'));
        this.accountForm = element(by.css('#find-reservation-form'));
        this.roomReservation = element(by.xpath('//select/option[@value="room"]'));
    }
    chooseRoomReservation() {
        this.roomReservation.click();
    }
    
}

module.exports = new Reservation();