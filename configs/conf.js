'use strict';
const logger = require('./logger.conf.js').logger;
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    getPageTimeout: 60000,
    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 360000,
        print: function() {
        }
    },
    logLevel: 'ERROR',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 500000,
    specs: ['../specs/**/*spec.js'],
    onPrepare: () => {
        logger.info('Browser starts in maximize size for running tests');
        browser.driver.manage().window().maximize();
        browser.driver.manage().timeouts().implicitlyWait(20000);
        browser.waitForAngularEnabled(true);
        global.ec = protractor.ExpectedConditions;
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            },
            summary: {
                displayDuration: true
            }
        }));
    },
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['disable-infobars', '--test-type']
        }
    },
    beforeLaunch: () => {
        logger.info('Get started!');
    },
    afterLaunch: () => {
        logger.info('Done');
    }
};
