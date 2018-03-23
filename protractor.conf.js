// All_elements_is_present on pageeeeee

exports.config = {

    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // specs: ['./e2e/Header-elements-present.component.spec.js', './e2e/Body-elements-present-spec.js','./e2e/Footer-elements-present-spec.js','./e2e/Login-spec.js'],
    // specs: ['./e2e/Footer-elements-present-spec.js'],
    // specs: ['./e2e/welcomePageElementsPresent-spec.js','./e2e/registrationViaEmail-spec.js','./e2e/loginViaUserName-spec.js'],
    //  specs: ['./e2e/RegistrationViaEmail-spec.js'],
    //  specs: ['./e2e/Welcome-page-elements-present-spec.js'],
     specs: ['./e2e/loginViaUserName-spec.js'],
    restartBrowserBetweenTests: false,

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