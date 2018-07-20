'use strict';
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    specs: ['./specs/*spec.js'],
    onPrepare: () => {
        browser.driver.manage().window().maximize();
        browser.driver.manage().timeouts().implicitlyWait(20000);
        browser.waitForAngularEnabled(true);
    },
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['disable-infobars']
        }
    }
}