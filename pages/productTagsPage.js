var BasePage = require('./basePage')

class ProductTagsPage extends BasePage {

    tagsCount()
    {       
        return this.waitForPageLoad().then(()=>{
            return element.all(by.xpath('//div[@id="product-tags-grid"]//tr')).count();
        })
      
    }
}

module.exports = new ProductTagsPage();