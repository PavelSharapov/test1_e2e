'use strict';


let LoginedUserGamesPage = require('./pages/loginedUserGamesPage-objects.js');
// let WelcomePage = require('./pages/newUserWelcomePage-objects.js');
let helpers = require('protractor-helpers');


describe('Logined user Games page sections.', function () {
    let loginedUserGamesPage = new LoginedUserGamesPage();
    it('login at site', function () {
        loginedUserGamesPage.login('p1','44445678t');
    });
    describe('Header section:', function () {
        it('should displayed "Games" button in header', function () {
            expect(loginedUserGamesPage.headerAllGamesItem).toBeDisplayed();
           // browser.sleep(2000);
        });
        it('should displayed "Jackpot" button in header', function () {
            expect(loginedUserGamesPage.headerJackpotItem).toBeDisplayed();
            // browser.sleep(2000);
        });
        it('should displayed "Wllets" button in header', function () {
            expect(loginedUserGamesPage.headerCashboxItem).toBeDisplayed();
            // browser.sleep(2000);
        });
        it('should displayed "Bonuses" button in header', function () {
            expect(loginedUserGamesPage.headerBonusesInfoItem).toBeDisplayed();
            // browser.sleep(2000);
        });
        it('should displayed "Tournaments" button in header', function () {
            expect(loginedUserGamesPage.headerTournamentsItem).toBeDisplayed();
            // browser.sleep(2000);
        });
        it('should displayed Pravda logo in header', function () {
            expect(loginedUserGamesPage.headerLogoPravda).toBeDisplayed();
            // browser.sleep(2000);
        });
        it('should displayed logined user item ', function () {
            expect(loginedUserGamesPage.headerUserNickName).toBeDisplayed();
        });
        it('should displayed logined user name ', function () {
            expect(loginedUserGamesPage.headerLoginedUserItem).toBeDisplayed();
        });
        it('should displayed wallet item', function () {
            expect(loginedUserGamesPage.headerUserWalletItem).toBeDisplayed();
        });
        it('should displayed current value ', function () {
            expect(loginedUserGamesPage.headerCurrentWalueVolletItem).toBeDisplayed();
        });
        it('should displayed deposit (make) item', function () {
            expect(loginedUserGamesPage.headerDepositItem).toBeDisplayed();
        });
        it('should displayed bonus (activate) item', function () {
            expect(loginedUserGamesPage.headerBonusActivateItem).toBeDisplayed();
        });
        it('should displayed logout item', function () {
            expect(loginedUserGamesPage.headerLogOutItem).toBeDisplayed();
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
            expect(loginedUserGamesPage.footerTopBlock).toBeDisplayed();
        });
        it('should displayed Footer-bottom block',function () {
            expect(loginedUserGamesPage.footerBottomBlock).toBeDisplayed();
        });
        it('should displayed footer logo', function () {
            expect(loginedUserGamesPage.footerLogo).toBeDisplayed();
        });
        it('should displayed "Contacts" item and contain link',function () {
            expect(loginedUserGamesPage.footerContactsLink).toBeDisplayed();
            expect(loginedUserGamesPage.footerContactsLink.getAttribute('href')).toEqual(browser.baseUrl + '/contacts');
            /*loginedUserGamesPage.footerContactsLink.getText().then(function (text) {
                console.log(text);
            });
            loginedUserGamesPage.footerContactsLink.getAttribute('href').then(function (link) {
                console.log(link);
            });*/
        });
        it('should displayed "Methods" item and contain link',function () {
            expect(loginedUserGamesPage.footerMethodsLink).toBeDisplayed();
            expect(loginedUserGamesPage.footerMethodsLink.getAttribute('href')).toEqual(browser.baseUrl + '/payment/methods');

            /*loginedUserGamesPage.footerMethodsLink.getText().then(function (text) {
                console.log(text);
            });
            loginedUserGamesPage.footerMethodsLink.getAttribute('href').then(function (link) {
                console.log(link);
            });*/
        });
        it('should displayed "Terms" item and contain link',function () {
            expect(loginedUserGamesPage.footerTermsLink).toBeDisplayed();
            expect(loginedUserGamesPage.footerTermsLink.getAttribute('href')).toEqual(browser.baseUrl + '/page/terms');
        });
        it('should displayed "Security" item and contain link',function () {
            expect(loginedUserGamesPage.footerSecurityLink).toBeDisplayed();
            expect(loginedUserGamesPage.footerSecurityLink.getAttribute('href')).toEqual(browser.baseUrl + '/page/security');
        });
        it('should displayed "FAQ" item and contain link',function () {
            expect(loginedUserGamesPage.footerFaqLink).toBeDisplayed();
            expect(loginedUserGamesPage.footerFaqLink.getAttribute('href')).toEqual(browser.baseUrl + '/page/faq');
        });
        it('should displayed "Terms and Conditions" item and contain link',function () {
            expect(loginedUserGamesPage.footerBonusTermsLink).toBeDisplayed();
            expect(loginedUserGamesPage.footerBonusTermsLink.getAttribute('href')).toEqual(browser.baseUrl + '/page/bonus-terms');
        });
        it('should displayed "Affiliates" item and contain link',function () {
            expect(loginedUserGamesPage.footerAffiliatesLink).toBeDisplayed();
            expect(loginedUserGamesPage.footerAffiliatesLink.getAttribute('href')).toEqual('https://truthaffiliate.com/');
        });
        it('should displayed Conditions text left block',function () {
            expect(loginedUserGamesPage.footerConditionsLeftBlock).toBeDisplayed();
        });
        it('should displayed Conditions text right block and contain "/bonus" and "games" links',function () {
            expect(loginedUserGamesPage.footerConditionsRightBlock).toBeDisplayed();
        });
        it('should displayed "Bonus" link in right block of footer terms "/bonus" and "games" links',function () {
            expect(loginedUserGamesPage.footerConditionsRightBlockBonusLink.getAttribute('href')).toEqual(browser.baseUrl + '/page/inprogres');
        });
        it('should displayed "Bonus" link in right block of footer terms "/bonus" and "games" links',function () {
            expect(loginedUserGamesPage.footerConditionsRightBlockChoiseGameLink.getAttribute('href')).toEqual(browser.baseUrl + '/games');
        });
        it('should displayed "Bitcoin" image ',function () {
            expect(loginedUserGamesPage.footerBitcoinImage).toBeDisplayed();
        });
        it('should displayed "Cubits" image ',function () {
            expect(loginedUserGamesPage.footerCubitsImage).toBeDisplayed();
        });
        it('should displayed "Maestro" image ',function () {
            expect(loginedUserGamesPage.footerMaestroImage).toBeDisplayed();
        });
        it('should displayed "Qiwi wallet" image ',function () {
            expect(loginedUserGamesPage.footerQiwiWalletImage).toBeDisplayed();
        });
        it('should displayed "Mastercard" image ',function () {
            expect(loginedUserGamesPage.footerMasterCardImage).toBeDisplayed();
        });
        it('should displayed "Visa" image ',function () {
            expect(loginedUserGamesPage.footerVisaImage).toBeDisplayed();
        });
        it('should displayed "Wirecard" image ',function () {
            expect(loginedUserGamesPage.footerWirecardImage).toBeDisplayed();
            /*loginedUserGamesPage.footerWirecardImage.getAttribute('src').then(function (img) {
                console.log(img);
            });*/
        });
        it('should displayed scroll-top buton',function () {
            loginedUserGamesPage.jumpToFooter();
            expect(loginedUserGamesPage.footerScrollTopButton).toBeDisplayed();
            loginedUserGamesPage.jumpToHeader();
        });
    });
});








