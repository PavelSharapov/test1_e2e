// All_elements_is_present on pages
exports.config = {

    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
     specs: [


         // './e2e/welcomePageElementsPresent-spec.js',
         // './e2e/registrationViaEmail-spec.js',
         // './e2e/loginViaUserName-spec.js',
         //  './e2e/LoginedUserElementsPresentTests/gamesPageLogined-spec.js',
         // './e2e/LoginedUserElementsPresentTests/jackpotPageLogined-spec.js',
         // './e2e/LoginedUserElementsPresentTests/kassaPageLogined-spec.js',
         // './e2e/LoginedUserElementsPresentTests/bonusiPageLogined-spec.js',
         // './e2e/LoginedUserElementsPresentTests/tournamentsPageLogined-spec.js',
         // './e2e/LoginedUserElementsPresentTests/profilePageLogined-spec.js'
         './e2e/LoginedUserElementsPresentTests/depositPageLogined-spec.js',
         './e2e/LoginedUserElementsPresentTests/activateBonusPageLogined-spec.js'

     ],
    //  specs: ['./e2e/registrationViaEmail-spec.js'],
    //  specs: ['./e2e/loginViaUserName-spec.js'],
    //  specs: ['./e2e/LoginedUserElementsPresentTests/gamesPageLogined-spec.js'],
    //  specs: ['./e2e/LoginedUserElementsPresentTests/jackpotPageLogined-spec.js'],
    //   specs: ['./e2e/LoginedUserElementsPresentTests/kassaPageLogined-spec.js'],
    //   specs: ['./e2e/LoginedUserElementsPresentTests/bonusiPageLogined-spec.js'],
    //   specs: ['./e2e/LoginedUserElementsPresentTests/tournamentsPageLogined-spec.js'],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            // disable "chrome is being controlled by automated software"
            'args': ['disable-infobars=true'],
        },
     /*
         * Set browser language (menus & so on)
         *!/
        args: ['lang=en-EN'],
        prefs: {
            intl: {
                accept_languages: "en-EN"
            }
        }
    }*/
    },
    baseUrl: 'https://pravda.casino/ru',
    allScriptsTimeout: 8000,
    getPageTimeout: 10000,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
};