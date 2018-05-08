describe('product page', function() {
    var loginPage,homePage
    var productTagsPage = require('./pages/productTagsPage');

    beforeEach(function() {
        loginPage = require('./pages/loginPage');
        loginPage.goto().then(()=>{
            loginPage.login().then((page)=>{
                homePage = page;
            });
        })
      });

    it('Should have at least one product', function() {
        homePage.expandMenuGroup('Catalog').then(()=>{       
            homePage.clickMenuItem('Product tags').then(()=>{            
                expect(productTagsPage.tagsCount()).toBeGreaterThan(1); 
            })      
        }) 
    });
  });