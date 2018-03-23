// All_elements_is_present on page
exports.config = {

    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./e2e/welcomePageElementsPresent-spec.js','./e2e/registrationViaEmail-spec.js','./e2e/loginViaUserName-spec.js'],
    //  specs: ['./e2e/welcomePageElementsPresent-spec.js'],
    //  specs: ['./e2e/registrationViaEmail-spec.js'],
    //  specs: ['./e2e/loginViaUserName-spec.js'],
    capabilities: {
        browserName: 'chrome'
        /* chromeOptions: {

            /!**
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
    }
};