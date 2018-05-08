var webdriver = require('selenium-webdriver');

beforeEach(function(done) {
    var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    global.driver = driver;
    done();
});

afterEach(function(done) {
    driver.quit().then(done);
});