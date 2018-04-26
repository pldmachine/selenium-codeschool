var webdriver = require('selenium-webdriver');
var By = webdriver.By;

describe('Selenium Tutorial', function() {
var loginPage
    beforeEach(function(done) {
        loginPage = require('./pages/loginPage');
        loginPage.goto().then(done);
    });

    afterEach(function(done) {
        driver.quit().then(done);
    });

    // Test to ensure we are on the home page by checking the <body> tag id attribute
    it('Should be on the home page', function(done) {     
        driver.findElement(By.name('Email')).then((emailElement) => {
            emailElement.sendKeys('admin@yourstore.com').then(() => {
                driver.findElement(By.name('Password')).then((passwordElement) => {
                    passwordElement.sendKeys('admin').then(() => {
                        driver.findElement(By.className('login-button')).then((loginButtonElement) => {
                            loginButtonElement.click().then(() => {
                                driver.getTitle().then((title) => {
                                    console.log(title);
                                    expect(title).toBe('Dashboard / nopCommerce administration2');
                                    done();
                                });
                            })
                        })
                    })
                })
            })
        })   
    });
});