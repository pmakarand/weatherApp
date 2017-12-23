/**
 * Created by makarandp.
 * This Test-case verifies the Weather APP overview Page functionality
 */



describe('VERIFY WEATHER APP PAGE', function () {


    var GetApi = require('../ObjRep/apiUtil.js');
    var apiURL = browser.params.weatherAPI;
    var WeatherPage = require('../ObjRep/weatherOverview.js');
    var TestData = require('../TestData/TestData.json');
  
    

    beforeEach(function () {
         browser.manage().deleteAllCookies();
               });
    
      
    it('1. VERIFY ALL ELEMENTS PRESENT IN WEATHER APP OVERVIEW PAGE', function () { 
       browser.waitForAngularEnabled(false);
       browser.get(browser.params.appUrl);    
       browser.sleep(5000);
       WeatherPage.verifyAllElementsPresent();  
           
    });

    it('2. ENTER VALID CITY AND VERIFY SEARCH RESULTS ', function (){
               
         browser.waitForAngularEnabled(false);
         browser.get(browser.params.appUrl);
         browser.sleep(5000);
         WeatherPage.enterAddress(TestData.ValidAddress);
         WeatherPage.clicksubmitBtn();
         browser.sleep(10000);
         
        if (WeatherPage.verifyRenderedAddress())
             {
                 expect(WeatherPage.getRenderedAddress()).toContain(TestData.ValidAddress);
                 expect(WeatherPage.verifySearchResults()).toBe(true);
             }
       WeatherPage.getDate();  
        })

    it('3. ENTER INVALID CITY AND VERIFY SEARCH RESULTS ', function (){
       
         browser.waitForAngularEnabled(false);
         browser.get(browser.params.appUrl);
         browser.sleep(5000);
         WeatherPage.enterAddress(TestData.InvalidCity);
         WeatherPage.clicksubmitBtn();
        browser.sleep(10000);
         
        if (WeatherPage.verifyRenderedAddress())
             {
                 expect(WeatherPage.getRenderedAddress()).toContain(TestData.InvalidCity);
                 expect(WeatherPage.verifySearchResults()).toBe(true);
             } 
       
        })
  it('4.ENTER EXACT ADDRESS AND VERIFY SEARCH RESULTS ', function (){
       
         browser.waitForAngularEnabled(false);
         browser.get(browser.params.appUrl);
         browser.sleep(5000);
         WeatherPage.enterAddress(TestData.ExactAddress);
         WeatherPage.clicksubmitBtn();
            browser.sleep(10000);
         
            if (WeatherPage.verifyRenderedAddress())
                {
                 expect(WeatherPage.getRenderedAddress()).toMatch(TestData.ExactAddress);
                 expect(WeatherPage.verifySearchResults()).toBe(true);
                }   
        })
  
  it('5. ENTER INVALID STRING AND VERIFY SEARCH RESULTS ', function (){
                
         browser.waitForAngularEnabled(false);
         browser.get(browser.params.appUrl);
         browser.sleep(5000);
         WeatherPage.enterAddress(TestData.InvalidString);
         WeatherPage.clicksubmitBtn();
            browser.sleep(10000);
         
            if (WeatherPage.verifyRenderedAddress())
                {
                 expect(WeatherPage.getRenderedAddress()).not.toContain(TestData.InvalidString);
                 expect(WeatherPage.verifySearchResults()).toBe(true);
                }   
       
        })
  it('6. ENTER CITY FROM DIFFERENT COUNTRY AND VERIFY SEARCH RESULTS ', function (){
               
         browser.waitForAngularEnabled(false);
         browser.get(browser.params.appUrl);
         browser.sleep(5000);
         WeatherPage.enterAddress(TestData.CityFromOtherCountry);
         WeatherPage.clicksubmitBtn();
            browser.sleep(10000);
         
            if (WeatherPage.verifyRenderedAddress())
                {
                 expect(WeatherPage.getRenderedAddress()).toContain(TestData.CityFromOtherCountry);
                 expect(WeatherPage.verifySearchResults()).toBe(true);
                }   
       
       
        })
  it('7. ENTER COUNTRY NAME AND VERIFY SEARCH RESULTS', function (){
               
         browser.waitForAngularEnabled(false);
         browser.get(browser.params.appUrl);
         browser.sleep(5000);
         WeatherPage.enterAddress(TestData.CountryName);
         WeatherPage.clicksubmitBtn();
            browser.sleep(10000);
         
            if (WeatherPage.verifyRenderedAddress())
                {
                 expect(WeatherPage.getRenderedAddress()).toContain(TestData.CountryName);
                 expect(WeatherPage.verifySearchResults()).toBe(true);
                }   
              
        })
  it('8. ENTER CONTINENT NAME AND VERIFY SEARCH RESULTS ', function (){
                
         browser.waitForAngularEnabled(false);
         browser.get(browser.params.appUrl);
         browser.sleep(5000);
         WeatherPage.enterAddress(TestData.ContinentName);
         WeatherPage.clicksubmitBtn();
            browser.sleep(10000);
         
            if (WeatherPage.verifyRenderedAddress())
                {
                 expect(WeatherPage.getRenderedAddress()).toContain(TestData.ContinentName);
                 expect(WeatherPage.verifySearchResults()).toBe(true);
                }   
        })
 
  it('9. ENTER ZIP CODE AND VERIFY SEARCH RESULTS', function (){
                
         browser.waitForAngularEnabled(false);
         browser.get(browser.params.appUrl);
         browser.sleep(5000);
         WeatherPage.enterAddress(TestData.ValidZip);
         WeatherPage.clicksubmitBtn();
            browser.sleep(10000);
         
            if (WeatherPage.verifyRenderedAddress())
                {
                 expect(WeatherPage.getRenderedAddress()).toContain(TestData.ValidZip);
                 expect(WeatherPage.verifySearchResults()).toBe(true);
                }   
        })
   it('10. ENTER INVALID ZIP CODE AND VERIFY SEARCH RESULTS', function (){
       
             
         browser.waitForAngularEnabled(false);
         browser.get(browser.params.appUrl);
         browser.sleep(5000);
         WeatherPage.enterAddress(TestData.InvalidZip);
         WeatherPage.clicksubmitBtn();
            browser.sleep(10000);
         
            if (WeatherPage.verifyRenderedAddress())
                {
                 expect(WeatherPage.getRenderedAddress()).not.toContain(TestData.InvalidZip);
                 expect(WeatherPage.verifySearchResults()).toBe(true);
                }   
       
        })
    it('11. ENTER LARGE TEXT AND VERIFY SEARCH RESULTS ', function (){
              
         browser.waitForAngularEnabled(false);
         browser.get(browser.params.appUrl);
         browser.sleep(5000);
         WeatherPage.enterAddress(TestData.LongAddress);
         WeatherPage.clicksubmitBtn();
            browser.sleep(10000);
         
            if (WeatherPage.verifyRenderedAddress())
                {
                 expect(WeatherPage.getRenderedAddress()).not.toContain(TestData.LongAddress);
                 expect(WeatherPage.verifySearchResults()).toBe(true);
                }   
        })
     it('12. ENTER CITY NAME WITH SPECIAL CHARACTERS (like \'$tockton\') AND VERIFY SEARCH RESULTS', function (){
               
         browser.waitForAngularEnabled(false);
         browser.get(browser.params.appUrl);
         browser.sleep(5000);
         WeatherPage.enterAddress(TestData.AddresswithSplChar);
         WeatherPage.clicksubmitBtn();
            browser.sleep(10000);
         
            if (WeatherPage.verifyRenderedAddress())
                {
                 expect(WeatherPage.getRenderedAddress()).not.toContain(TestData.AddresswithSplChar);
                 expect(WeatherPage.verifySearchResults()).toBe(true);
                }   
       })

    
})
