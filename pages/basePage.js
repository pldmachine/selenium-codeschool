var webdriver = require('selenium-webdriver');

class BasePage {
    constructor() {
    }

    title() {
        return driver.getTitle().then((title) => {
            return title;
        });
    }
}

module.exports = BasePage 