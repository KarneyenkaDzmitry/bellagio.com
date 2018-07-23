'use strict';

const header = require('../page-objects/header.page');
const reservation = require('../page-objects/reservation.page');
const hotel = require('../page-objects/hotel.page');
const restaurants = require('../page-objects/restaurants.page');
const search = require('../page-objects/search.page');
const entertainment = require('../page-objects/entertainment.page');

describe('bellagio resource', () => {

    beforeEach(function () {
        browser.get('https://www.bellagio.com');
    });

    describe('Tests of restaurant service', () => {

        it('should have title "RESTAURANTS" and results wrapper', () => {
            header.chooseRestaurants();
            expect(restaurants.pageTitle.getText()).toEqual('RESTAURANTS');
            expect(restaurants.resultsWrapper.isPresent()).toBe(true);
        });

        it('should show "LAGO by Julian Serrano" in results after choosing filters parameters: cousine = Italian' +
            'price = Clear, meal = Breakfast And Brunch', () => {
                header.chooseRestaurants();
                restaurants.filter('Italian', 'Clear', 'Breakfast and Brunch')
                expect(restaurants.pageTitle.getText()).toEqual('RESTAURANTS');
                expect(restaurants.filterResults.count()).toEqual(1);
                restaurants.getListOfRestaurants()
                    .then((list) => expect(list.indexOf('LAGO BY JULIAN SERRANO') > -1).toEqual(true));

            });
    });

    describe('Reservation service', () => {
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
    });

    describe('Search service tests', () => {
        it('should show search page with at least two elements: search field, disabled "Search button"', () => {
            header.openSearchBox();
            expect(search.searchField.isPresent()).toEqual(true);
            expect(search.searchButton.isEnabled()).toEqual(false);
        });

        it('if search service doesn\'t find anything, it should show ' +
            '"Sorry, your search for [serched text] did not return any results. Please try different search terms or browse our sitemap."', () => {
                header.openSearchBox();
                const word = 'dusolei';
                search.find(word)
                    .then(() => browser.refresh())
                    .then(() => search.noResult.getText())
                    .then((text) => expect(text).toEqual(`Sorry, your search for ${word} did not return any results. Please try different search terms or browse our sitemap.`));
            });

        it('When I typy "du soleil" I have to see the page of results with the fitst result`s title contains text "CIRQUE DU SOLEIL"', () => {
            header.openSearchBox();
            const word = 'du soleil';
            search.find(word)
                .then(() => browser.refresh())
                .then(() => search.getFirstResultTitle())
                .then((text) => expect(text.indexOf('CIRQUE DU SOLEIL') > -1).toEqual(true));
        });
    });

    describe('Hotel servise tests', () => {
        it('should have title "HOTEL ROOMS & SUITES" and results wrapper', () => {
            header.chooseHotel();
            expect(hotel.pageTitle.getText()).toEqual('HOTEL ROOMS & SUITES');
            expect(hotel.results.isPresent()).toBe(true);
        });
    });

    describe('Entertainment service tests', () => {
        it('it should show entertament page with text "ENTERTAINMENT"', () => {
            header.chooseEntertainment();
            expect(entertainment.pageTitle.getText()).toEqual('ENTERTAINMENT');
            expect(entertainment.resultsWrapper.isPresent()).toBe(true);
        });

        it('entertainment page should contain default component base with title "WHILE AT BELLAGIO"', () => {
            header.chooseEntertainment();
            expect(entertainment.getDefaultComponentTitle()).toEqual('WHILE AT BELLAGIO');
        });
    });
});