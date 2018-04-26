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
        driver.findElement(By.name('Email')).sendKeys('admin@yourstore.com');
        driver.findElement(By.name('Password')).sendKeys('admin');
        driver.findElement(By.className('login-button')).click();
        return require('./homePage');
    }

}
module.exports = new LoginPage();