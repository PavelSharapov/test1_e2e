'use strict';


let LoginedUserGamesPage = require('./pages/loginedUserGamesPage-objects.js');
let helpers = require('protractor-helpers');


describe('Logined user Games page sections.', function () {
    let loginedUserGamesPage = new LoginedUserGamesPage();
    it('login at site', function () {
        loginedUserGamesPage.logIn('p1','44445678t');
    });
    describe('Header section:', function () {
        it('should displayed Pravda logo in header', function () {
            expect(loginedUserGamesPage.headerLogoPravda).toBeDisplayed();
            // browser.sleep(2000);
        });
        it('should present "Base url" link at Pravda logo in header', function () {
            expect(loginedUserGamesPage.headerLogoPravda.getAttribute('href'))
                .toEqual(browser.baseUrl);
        });
        it('should displayed "Games" button in header', function () {
            expect(loginedUserGamesPage.headerAllGamesItem).toBeDisplayed();
           // browser.sleep(2000);
        });
        it('should present "/game" link at Game button', function () {
            expect(loginedUserGamesPage.headerAllGamesItem.getAttribute('href'))
                .toEqual(browser.baseUrl + '/games');
        });
        it('should displayed "Jackpot" button in header', function () {
            expect(loginedUserGamesPage.headerJackpotItem).toBeDisplayed();
        });
        it('should present INPROGRESS "#" link at Jackpot button', function () {
            expect(loginedUserGamesPage.headerJackpotItem.getAttribute('href'))
                .toEqual(browser.baseUrl + '/games#');
        });
        it('should displayed "Cash box" button in header', function () {
            expect(loginedUserGamesPage.headerCashboxItem).toBeDisplayed();
        });
        it('should present "/user/wallets" link in header', function () {
            expect(loginedUserGamesPage.headerCashboxItem.getAttribute('href'))
                .toEqual(browser.baseUrl + "/user/wallets");
        });
        it('should displayed "Bonuses" button in header', function () {
            expect(loginedUserGamesPage.headerBonusesInfoItem).toBeDisplayed();
        });
        it('should present "/bonus-info" link at Bonuses button in header', function () {
            expect(loginedUserGamesPage.headerBonusesInfoItem.getAttribute('href'))
                .toEqual(browser.baseUrl + '/bonus-info');
        });
        it('should displayed "Tournaments" button in header', function () {
            expect(loginedUserGamesPage.headerTournamentsItem).toBeDisplayed();
        });
        it('should present INPROGRESS "#" link at Tournamens button', function () {
            expect(loginedUserGamesPage.headerTournamentsItem.getAttribute('href'))
                .toEqual(browser.baseUrl + '/games#');
        });
        it('should displayed logined user name ', function () {
            expect(loginedUserGamesPage.headerLoginedUserName).toBeDisplayed();
        });
        it('should displayed logined user icon ', function () {
            expect(loginedUserGamesPage.headerLoginedUserItemIcon).toBeDisplayed();
        });
        it('should presrnt "/user/profile" link at the logined user icon', function () {
            expect(loginedUserGamesPage.headerLoginedUserItemLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/user/profile');
        });
        it('should displayed "Wallet" item title', function () {
            expect(loginedUserGamesPage.headerUserWalletItemTitle).toBeDisplayed();
        });
        it('should displayed User current currency value ', function () {
            expect(loginedUserGamesPage.headerUserWalletItemCurrentValue).toBeDisplayed();
        });
        it('should displayed "Deposit (make)" title ', function () {
            expect(loginedUserGamesPage.headerDepositItemTitle).toBeDisplayed();
        });
        it('should displayed "Deposit (make)" icon ', function () {
            expect(loginedUserGamesPage.headerDepositItemIcon).toBeDisplayed();
        });
        it('should present "/user/deposits/make" link at the deposit(make) item ', function () {
            expect(loginedUserGamesPage.headerDepositItemLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/user/deposits/make');
        });
        it('should displayed "Bonus (activate)" icon in hesder', function () {
            expect(loginedUserGamesPage.headerBonusActivateItemIcon).toBeDisplayed();
        });
        it('should displayed "Bonus (activate)" title in hesder', function () {
            expect(loginedUserGamesPage.headerBonusActivateItemTitle).toBeDisplayed();
        });
        it('should present "/user/activate-bonus" link at bonus item', function () {
            expect(loginedUserGamesPage.headerBonusActivateItemLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/user/activate-bonus');
        });
        it('should displayed logout item title', function () {
            expect(loginedUserGamesPage.headerLogOutItemTitle).toBeDisplayed();
        });
        it('should displayed logout item icon', function () {
            expect(loginedUserGamesPage.headerLogOutItemIcon).toBeDisplayed();
        });
        it('should present "/logout" link at the logout button', function () {
            expect(loginedUserGamesPage.headerLogOutItemLink.getAttribute('href'))
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
                .toEqual(browser.baseUrl + '/games/new/html5' );
        });
        it('should displayed game filter "Popular"', function () {
            expect(loginedUserGamesPage.gamesFilterItem_2).toBeDisplayed();
        });
        it('should present "/games/popular" link at the "Popular" filter', function () {
            expect(loginedUserGamesPage.gamesFilterItem_2.getAttribute('data-list'))
                .toEqual(browser.baseUrl + '/games/popular/html5');
        });
        it('should displayed game filter "All games"', function () {
            expect(loginedUserGamesPage.gamesFilterItem_3).toBeDisplayed();
        });
        it('should present "/games/all" link at the "All games" filter', function () {
            expect(loginedUserGamesPage.gamesFilterItem_3.getAttribute('data-list'))
                .toEqual(browser.baseUrl + '/games/all/html5');
        });
        it('should displayed game filter "Slots"', function () {
            expect(loginedUserGamesPage.gamesFilterItem_4).toBeDisplayed();
        });
        it('should present "/games/slots" link at the "Slots" filter', function () {
            expect(loginedUserGamesPage.gamesFilterItem_4.getAttribute('data-list'))
                .toEqual(browser.baseUrl + '/games/slots/html5');
        });
        it('should displayed game filter "Classic"', function () {
            expect(loginedUserGamesPage.gamesFilterItem_5).toBeDisplayed();
        });
        it('should present "/games/classic" link at the "Classic" filter', function () {
            expect(loginedUserGamesPage.gamesFilterItem_5.getAttribute('data-list'))
                .toEqual(browser.baseUrl + '/games/classic/html5');
        });
        it('should displayed game filter "Table"', function () {
            expect(loginedUserGamesPage.gamesFilterItem_6).toBeDisplayed();
        });
        it('should present "/games/table" link at the "Table" filter', function () {
            expect(loginedUserGamesPage.gamesFilterItem_6.getAttribute('data-list'))
                .toEqual(browser.baseUrl +  '/games/table/html5');
        });
        it('should displayed game filter "Other"', function () {
            expect(loginedUserGamesPage.gamesFilterItem_7).toBeDisplayed();
        });
        it('should present "/games/misc" link at the "Other" filter', function () {
            expect(loginedUserGamesPage.gamesFilterItem_7.getAttribute('data-list'))
                .toEqual(browser.baseUrl + '/games/misc/html5');
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
        it('should displayed 1st game prewiev', function () {
            expect(loginedUserGamesPage.gamePrewiewTop_1).toBeDisplayed();
            expect(loginedUserGamesPage.gamePrewiewBottom_1).toBeDisplayed();
        });
        it('should displayed 2nd game prewiev', function () {
            expect(loginedUserGamesPage.gamePrewiewTop_2).toBeDisplayed();
            expect(loginedUserGamesPage.gamePrewiewBottom_2).toBeDisplayed();
        });
        it('should displayed 3rd game prewiev', function () {
            expect(loginedUserGamesPage.gamePrewiewTop_3).toBeDisplayed();
            expect(loginedUserGamesPage.gamePrewiewBottom_3).toBeDisplayed();
        });
        it('should displayed 4th game prewiev', function () {
            expect(loginedUserGamesPage.gamePrewiewTop_4).toBeDisplayed();
            expect(loginedUserGamesPage.gamePrewiewBottom_4).toBeDisplayed();
        });
        it('should displayed 5th game prewiev', function () {
            expect(loginedUserGamesPage.gamePrewiewTop_5).toBeDisplayed();
            expect(loginedUserGamesPage.gamePrewiewBottom_5).toBeDisplayed();
        });
        it('should displayed 6th game prewiev', function () {
            expect(loginedUserGamesPage.gamePrewiewTop_6).toBeDisplayed();
            expect(loginedUserGamesPage.gamePrewiewBottom_6).toBeDisplayed();
        });
        it('should displayed 7th game prewiev', function () {
            expect(loginedUserGamesPage.gamePrewiewTop_7).toBeDisplayed();
            expect(loginedUserGamesPage.gamePrewiewBottom_7).toBeDisplayed();
        });
        it('should displayed 8th game prewiev', function () {
            expect(loginedUserGamesPage.gamePrewiewTop_8).toBeDisplayed();
            expect(loginedUserGamesPage.gamePrewiewBottom_8).toBeDisplayed();
        });
        it('should displayed 9th game prewiev', function () {
            expect(loginedUserGamesPage.gamePrewiewTop_9).toBeDisplayed();
            expect(loginedUserGamesPage.gamePrewiewBottom_9).toBeDisplayed();
        });
        it('should displayed 10th game prewiev', function () {
            expect(loginedUserGamesPage.gamePrewiewTop_10).toBeDisplayed();
            expect(loginedUserGamesPage.gamePrewiewBottom_10).toBeDisplayed();
        });
        it('should displayed 11nd game prewiev', function () {
            expect(loginedUserGamesPage.gamePrewiewTop_11).toBeDisplayed();
            expect(loginedUserGamesPage.gamePrewiewBottom_11).toBeDisplayed();
        });
        it('should displayed big-game block prewiev', function () {
            expect(loginedUserGamesPage.bigGamePrewiewTop.isDisplayed()).toBe(true);
            expect(loginedUserGamesPage.bigGamePrewiewMid.isDisplayed()).toBe(false);
            expect(loginedUserGamesPage.bigGamePrewiewBottom.isDisplayed()).toBe(true);
        });
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






