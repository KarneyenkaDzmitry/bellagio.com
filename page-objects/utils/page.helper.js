'use strict';

const PAGE_MAP = {
    search: '../search.page',
    header: '../header.page',
    hotel: '../hotel.page',
    entertainment: '../entertainment.page',
    reservation: '../reservation.page',
    restaurants: '../restaurants.page'
};

module.exports.getPage = (pageName) => require(PAGE_MAP[pageName]);
