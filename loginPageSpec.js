describe('Login page', function() {
    var loginPage

    beforeEach(function() {
        loginPage = require('./pages/loginPage');
        loginPage.goto()
      });

    it('Should be able to log in', function() {
        loginPage.login().then((homePage)=>{
            expect(homePage.getTitle()).toEqual('Dashboard / nopCommerce administration');
        })    
    });
  });