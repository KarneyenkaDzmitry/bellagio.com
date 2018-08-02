'use strict';
const logger = require('./logger.conf.js').logger;
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

const reporter = new HtmlScreenshotReporter({
    dest: './reports/screenshots',
    filename: 'Bellagio.html',
    cleanDestination: true,
    showSummary: true,
    showQuickLinks: true,
    showConfiguration: false,
    reportTitle: 'BELLAGIO.COM',
    reportOnlyFailedSpecs: false,
    captureOnlyFailedSpecs: false
});

exports.config = {
    getPageTimeout: 60000,
    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 360000,
        /* eslint-disable */
        print: function() {}
        /* eslint-enable */
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
        jasmine.getEnv().addReporter(reporter);
    },
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['disable-infobars', '--test-type']
        }
    },
    beforeLaunch: () => {
        logger.info('Get started!');
        return new Promise(resolve => {
            reporter.beforeLaunch(resolve);
        });
    },
    afterLaunch: (exitCode) => {
        logger.info('Done');
        return new Promise(resolve => {
            /* eslint-disable */
            reporter.afterLaunch(resolve.bind(this, exitCode));
            /* eslint-enable */
        });

    }
};
