'use strict';
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./specs/*spec.js'],
    onPrepare: ()=> {
        browser.driver.manage().window().maximize();
    },
    capabilities: {
        'browserName': 'chrome'
    }
}