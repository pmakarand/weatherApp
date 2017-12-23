

exports.config = {
    directConnect: true,
    capabilities: {
                    'browserName': 'chrome',
                    'chromeOptions': {'args': ['--window-size=1200,1000','incognito'],prefs: {'profile.managed_default_content_settings.geolocation': 1}}
               // 'browserName': 'firefox',
          },

    allScriptsTimeout: 600000, 
    resultJsonOutputFile: '../weatherApp/TestResults/Results.json',

    params: {
             appUrl: 'http://35.227.188.130',
             /*List of APIs*/
             locAPI: "http://35.203.167.23/latlong/",
             weatherAPI:"http://35.203.167.23/weather/"
           },

    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs:
        [
              '../Spec/WeatherUIOverview_spec.js',
              '../Spec/VerifyProxyAPI_spec.js'
        ],
            
        onPrepare: function () {
        let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter(
            {
                displayStacktrace: 'all', // display stacktrace for each failed assertion, values: (all|specs|summary|none)
                displaySuccessesSummary: true, // display summary of all successes after execution
                displayFailuresSummary: true, // display summary of all failures after execution
                displayPendingSummary: false, // display summary of all pending specs after execution
                displaySuccessfulSpec: true, // display each successful spec
                displayFailedSpec: true, // display each failed spec
                displayPendingSpec: true, // display each pending spec
                displaySpecDuration: true, // display each spec duration
                displaySuiteNumber: true, // display each suite number (hierarchical)
                colors: {
                    success: 'green',
                    failure: 'red',
                    pending: 'yellow'
                },
                prefixes: {
                    success: 'PASS ',
                    failure: 'FAIL ',
                    pending: 'PENDING '
                },
                customProcessors: []
            })
            );

      },
        
    jasmineNodeOpts: {
        print: function () {},
          defaultTimeoutInterval: 600000
      }

  }
        

  