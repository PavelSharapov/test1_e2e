'use strict';


let LoginedUserGamesPage = require('./pages/newUserWelcomePage-objects.js');


describe('Welcome page sections.', function () {
    let loginedUserGamesPage = new LoginedUserGamesPage();
    // browser.sleep(3000);


 /*   beforeAll(function () {
        let self = this;
        browser.executeScript("return window.localStorage.getItem('ngStorage-logged');").then(function (isLogged) {
            self.isLogged = isLogged;
        });*/

    it('should open Welcome page', function () {
        welcomePage.get();
        welcomePage.waitForWelcomePageDownload();
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);
    });
    describe('Header section:', function () {
        it('should present "Games" button in header', function () {
            expect(loginedUserGamesPage.headerAllGamesItem.isDisplayed()).toBe(true);
            // browser.sleep(2000);
        });
        it('should present "Jackpot" button in header', function () {
            expect(loginedUserGamesPage.headerJackpotItem.isDisplayed()).toBe(true);
            // browser.sleep(2000);
        });
        it('should present "Wllets" button in header', function () {
            expect(loginedUserGamesPage.headerCashboxItem.isDisplayed()).toBe(true);
            // browser.sleep(2000);
        });
        it('should present "Bonuses" button in header', function () {
            expect(loginedUserGamesPage.headerBonusesInfoItem.isDisplayed()).toBe(true);
            // browser.sleep(2000);
        });
        it('should present "Tournaments" button in header', function () {
            expect(loginedUserGamesPage.headerTournamentsItem.isDisplayed()).toBe(true);
            // browser.sleep(2000);
        });
        it('should present Pravda logo in header', function () {
            expect(loginedUserGamesPage.headerLogoPravda.isDisplayed()).toBe(true);
            // browser.sleep(2000);
        });






    });
    describe('Slider section:', function () {



    });


    describe('Games filter section:', function () {


    });
    describe('Vendors filter section:',function () {



    });


    describe('Games section:',function () {




    });

    describe('Footer section elements:', function () {
        it('should displayed Footer-top block',function () {
            expect(loginedUserGamesPage.footerTopBlock.isDisplayed()).toBe(true);
        });
        it('should displayed Footer-bottom block',function () {
            expect(loginedUserGamesPage.footerBottomBlock.isDisplayed()).toBe(true);
        });
        it('should displayed footer logo', function () {
            expect(loginedUserGamesPage.footerLogo.isDisplayed()).toBe(true);
        });
        it('should displayed "Contacts" item and contain link',function () {
            expect(loginedUserGamesPage.footerContactsLink.isDisplayed()).toBe(true);
            expect(loginedUserGamesPage.footerContactsLink.getAttribute('href')).toEqual(browser.baseUrl + '/contacts');
            /*loginedUserGamesPage.footerContactsLink.getText().then(function (text) {
                console.log(text);
            });
            loginedUserGamesPage.footerContactsLink.getAttribute('href').then(function (link) {
                console.log(link);
            });*/
        });
        it('should displayed "Methods" item and contain link',function () {
            expect(loginedUserGamesPage.footerMethodsLink.isDisplayed()).toBe(true);
            expect(loginedUserGamesPage.footerMethodsLink.getAttribute('href')).toEqual(browser.baseUrl + '/payment/methods');

            /*loginedUserGamesPage.footerMethodsLink.getText().then(function (text) {
                console.log(text);
            });
            loginedUserGamesPage.footerMethodsLink.getAttribute('href').then(function (link) {
                console.log(link);
            });*/
        });
        it('should displayed "Terms" item and contain link',function () {
            expect(loginedUserGamesPage.footerTermsLink.isDisplayed()).toBe(true);
            expect(loginedUserGamesPage.footerTermsLink.getAttribute('href')).toEqual(browser.baseUrl + '/page/terms');
        });
        it('should displayed "Security" item and contain link',function () {
            expect(loginedUserGamesPage.footerSecurityLink.isDisplayed()).toBe(true);
            expect(loginedUserGamesPage.footerSecurityLink.getAttribute('href')).toEqual(browser.baseUrl + '/page/security');
        });
        it('should displayed "FAQ" item and contain link',function () {
            expect(loginedUserGamesPage.footerFaqLink.isDisplayed()).toBe(true);
            expect(loginedUserGamesPage.footerFaqLink.getAttribute('href')).toEqual(browser.baseUrl + '/page/faq');
        });
        it('should displayed "Terms and Conditions" item and contain link',function () {
            expect(loginedUserGamesPage.footerBonusTermsLink.isDisplayed()).toBe(true);
            expect(loginedUserGamesPage.footerBonusTermsLink.getAttribute('href')).toEqual(browser.baseUrl + '/page/bonus-terms');
        });
        it('should displayed "Affiliates" item and contain link',function () {
            expect(loginedUserGamesPage.footerAffiliatesLink.isDisplayed()).toBe(true);
            expect(loginedUserGamesPage.footerAffiliatesLink.getAttribute('href')).toEqual('https://truthaffiliate.com/');
        });
        it('should displayed Conditions text left block',function () {
            expect(loginedUserGamesPage.footerConditionsLeftBlock.isDisplayed()).toBe(true);
        });
        it('should displayed Conditions text right block and contain "/bonus" and "games" links',function () {
            expect(loginedUserGamesPage.footerConditionsRightBlock.isDisplayed()).toBe(true);
        });
        it('should displayed "Bonus" link in right block of footer terms "/bonus" and "games" links',function () {
            expect(loginedUserGamesPage.footerConditionsRightBlockBonusLink.getAttribute('href')).toEqual(browser.baseUrl + '/page/inprogres');
        });
        it('should displayed "Bonus" link in right block of footer terms "/bonus" and "games" links',function () {
            expect(loginedUserGamesPage.footerConditionsRightBlockChoiseGameLink.getAttribute('href')).toEqual(browser.baseUrl + '/games');
        });
        it('should displayed "Bitcoin" image ',function () {
            expect(loginedUserGamesPage.footerBitcoinImage.isDisplayed()).toBe(true);
        });
        it('should displayed "Cubits" image ',function () {
            expect(loginedUserGamesPage.footerCubitsImage.isDisplayed()).toBe(true);
        });
        it('should displayed "Maestro" image ',function () {
            expect(loginedUserGamesPage.footerMaestroImage.isDisplayed()).toBe(true);
        });
        it('should displayed "Qiwi wallet" image ',function () {
            expect(loginedUserGamesPage.footerQiwiWalletImage.isDisplayed()).toBe(true);
        });
        it('should displayed "Mastercard" image ',function () {
            expect(loginedUserGamesPage.footerMasterCardImage.isDisplayed()).toBe(true);
        });
        it('should displayed "Visa" image ',function () {
            expect(loginedUserGamesPage.footerVisaImage.isDisplayed()).toBe(true);
        });
        it('should displayed "Wirecard" image ',function () {
            expect(loginedUserGamesPage.footerWirecardImage.isDisplayed()).toBe(true);
            /*loginedUserGamesPage.footerWirecardImage.getAttribute('src').then(function (img) {
                console.log(img);
            });*/
        });
        it('should displayed scroll-top buton',function () {
            loginedUserGamesPage.jumpToFooter();
            expect(loginedUserGamesPage.footerScrollTopButton.isDisplayed()).toBe(true);
            loginedUserGamesPage.jumpToHeader();
        });
    });
});








