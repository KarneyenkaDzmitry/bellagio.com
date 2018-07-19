describe('bellagio resource', () => {
    const guestServicesButton = element(by.css('.nav-services-btn'));
    const findReservationReference = element(by.css('#unsignedIn-guest-menu > li:nth-child(1) > a'));
    const accountPageTitle = element(by.css('.account-page-title'));
    const accountForm = element(by.css('#find-reservation-form'));
    const roomReservation = element(by.xpath('//select/option[@value="room"]'));

    beforeEach(function () {
        browser.get('https://www.bellagio.com');
    });

    function goToReservation() {
        guestServicesButton.click();
        findReservationReference.click();
    }

    it('should have a text - \"Find Your Reservation\" and form with 5 inputs', () => {
        goToReservation();
        expect(accountPageTitle.getText()).toEqual('Find Your Reservation');
        expect(accountForm.getAttribute('method')).toEqual('post');
    });

    it('should have four options including default option with text - \"What type of reservation\"', () => {
        goToReservation();
        expect(roomReservation.isSelected()).toBe(false);
        roomReservation.click();
        expect(roomReservation.isSelected()).toBe(true);
    });
});