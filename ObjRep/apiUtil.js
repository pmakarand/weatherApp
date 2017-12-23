/**
 * Created by makarandp.
 * This Library contains all the functions related to API Calls
 */

var request = require('request-promise');
var moment = require('moment');
//var myToken = null;
var fs = require('fs');
var path = require('path');
var jsonfile = require('jsonfile');
var apiFile;
var apiUtil = function () {

    var request = require('request');
   
    /*
     Created by Makarand.
     * This Function returns the GET API Call
     * Returns Promise
     */
    this.getAPI = function (apiURL, apiLoc, fileName, tempObj) {
        var aref = this; //referencing this in callback function so aref
        var defer = protractor.promise.defer();

        /*API GET call to get diveshop*/
        
         var options = {
                method: 'GET',
                url: apiURL + apiLoc,
                headers: {"Content-Type": "application/json;charset=UTF-8"},
                       };
             // console.log(options.url);
             request.
             get(options, function (error, response, body)
                        {
                        //console.log('response:::   ',response, 'body:',body)
                        if (!error && response.statusCode == 200) 
                            {
                                var jsonOutput = JSON.stringify(JSON.parse(body), null, "\t");
                                //console.log(jsonOutput);
                                defer.fulfill(jsonOutput);
                            }
                        })
                    .on('error', function (error)
                        { 
                          console.log("Error");    
                          defer.reject({error: error})
                        
                        });
          // console.log("In here");        
        
        return defer.promise;
    };
    
   
    
    this.getEpochTime = function()
    {
            let x = new Date();
                x.setHours(00, 00,00);
               return Math.floor(x.getTime()/1000.0)
    }

    this.epochTOLocal = function(et)
    {
        var utcDate = new Date(et*1000);
        var date = new Date();
        return((utcDate.getMonth() + 1)+ "/" + utcDate.getDate() +"/"+ utcDate.getFullYear() );
    }
    

    /*Created by Makarand
     This function returns the filePath
     */

    this.getFilePath = function (fileName) {

        var myFile = './TestData/apiFiles/' + fileName;
        // console.log("from GetFilePath"+ myFile);
        return myFile;
    };
    /*Created by Makarand
     This function writes to JSON File in ouput directory
     */

    this.writetoJSONFile = function (filename, text) {
        var filepath = this.getFilePath(filename);
        // console.log("this is I got for filepath:"+ filepath);
        //jsonfile.spaces = 4;
        var fd = fs.openSync(filepath, 'w+');
        fs.writeFileSync(filepath, text);
        fs.closeSync(fd);
        // jsonfile.writeFileSync(filepath,text);
        //return (jsonfile.readFileSync(filepath));

    }


    /*Created by Makarand
     This function reads from JSON File
     */

    this.readfromJSONFile = function (filename) {
        var filepath = this.getFilePath(filename);
        // var jsonObj;
        jsonfile.spaces = 4;
        //browser.pause(2000);
        //return(setTimeout(function(){jsonObj=jsonfile.readFileSync(filepath)}, 2000));
        return (jsonfile.readFileSync(filepath));
    }


  

       
}
module.exports = new apiUtil();