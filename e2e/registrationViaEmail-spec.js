'use strict';

let WelcomePage = require('/home/pavel/Usefull tolls/Protractor tests/Pravda-e2e-test/e2e/Pages/newUserWelcomePage-objects');

describe('Registration on site through Email: ', function () {
    let welcomePage = new WelcomePage();
    /*let userName = 'p'+(Math.round(Math.random()*2000+1500));
    let email = userName + 'autotest' + '@pravda.world';
    let password = '44445678t';*/

    it('Should download Welcome page', function () {
       welcomePage.get();
       welcomePage.waitForWelcomePageDownload();
       expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);
    });
    it ('Should opened Registration modal window', function () {
        welcomePage.regFormOpen();
        welcomePage.waitForRegFormOpen();
        // browser.sleep(2000);
        expect(welcomePage.regForm.isDisplayed()).toBe(true);
    });
    it ('Should be registration on site', function () {
        welcomePage.regFormFillingIn();
        welcomePage.regFormTermsCheckboxAgree();
        welcomePage.regFormSubmitButtonPress();
        welcomePage.waitForRegFormSuccessOpen();
        // browser.sleep(2000);
        expect(welcomePage.regFormSuccess.isDisplayed()).toBe(true);
        welcomePage.regFormSuccessUserEmailText.getText().then(function (userEmail) {
            console.log('user email: '+ userEmail);
        });
        expect(welcomePage.regFormSuccessUserEmailText.getText()).toEqual(welcomePage.email);
        welcomePage.regFormSuccessClose();

    });

});