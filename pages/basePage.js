var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

class BasePage {
    constructor() {
        global.driver = driver;
    }
}

module.exports = BasePage 