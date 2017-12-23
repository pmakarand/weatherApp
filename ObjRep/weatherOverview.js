/**
 * Created by makarandp
 * Object Repository for weather Overview Page.
 */


var weatherOverview = function ()
{
    var submitBtn = element(by.className('btn btn-primary'));
    var addressTxt =element(by.id('address'));
    var title = browser.getTitle();
    var darkSkylink = element(by.linkText('Powered by Dark Sky'));
    var renderedAddr = element(by.id('renderedAddress'));
    var searchResults = element(by.css('div.forecast-detail'));
    
    
     this.getElementAsyncSafe = function (anElement) {

        //console.log(elementReference);
        var EC = protractor.ExpectedConditions;
      //  var anElement = element(elementReference);
        browser.wait(EC.presenceOf(anElement), 30000);
        return anElement;
    }

    /*To verify all the elements on the weather app Page*/
    this.verifyAllElementsPresent = function ()
    {    
          var add = this.getElementAsyncSafe(addressTxt);
          browser.refresh();
          browser.sleep(10000);
             // console.log('Its here');
              browser.waitForAngularEnabled(false);
              browser.sleep(3000);
              expect(browser.getTitle()).toContain('Forecast')
              expect(title).toContain('Forecast');
              browser.sleep(2000);
              expect(add.isDisplayed()).toBe(true);
              browser.sleep(2000);
              expect(submitBtn.isDisplayed()).toBe(true);
              browser.sleep(2000);
              expect(darkSkylink.isDisplayed()).toBe(true);
             
    }
    
    /* To Enter text in address textbox */
    this.enterAddress = function(text)
     {
         return addressTxt.sendKeys(text);
     }
    
    /* Click on submit button */
     this.clicksubmitBtn = function(text)
     {
         return  submitBtn.click();
     }
    
     this.verifyRenderedAddress=function()
     {
         return renderedAddr.isDisplayed();
     }
     
     this.getRenderedAddress= function()
     {
         return renderedAddr.getText();
     }
     
     this.verifySearchResults = function()
     {
         return searchResults.isDisplayed();
     }
     
     this.getDate = function()
     {   
         var dt = searchResults.all(by.tagName('h4'));
           return dt;           
     }
     
     this.getTemp = function()
     {   
         var temp = searchResults.all(by.tagName('h3'));
         return temp;
     }
     
     this.getImageText = function()
     {
        return searchResults.all(by.className('detail')).getAttribute('icon');
        
     }
    
    
//    this.getAPI() = function()
//    {  
//    }
//    this.verifyDate() = function()
//    {
//        
//    }
//    this.verifyData() = function()
//    {
//        
//    }
};
module.exports = new weatherOverview();