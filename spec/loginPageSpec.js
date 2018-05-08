var webdriver = require('selenium-webdriver');
var By = webdriver.By;

describe('Login page', function() {
var loginPage
    beforeEach(function(done) {
       loginPage = require('../pages/loginPage');
       loginPage.goto().then(done);
    });

    afterEach(function(done) {
       done();
    });

    it('Should be able to log in', function(done) {  
        loginPage.login().then((homePage)=>{
            homePage.title().then((title)=>{
                expect(title).toBe('Dashboard / nopCommerce administration');
                done();
            })
        }); 
    });
});