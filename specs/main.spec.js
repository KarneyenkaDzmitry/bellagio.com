'use strict';
const header = require('../page-objects/header.page');
const reservation = require('../page-objects/reservation.page');
const hotel = require('../page-objects/hotel.page');
describe('bellagio resource', () => {

    beforeEach(function () {
        browser.get('https://www.bellagio.com');
    });

    it('should have a text - \"Find Your Reservation\" and form with 5 inputs', () => {
        header.goToReservation();
        expect(reservation.accountPageTitle.getText()).toEqual('Find Your Reservation');
        expect(reservation.accountForm.getAttribute('method')).toEqual('post');
    });

    it('should have four options including default option with text - \"What type of reservation\"', () => {
        header.goToReservation();
        expect(reservation.roomReservation.isSelected()).toBe(false);
        reservation.chooseRoomReservation();
        expect(reservation.roomReservation.isSelected()).toBe(true);
    });

    it('should have title "HOTEL ROOMS & SUITES" and results wrapper', () => {
        header.chooseHotel();
        expect(hotel.pageTitle.getText()).toEqual('HOTEL ROOMS & SUITES');
        expect(hotel.results.isPresent()).toBe(true);
    });

});