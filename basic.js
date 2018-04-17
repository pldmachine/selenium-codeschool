var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

driver.get("http://admin-demo.nopcommerce.com/");

var emailElement = driver.findElement(By.name('Email'));
var passwordElement = driver.findElement(By.name('Password'));
var loginButton = driver.findElement(By.className('login-button'));

emailElement.sendKeys('admin@yourstore.com');
passwordElement.sendKeys('admin');
loginButton.click();