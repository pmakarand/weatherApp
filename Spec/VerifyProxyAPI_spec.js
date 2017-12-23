/**
 * Created by makarandp.
 * This Test-case verifies the Proxy API values are
 *  rendered correctly on UI
 *
 */

describe('VERIFY PROXY API VALUES ON UI', function () {
   
    var weatherPage = require('../ObjRep/weatherOverview.js');
    var APIUtil = require('../ObjRep/apiUtil.js');
    var jsonfile = require('jsonfile');
    var TestData = require('../TestData/TestData.json')
    var locAPI = browser.params.locAPI;
    var weatherAPI = browser.params.weatherAPI;
    var locapiFileName = "Location.json";
    var weatherapiFileName ="Weather.json"
    var getlocationData = null;
    var getWeatherData = null;
    var lat;
    var long;
    var weatherJSON = {}
    //var apiFile= require('../TestData/apiFiles/diveshopAPI.json');

    beforeEach(function () {
        browser.manage().deleteAllCookies();
     });

    it('Pre-Requisite to disable Angular', function()
       {
            browser.waitForAngularEnabled(false);
            browser.sleep(5000);
       }),
    
    it('CREATE A JSON FILE FROM API', function()
         {
           getlocationData = APIUtil.getAPI(locAPI, TestData.ValidAddress, locapiFileName);
        getlocationData
            .then(function (text) {
                APIUtil.writetoJSONFile(locapiFileName, text);
                var jsonOut = JSON.parse(text)
                lat = jsonOut.Lat;
                long=jsonOut.Long;
                var epoch = APIUtil.getEpochTime();
                var apiLoc = lat+'/'+long+'/'+epoch 
                 APIUtil.getAPI(weatherAPI,apiLoc,weatherapiFileName).then(
                    function(text2)
                    {
                     APIUtil.writetoJSONFile(weatherapiFileName, text2)
                    });
            })
      
    }),

    it('2. VERIFY API TO UI VALUES RENDERED CORRECTLY', function () {  
       
        weatherJSON=APIUtil.readfromJSONFile(weatherapiFileName);
             
        /*Get the values from UI*/
         browser.waitForAngularEnabled(false);
         browser.get(browser.params.appUrl);
         browser.sleep(5000);
         weatherPage.enterAddress(TestData.ValidAddress);
         weatherPage.clicksubmitBtn();
         browser.sleep(10000);
         
        /*Verify UI Values match with API*/
        if (weatherPage.verifyRenderedAddress())
             {
                 expect(weatherPage.getRenderedAddress()).toContain(TestData.ValidAddress);
                 expect(weatherPage.verifySearchResults()).toBe(true);
                 
             for (var i=0; i<Object.keys(weatherJSON).length; i++)
            {
                /*Verify Date from API shown on UI*/
                var dt = APIUtil.epochTOLocal(weatherJSON[i].currently.time);
                expect(weatherPage.getDate().getText()).toContain(dt);
                
                /*Verify Temerature from API shown on UI*/
                var Temp = weatherJSON[i].currently.temperature;
                expect(weatherPage.getTemp().getText()).toContain(Temp+'°F');
                
                 /*Verify Summary from API shown on UI*/
                var summary = weatherJSON[i].currently.summary;
                 expect(weatherPage.getDate().getText()).toContain(summary);
            
                
            }
                 
        }
             
    });



})
