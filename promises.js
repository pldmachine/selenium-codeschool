var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

driver.get("http://admin-demo.nopcommerce.com/").then(() => {
    driver.findElement(By.name('Email')).then((emailElement) => {
        emailElement.sendKeys('admin@yourstore.com').then(() => {
            driver.findElement(By.name('Password')).then((passwordElement) => {
                passwordElement.sendKeys('admin').then(() => {
                    driver.findElement(By.className('login-button')).then((loginButtonElement) => {
                        loginButtonElement.click().then(() => {
                            driver.getTitle().then((title) => {
                                console.log(title);
                            });
                        })
                    })
                })
            })
        })
    })
})
