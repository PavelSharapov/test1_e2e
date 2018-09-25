'use strict';


let LoginedUserJackpotPage = require('../PageObgects/jackpotPageLogined-objects');
let HeaderFooterLoginedUser = require('../PageObgects/headerFooter-objects.js');
// let Login = require('../Helpers/login-objects.js');
let helpers = require('protractor-helpers');



describe('Jackpot page sections.', function () {
    let loginedUserJackpotPage = new LoginedUserJackpotPage();
    let headerFooterLogined = new HeaderFooterLoginedUser();
    // let logInHelper = new Login();
    // logInHelper.logIn('p1', '44445678t');   // Login to site


    it('open Jackpot page', function () {
        loginedUserJackpotPage.getJackpotPage();
    });
    describe('In progress modal:', function () {
        it('should displayed "In progress" modal', function () {
            expect(loginedUserJackpotPage.inProgresModal.isDisplayed()).toBe(true);
        });
    });
    describe('Header section:', function () {
        it('should displayed Pravda logo in header', function () {
            expect(headerFooterLogined.headerLogoPravda).toBeDisplayed();
            // browser.sleep(2000);
        });
        it('should present "Base url" link at Pravda logo in header', function () {
            expect(headerFooterLogined.headerLogoPravda.getAttribute('href'))
                .toEqual(browser.baseUrl);
        });
        it('should displayed "Games" button in header', function () {
            expect(headerFooterLogined.headerAllGamesItem).toBeDisplayed();
            // browser.sleep(2000);
        });
        it('should present "/game" link at Game button', function () {
            expect(headerFooterLogined.headerAllGamesItem.getAttribute('href'))
                .toEqual(browser.baseUrl + '/games');
        });
        it('should displayed "Jackpot" button in header', function () {
            expect(headerFooterLogined.headerJackpotItem).toBeDisplayed();
        });
        it('should present INPROGRESS "#" link at Jackpot button', function () {
            expect(headerFooterLogined.headerJackpotItem.getAttribute('href'))
                .toEqual(browser.baseUrl + '/games#');
        });
        it('should displayed "Cash box" button in header', function () {
            expect(headerFooterLogined.headerKassaItem).toBeDisplayed();
        });
        it('should present "/user/wallets" link in header', function () {
            expect(headerFooterLogined.headerKassaItem.getAttribute('href'))
                .toEqual(browser.baseUrl + "/user/wallets");
        });
        it('should displayed "Bonuses" button in header', function () {
            expect(headerFooterLogined.headerBonusesInfoItem).toBeDisplayed();
        });
        it('should present "/bonus-info" link at Bonuses button in header', function () {
            expect(headerFooterLogined.headerBonusesInfoItem.getAttribute('href'))
                .toEqual(browser.baseUrl + '/bonus-info');
        });
        it('should displayed "Tournaments" button in header', function () {
            expect(headerFooterLogined.headerTournamentsItem).toBeDisplayed();
        });
        it('should present INPROGRESS "#" link at Tournaments button', function () {
            expect(headerFooterLogined.headerJackpotItem.getAttribute('href'))
                .toEqual(browser.baseUrl + '/games#');
        });
        it('should displayed logined user name ', function () {
            expect(headerFooterLogined.headerLoginedUserName).toBeDisplayed();
        });
        it('should displayed logined user icon ', function () {
            expect(headerFooterLogined.headerLoginedUserItemIcon).toBeDisplayed();
        });
        it('should presrnt "/user/profile" link at the logined user icon', function () {
            expect(headerFooterLogined.headerLoginedUserItemLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/profile');
        });
        it('should displayed "Wallet" item title', function () {
            expect(headerFooterLogined.headerUserWalletItemTitle).toBeDisplayed();
        });
        it('should displayed User current currency value ', function () {
            expect(headerFooterLogined.headerUserWalletItemCurrentValue).toBeDisplayed();
        });
        it('should displayed "Deposit (make)" title ', function () {
            expect(headerFooterLogined.headerDepositItemTitle).toBeDisplayed();
        });
        it('should displayed "Deposit (make)" icon ', function () {
            expect(headerFooterLogined.headerDepositItemIcon).toBeDisplayed();
        });
        it('should present "/user/deposits/make" link at the deposit(make) item ', function () {
            expect(headerFooterLogined.headerDepositItemLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/user/deposits/make');
        });
        it('should displayed "Bonus (activate)" icon in hesder', function () {
            expect(headerFooterLogined.headerBonusActivateItemIcon).toBeDisplayed();
        });
        it('should displayed "Bonus (activate)" title in hesder', function () {
            expect(headerFooterLogined.headerBonusActivateItemTitle).toBeDisplayed();
        });
        it('should present "/user/activate-bonus" link at bonus item', function () {
            expect(headerFooterLogined.headerBonusActivateItemLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/user/activate-bonus');
        });
        it('should displayed logout item title', function () {
            expect(headerFooterLogined.headerLogOutItemTitle).toBeDisplayed();
        });
        it('should displayed logout item icon', function () {
            expect(headerFooterLogined.headerLogOutItemIcon).toBeDisplayed();
        });
        it('should present "/logout" link at the logout button', function () {
            expect(headerFooterLogined.headerLogOutItemLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/logout');
        });
    });
    describe('Footer section elements:', function () {
        it('should displayed Footer-top block',function () {
            expect(headerFooterLogined.footerTopBlock).toBeDisplayed();
        });
        it('should displayed Footer-bottom block',function () {
            expect(headerFooterLogined.footerBottomBlock).toBeDisplayed();
        });
        it('should displayed footer logo', function () {
            expect(headerFooterLogined.footerLogo).toBeDisplayed();
        });
        it('should displayed "Contacts" item ',function () {
            expect(headerFooterLogined.footerContactsLink).toBeDisplayed();
        });
        it('should present "Contacts"  link',function () {
            expect(headerFooterLogined.footerContactsLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/contacts');
            /*headerFooterLogined.footerContactsLink.getText().then(function (text) {
                console.log(text);
            });
            headerFooterLogined.footerContactsLink.getAttribute('href').then(function (link) {
                console.log(link);
            });*/
        });
        it('should displayed "Methods" item and contain link',function () {
            expect(headerFooterLogined.footerMethodsLink).toBeDisplayed();
            expect(headerFooterLogined.footerMethodsLink.getAttribute('href')).toEqual(browser.baseUrl + '/payment/methods');

            /*headerFooterLogined.footerMethodsLink.getText().then(function (text) {
                console.log(text);
            });
            headerFooterLogined.footerMethodsLink.getAttribute('href').then(function (link) {
                console.log(link);
            });*/
        });
        it('should displayed "Terms" item ',function () {
            expect(headerFooterLogined.footerTermsLink).toBeDisplayed();
        });
        it('should present "/page/terms"  link',function () {
            expect(headerFooterLogined.footerTermsLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/page/terms');
        });
        it('should displayed "Security" item ',function () {
            expect(headerFooterLogined.footerSecurityLink).toBeDisplayed();
        });
        it('should present "/page/security" link',function () {
            expect(headerFooterLogined.footerSecurityLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/page/security');
        });
        it('should displayed "FAQ" item ',function () {
            expect(headerFooterLogined.footerFaqLink).toBeDisplayed();
        });
        it('should present "/page/faq" link',function () {
            expect(headerFooterLogined.footerFaqLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/page/faq');
        });
        it('should displayed "Terms and Conditions" item',function () {
            expect(headerFooterLogined.footerBonusTermsLink).toBeDisplayed();
        });
        it('should present "/page/bonus-terms" link',function () {
            expect(headerFooterLogined.footerBonusTermsLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/page/bonus-terms');
        });
        it('should displayed "Affiliates" item',function () {
            expect(headerFooterLogined.footerAffiliatesLink).toBeDisplayed();
        });
        it('should displayed "https://truthaffiliate.com/" link',function () {
            expect(headerFooterLogined.footerAffiliatesLink.getAttribute('href'))
                .toEqual('https://truthaffiliate.com/');
        });
        it('should displayed Conditions text left block',function () {
            expect(headerFooterLogined.footerConditionsLeftBlock).toBeDisplayed();
        });
        it('should displayed Conditions text right block',function () {
            expect(headerFooterLogined.footerConditionsRightBlock).toBeDisplayed();
        });
        it('should displayed "bonus" link in right block of footer terms',function () {
            expect(headerFooterLogined.footerConditionsRightBlockBonusLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/bonus-info');
        });
        it('should displayed "choise game" link in right block of footer terms',function () {
            expect(headerFooterLogined.footerConditionsRightBlockChoiseGameLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/games');
        });
        it('should displayed "Bitcoin" image ',function () {
            expect(headerFooterLogined.footerBitcoinImage).toBeDisplayed();
        });
        it('should displayed "Cubits" image ',function () {
            expect(headerFooterLogined.footerCubitsImage).toBeDisplayed();
        });
        it('should displayed "Maestro" image ',function () {
            expect(headerFooterLogined.footerMaestroImage).toBeDisplayed();
        });
        it('should displayed "Qiwi wallet" image ',function () {
            expect(headerFooterLogined.footerQiwiWalletImage).toBeDisplayed();
        });
        it('should displayed "Mastercard" image ',function () {
            expect(headerFooterLogined.footerMasterCardImage).toBeDisplayed();
        });
        it('should displayed "Visa" image ',function () {
            expect(headerFooterLogined.footerVisaImage).toBeDisplayed();
        });
        it('should displayed "Wirecard" image ',function () {
            expect(headerFooterLogined.footerWirecardImage).toBeDisplayed();
            /*loginedUserJackpotPage.footerWirecardImage.getAttribute('src').then(function (img) {
                console.log(img);
            });*/
        });
        it('should displayed scroll-top buton',function () {
            loginedUserJackpotPage.jumpToFooter();
            expect(headerFooterLogined.footerScrollTopButton).toBeDisplayed();
            loginedUserJackpotPage.jumpToHeader();
        });
    });
});








