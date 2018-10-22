'use strict';



let LoginedUserProfilePage = require('../PageObgects/profilePageLogined-objects.js');
let HeaderFooterLoginedUser = require('../PageObgects/headerFooter-objects.js');
let LoginedUserActivateBonusPage = require('../PageObgects/activateBonusPageLogined-objects.js');
let Login = require('../Helpers/login-objects.js');
let helpers = require('protractor-helpers');

describe('Logined user Activate-bonus page:', function () {
    let userProfilePage = new LoginedUserProfilePage();
    let headerFooterLogined = new HeaderFooterLoginedUser();
    let userActivateBonusPage =new LoginedUserActivateBonusPage();
    let logInHelper = new Login();
    let name ='p1';
    let pass = '44445678t';
    logInHelper.logIn(name, pass);
    it(' open "Activate-bonus" page', function () {
        userActivateBonusPage.getActivateBonusPage();
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
                .toEqual(browser.baseUrl + '/user/activate-bonus#');
        });
        it('should displayed "Kassa" button in header', function () {
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
        it('should present INPROGRESS "#" link at Tournamens button', function () {
            expect(headerFooterLogined.headerTournamentsItem.getAttribute('href'))
                .toEqual(browser.baseUrl + '/user/activate-bonus#');
        });
        it('should displayed logined user name ', function () {
            expect(headerFooterLogined.headerLoginedUserName).toBeDisplayed();
        });
       /* it('should displayed logined user icon ', function () {
            expect(headerFooterLogined.headerLoginedUserItemIcon).toBeDisplayed();
        });*/
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
    describe('Profile menu navigation section:', function () {
        it('should displayed profile page title',function () {
            expect(userProfilePage.profilePageTitle.isDisplayed()).toBe(true);
        });
        it('should displayed profile navigation menu', function () {
            expect(userProfilePage.profileNavigationMenu.isDisplayed()).toBe(true);
        });
        it('should displayed "Games history" link', function () {
            expect(userProfilePage.profileMenuGamesHistory.isDisplayed()).toBe(true);
        });
        it('should displayed "Bonuses history" link', function () {
            expect(userProfilePage.profileMenuBonusesHistory.isDisplayed()).toBe(true);
        });
        it('should displayed "Deposit history" link', function () {
            expect(userProfilePage.profileMenuDepositsHistory.isDisplayed()).toBe(true);
        });
        it('should displayed "Withdraw history" link', function () {
            expect(userProfilePage.profileMenuWithdrawHistory.isDisplayed()).toBe(true);
        });
        it('should displayed "Affiliates" link', function () {
            expect(userProfilePage.profileMenuUserAffiliates.isDisplayed()).toBe(true);
        });
        it('should displayed "Documents Upload" link', function () {
            expect(userProfilePage.profileMenuDocumentsUpload.isDisplayed()).toBe(true);
        });
    });
    describe('Activation-bonus section items:', function () {
        it('should displayed "Activate-bonus" page title', function () {
            expect(userActivateBonusPage.activateBonusPageTitle.isDisplayed()).toBe(true);
        });
        it('should displayed "Bonus get block" ', function () {
            expect(userActivateBonusPage.activateBonusBlock.isDisplayed()).toBe(true);
        });
        it('should displayed Bonus get block title', function () {
            expect(userActivateBonusPage.activateBonusBlockTitle.isDisplayed()).toBe(true);
        });
        it('should displayed Choose bonus input label', function () {
            expect(userActivateBonusPage.bonusChooseInputLabel.isDisplayed()).toBe(true);
        });
        it('should displayed Choose bonus input ', function () {
            expect(userActivateBonusPage.bonusChooseInput.isDisplayed()).toBe(true);
        });
        it('should displayed Amounth input label', function () {
            expect(userActivateBonusPage.bonusAmounthChooseInputLabel.isDisplayed()).toBe(true);
        });
        it('should displayed Amounth input', function () {
            expect(userActivateBonusPage.bonusAmounthChooseInput.isDisplayed()).toBe(true);
        });
        it('should displayed Get Bonus button', function () {
            expect(userActivateBonusPage.getBonusButton.isDisplayed()).toBe(true);
        });
        it('should displayed Pomo code block title', function () {
            expect(userActivateBonusPage.promoCodeBlockTitle.isDisplayed()).toBe(true);
        });
        it('should displayed Promo code input label', function () {
            expect(userActivateBonusPage.promCodeInputLabel.isDisplayed()).toBe(true);
        });
        it('should displayed Promo code input', function () {
            expect(userActivateBonusPage.promoCodeInput.isDisplayed()).toBe(true);
        });
        it('should displayed Buy promo code button', function () {
            expect(userActivateBonusPage.promoCodeBuyButton.isDisplayed()).toBe(true);
        });
    });
    describe('Bonus history table items',function () {
        it('should displayed Bonus history table title', function () {
            expect(userActivateBonusPage.bonusHistoryTableTitle.isDisplayed()).toBe(true);
        });
        it('should displayed Bonus history table', function () {
            expect(userActivateBonusPage.bonusHistoryTable.isDisplayed()).toBe(true);
        });
        it('should displayed bonus Name column title', function () {
            expect(userActivateBonusPage.historyTableNameOfBonusColumn.isDisplayed()).toBe(true);
        });
        it('should displayed bonus Amounth column title', function () {
            expect(userActivateBonusPage.historyTableAmounthColumn.isDisplayed()).toBe(true);
        });
        it('should displayed bonus Activity column title', function () {
            expect(userActivateBonusPage.historyTableActivityColumn.isDisplayed()).toBe(true);
        });
        it('should displayed bonus Time column title', function () {
            expect(userActivateBonusPage.historyTableTimeColumn.isDisplayed()).toBe(true);
        });
        it('should displayed bonus Waiger column title', function () {
            expect(userActivateBonusPage.historyTableWaigerColumn.isDisplayed()).toBe(true);
        });
        it('should displayed bonus Status column title', function () {
            expect(userActivateBonusPage.historyTableStatusColumn.isDisplayed()).toBe(true);
        });
        it('should displayed All bonus history button', function () {
            expect(userActivateBonusPage.allBonusesHistoryButton.isDisplayed()).toBe(true);
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
            expect(headerFooterLogined.footerMethodsLink.isDisplayed()).toBe(true);
            expect(headerFooterLogined.footerMethodsLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/payment/methods');

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
            /*headerFooterLogined.footerWirecardImage.getAttribute('src').then(function (img) {
                console.log(img);
            });*/
        });
       /* it('should displayed scroll-top buton',function () {
            loginedUserKassaPage.jumpToFooter();
            expect(loginedUserKassaPage.footerScrollTopButton).toBeDisplayed();
            loginedUserKassaPage.jumpToHeader();
        });*/
    });

});









