var BasePage = require('./basePage')

class HomePage extends BasePage {

    logout()
    {
        return element(by.linkText('Logout')).click().then(()=>{
            return require('./loginPage');
        })
    }
}

module.exports = new HomePage();