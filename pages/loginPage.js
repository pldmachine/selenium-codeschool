var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var BasePage = require('./basePage')

class LoginPage extends BasePage {

    goto()
    {
        return driver.get("http://admin-demo.nopcommerce.com/");
    }

    login()
    {
        return driver.findElement(By.name('Email')).sendKeys('admin@yourstore.com').then(()=>{
            return driver.findElement(By.name('Password')).sendKeys('admin').then(()=>{
                return driver.findElement(By.className('login-button')).click().then(()=>{
                    return require('./homePage');
                })
            })
        })    
    }

}
module.exports = new LoginPage();