// var webdriver = require('selenium-webdriver');

class BasePage {
    constructor() {
    }

    getTitle() {
        return browser.getTitle().then((title) => {
            return title;
        });
    }

    expandMenuGroup(name) {
        return element(by.xpath('//span[text()="' + name + '"]')).click();
    }

    clickMenuItem(name){
        var until = protractor.ExpectedConditions;
        var menuItem =element(by.xpath('//span[text()="' + name + '"]'));
        browser.wait(until.visibilityOf(menuItem), 10000);
        return menuItem.click();
    }

    waitForPageLoad() {
        const until = protractor.ExpectedConditions;
        return browser.wait(until.not(until.visibilityOf(element(by.id('ajaxBusy')))), 5000,
            `Element taking too long to hide in the DOM`);
    }
}

module.exports = BasePage 