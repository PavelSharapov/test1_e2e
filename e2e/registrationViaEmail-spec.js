'use strict';

let WelcomePage = require('./PageObgects/welcomePage-objects');
let Registration = require('./Helpers/registration-objects.js');


describe('Registration on site through Email: ', function () {
    let welcomePage = new WelcomePage();
    let registrationHelper = new Registration();

    /*let userName = 'p'+(Math.round(Math.random()*2000+1500));
    let email = userName + 'autotest' + '@pravda.world';
    let password = '44445678t';*/

    it('Should download Welcome page', function () {
       welcomePage.get();
       welcomePage.waitForWelcomePageDownload();
       expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);
    });
    it ('Should open Registration form in the Welcome page', function () {
        registrationHelper.regFormOpen();
        expect(registrationHelper.regForm.isDisplayed()).toBe(true);
    });
    it ('Should be fill in all inputs', function () {

        registrationHelper.regFormFillingIn();
        expect(registrationHelper.regFormSuccess.isDisplayed()).toBe(true);
        registrationHelper.regFormSuccessUserEmailText.getText()
            .then(function (userEmail) {
                console.log('user email: ' + userEmail);
            });
    });
    it ('Should open Succses registration popup', function () {
        expect(registrationHelper.regFormSuccessUserEmailText.getText())
            .toEqual(registrationHelper.email);
        registrationHelper.regFormSuccessClose();
    });

});