'use strict';


let helpers = require('protractor-helpers');
let HeaderFooterLoginedUser = require('./PageObgects/headerFooter-objects.js');
let Login = require('./Helpers/login-objects.js');


describe('Login to the site', function () {
    let logInHelper = new Login();
    let headerFooter = new HeaderFooterLoginedUser();


        it('Should be login to site',function () {
            logInHelper.logIn('p1', '44445678t');
             expect(headerFooter.headerLoginedUserItemIcon.isDisplayed()).toBe(true);
        });
        it('Should displayed "Games page',function () {
            browser.getCurrentUrl().then (function (url) {
                console.log('Main page url: ' + url)
            });
            expect(browser.getCurrentUrl())
                .toEqual(browser.baseUrl + '/games');

        });

});