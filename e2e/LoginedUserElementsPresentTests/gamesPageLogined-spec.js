'use strict';


let LoginedUserGamesPage = require('../PageObgects/gamesPageLogined-objects.js');
let HeaderFooterLoginedUser = require('../PageObgects/headerFooter-objects.js');
//let Login = require('../Helpers/login-objects.js');
let helpers = require('protractor-helpers');


describe('Logined user Games page sections.', function () {
    let loginedUserGamesPage = new LoginedUserGamesPage();
    let headerFooterLogined = new HeaderFooterLoginedUser();
    //let logInHelper = new Login();
    // logInHelper.logIn('p1','44445678t');
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
        it('should present INPROGRESS "#" link at Tournamens button', function () {
            expect(headerFooterLogined.headerTournamentsItem.getAttribute('href'))
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
    describe('Slider section:', function () {
        it('should displayed slider block', function () {
            expect(loginedUserGamesPage.sliderBlock).toBeDisplayed();
        });
        it('should displayed left control button', function () {
            expect(loginedUserGamesPage.sliderLeftControl).toBeDisplayed();
        });
        it('should displayed right control button', function () {
            expect(loginedUserGamesPage.sliderRightControl).toBeDisplayed();
        });
        it('should displayed navigate dot_1', function () {
            expect(loginedUserGamesPage.sliderDot_1).toBeDisplayed();
        });
        it('should displayed navigate dot_2', function () {
            expect(loginedUserGamesPage.sliderDot_2).toBeDisplayed();
        });
        it('should displayed navigate dot_3', function () {
            expect(loginedUserGamesPage.sliderDot_3).toBeDisplayed();
        });
    });
    describe('Games filter section:', function () {
        it('should displayed games navigation block', function () {
            expect(loginedUserGamesPage.gamesNavBlock).toBeDisplayed();
        });
        it('should displayed exchange block', function () {
            expect(loginedUserGamesPage.exchangeBlock).toBeDisplayed();
        });
        it('should displayed exchange value', function () {
            expect(loginedUserGamesPage.exchangeBlockValue).toBeDisplayed();
        });
        it('should displayed search input block', function () {
            expect(loginedUserGamesPage.gameSearchInputBlock).toBeDisplayed();
        });
        it('should displayed game filter "New"', function () {
            expect(loginedUserGamesPage.gamesFilterItem_1).toBeDisplayed();
        });
        it('should present "/new" link at the New filter button', function () {
            expect(loginedUserGamesPage.gamesFilterItem_1.getAttribute('data-list'))
                .toEqual(browser.baseUrl + '/games/new/mobile' );
        });
        it('should displayed game filter "Popular"', function () {
            expect(loginedUserGamesPage.gamesFilterItem_2).toBeDisplayed();
        });
        it('should present "/games/popular" link at the "Popular" filter', function () {
            expect(loginedUserGamesPage.gamesFilterItem_2.getAttribute('data-list'))
                .toEqual(browser.baseUrl + '/games/popular/mobile');
        });
        it('should displayed game filter "All games"', function () {
            expect(loginedUserGamesPage.gamesFilterItem_3).toBeDisplayed();
        });
        it('should present "/games/all" link at the "All games" filter', function () {
            expect(loginedUserGamesPage.gamesFilterItem_3.getAttribute('data-list'))
                .toEqual(browser.baseUrl + '/games/all/mobile');
        });
        it('should displayed game filter "Slots"', function () {
            expect(loginedUserGamesPage.gamesFilterItem_4).toBeDisplayed();
        });
        it('should present "/games/slots" link at the "Slots" filter', function () {
            expect(loginedUserGamesPage.gamesFilterItem_4.getAttribute('data-list'))
                .toEqual(browser.baseUrl + '/games/slots/mobile');
        });
        it('should displayed game filter "Classic"', function () {
            expect(loginedUserGamesPage.gamesFilterItem_5).toBeDisplayed();
        });
        it('should present "/games/classic" link at the "Classic" filter', function () {
            expect(loginedUserGamesPage.gamesFilterItem_5.getAttribute('data-list'))
                .toEqual(browser.baseUrl + '/games/classic/mobile');
        });
        it('should displayed game filter "Table"', function () {
            expect(loginedUserGamesPage.gamesFilterItem_6).toBeDisplayed();
        });
        it('should present "/games/table" link at the "Table" filter', function () {
            expect(loginedUserGamesPage.gamesFilterItem_6.getAttribute('data-list'))
                .toEqual(browser.baseUrl +  '/games/table/mobile');
        });
        it('should displayed game filter "Other"', function () {
            expect(loginedUserGamesPage.gamesFilterItem_7).toBeDisplayed();
        });
        it('should present "/games/misc" link at the "Other" filter', function () {
            expect(loginedUserGamesPage.gamesFilterItem_7.getAttribute('data-list'))
                .toEqual(browser.baseUrl + '/games/misc/mobile');
        });
    });
    describe('Vendors filter section:',function () {
        it('should displayed vendors filter block', function () {
            expect(loginedUserGamesPage.vendorsFilterBlock).toBeDisplayed();
        });
        it('should displayed vendor filter "Netent"', function () {
            expect(loginedUserGamesPage.vendorsFilter_1).toBeDisplayed();
        });
        it('should displayed "Netent" vendor filter icon', function () {
            expect(loginedUserGamesPage.vendorsFilterIcon_1).toBeDisplayed();
        });
        it('should displayed vendor filter "Microgaming"', function () {
            expect(loginedUserGamesPage.vendorsFilter_2).toBeDisplayed();
        });
        it('should displayed "Microgaming" vendor filter icon', function () {
            expect(loginedUserGamesPage.vendorsFilterIcon_2).toBeDisplayed();
        });
        it('should displayed vendor filter "Amatic"', function () {
            expect(loginedUserGamesPage.vendorsFilter_3).toBeDisplayed();
        });
        it('should displayed "Amatic" vendor filter icon', function () {
            expect(loginedUserGamesPage.vendorsFilterIcon_3).toBeDisplayed();
        });
        it('should displayed vendor filter "Novomatic"', function () {
            expect(loginedUserGamesPage.vendorsFilter_4).toBeDisplayed();
        });
        it('should displayed "Novomatic" vendor filter icon', function () {
            expect(loginedUserGamesPage.vendorsFilterIcon_4).toBeDisplayed();
        });
        it('should displayed vendor filter "Aristocrat"', function () {
            expect(loginedUserGamesPage.vendorsFilter_5).toBeDisplayed();
        });
        it('should displayed "Aristocrat" vendor filter icon', function () {
            expect(loginedUserGamesPage.vendorsFilterIcon_5).toBeDisplayed();
        });
        it('should displayed vendor filter "Egt"', function () {
            expect(loginedUserGamesPage.vendorsFilter_6).toBeDisplayed();
        });
        it('should displayed "Egt" vendor filter icon', function () {
            expect(loginedUserGamesPage.vendorsFilterIcon_6).toBeDisplayed();
        });
        it('should displayed vendor filter "Igt"', function () {
            expect(loginedUserGamesPage.vendorsFilter_7).toBeDisplayed();
        });
        it('should displayed "Igt" vendor filter icon', function () {
            expect(loginedUserGamesPage.vendorsFilterIcon_7).toBeDisplayed();
        });
        it('should displayed vendor filter "Igrosoft"', function () {
            expect(loginedUserGamesPage.vendorsFilter_8).toBeDisplayed();
        });
        it('should displayed "Igrosoft" vendor filter icon', function () {
            expect(loginedUserGamesPage.vendorsFilterIcon_8).toBeDisplayed();
        });
    });
    describe('Games section:',function () {
        it('should displayed games block', function () {
            expect(loginedUserGamesPage.gamesBlock).toBeDisplayed();
        });
        it('should displayed 1st game prewiev top', function () {
            expect(loginedUserGamesPage.gamePrewiewTop_1).toBeDisplayed();
        });
        it('should displayed 1st game prewiev bottom', function () {
            expect(loginedUserGamesPage.gamePrewiewBottom_1).toBeDisplayed();
        });
        it('should displayed 2nd game prewiev top', function () {
            expect(loginedUserGamesPage.gamePrewiewTop_2).toBeDisplayed();
        });
        it('should displayed 2nd game prewiev bottom', function () {
            expect(loginedUserGamesPage.gamePrewiewBottom_2).toBeDisplayed();
        });
        it('should displayed 3rd game prewiev top', function () {
            expect(loginedUserGamesPage.gamePrewiewTop_3).toBeDisplayed();
        });
        it('should displayed 3rd game prewiev bottom', function () {
            expect(loginedUserGamesPage.gamePrewiewBottom_3).toBeDisplayed();
        });
        it('should displayed 4th game prewiev top', function () {
            expect(loginedUserGamesPage.gamePrewiewTop_4).toBeDisplayed();
        });
        it('should displayed 4th game prewiev bottom', function () {
            expect(loginedUserGamesPage.gamePrewiewBottom_4).toBeDisplayed();
        });
        it('should displayed 5th game prewiev top', function () {
            expect(loginedUserGamesPage.gamePrewiewTop_5).toBeDisplayed();
        });
        it('should displayed 5th game prewiev bottom', function () {
            expect(loginedUserGamesPage.gamePrewiewBottom_5).toBeDisplayed();
        });
        it('should displayed 6th game prewiev top', function () {
            expect(loginedUserGamesPage.gamePrewiewTop_6).toBeDisplayed();
        });
        it('should displayed 6th game prewiev bottom', function () {
            expect(loginedUserGamesPage.gamePrewiewBottom_6).toBeDisplayed();
        });
        it('should displayed 7th game prewiev top', function () {
            expect(loginedUserGamesPage.gamePrewiewTop_7).toBeDisplayed();
        });
        it('should displayed 7th game prewiev bottom', function () {
            expect(loginedUserGamesPage.gamePrewiewBottom_7).toBeDisplayed();
        });
        it('should displayed 8th game prewiev top', function () {
            expect(loginedUserGamesPage.gamePrewiewTop_8).toBeDisplayed();
        });
        it('should displayed 8th game prewiev bottom', function () {
            expect(loginedUserGamesPage.gamePrewiewBottom_8).toBeDisplayed();
        });
        it('should displayed 9th game prewiev top', function () {
            expect(loginedUserGamesPage.gamePrewiewTop_9).toBeDisplayed();
        });
        it('should displayed 9th game prewiev bottom', function () {
            expect(loginedUserGamesPage.gamePrewiewBottom_9).toBeDisplayed();
        });
        it('should displayed 10th game prewiev top', function () {
            expect(loginedUserGamesPage.gamePrewiewTop_10).toBeDisplayed();
        });
        it('should displayed 10th game prewiev bottom', function () {
            expect(loginedUserGamesPage.gamePrewiewBottom_10).toBeDisplayed();
        });
        /*it('should displayed 11nd game prewiev top', function () {
            expect(loginedUserGamesPage.gamePrewiewTop_11).toBeDisplayed();
        });
        it('should displayed 11nd game prewiev bottom', function () {
            expect(loginedUserGamesPage.gamePrewiewBottom_11).toBeDisplayed();
        });*/
        it('should displayed big-game block prewiev top', function () {
            expect(loginedUserGamesPage.bigGamePrewiewTop.isDisplayed()).toBe(true);
        });
        it('should displayed big-game block prewiev mid', function () {
            expect(loginedUserGamesPage.bigGamePrewiewMid.isDisplayed()).toBe(false);
        });
        it('should displayed big-game block prewiev bottom', function () {
            expect(loginedUserGamesPage.bigGamePrewiewBottom.isDisplayed()).toBe(true);
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
        it('should displayed scroll-top buton',function () {
            headerFooterLogined.jumpToFooter();
            expect(headerFooterLogined.footerScrollTopButton).toBeDisplayed();
            headerFooterLogined.jumpToHeader();
        });
        it('close One Signal popover', function () {
            loginedUserGamesPage.closeOneSignalPopover();

            // browser.pause();
        });

    });
});






