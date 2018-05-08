describe('Home page', function() {
    var loginPage,homePage

    beforeEach(function() {
        loginPage = require('./pages/loginPage');
        loginPage.goto().then(()=>{
            loginPage.login().then((page)=>{
                homePage = page;
            });
        })
      });

    it('Should be able to log in', function() {
        homePage.getTitle().then((title)=>{
            expect(title).toEqual('Dashboard / nopCommerce administration');  
            homePage.waitForPageLoad().then(()=>{
                homePage.logout().then((page)=>{
                    page.getTitle().then((title)=>{
                        expect(title).toEqual('Your store. Login');   
                    })
                })
            })      
        })           
    });
  });