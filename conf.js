// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['**/*[sS]pec.js'],
    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
    }
  }