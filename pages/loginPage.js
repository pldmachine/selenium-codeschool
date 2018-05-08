// var webdriver = require('selenium-webdriver');
// var By = webdriver.By;
var BasePage = require('./basePage')

class LoginPage extends BasePage {

    goto()
    { 
        return browser.get('http://admin-demo.nopcommerce.com/');
    }

    login()
    {
        return element(by.name('Email')).sendKeys('admin@yourstore.com').then(()=>{
            return element(by.name('Password')).sendKeys('admin').then(()=>{
                return element(by.className('login-button')).click().then(()=>{
                    return require('./homePage');
                })
            })
        })  
    }

}
module.exports = new LoginPage();