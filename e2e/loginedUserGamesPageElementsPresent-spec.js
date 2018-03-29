'use strict';


let LoginedUserGamesPage = require('./pages/loginedUserGamesPage-objects.js');
let helpers = require('protractor-helpers');


describe('Logined user Games page sections.', function () {
    let loginedUserGamesPage = new LoginedUserGamesPage();
    it('login at site', function () {
        loginedUserGamesPage.logIn('p1','44445678t');
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
        it('should displayed navigate dot_1', function () {
            expect(loginedUserGamesPage.sliderDot_2).toBeDisplayed();
        });
        it('should displayed navigate dot_1', function () {
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
        it('should displayed game filter "Popular"', function () {
            expect(loginedUserGamesPage.gamesFilterItem_2).toBeDisplayed();
        });
        it('should displayed game filter "All games"', function () {
            expect(loginedUserGamesPage.gamesFilterItem_3).toBeDisplayed();
        });
        it('should displayed game filter "Slots"', function () {
            expect(loginedUserGamesPage.gamesFilterItem_4).toBeDisplayed();
        });
        it('should displayed game filter "Classic"', function () {
            expect(loginedUserGamesPage.gamesFilterItem_5).toBeDisplayed();
        });
        it('should displayed game filter "Table"', function () {
            expect(loginedUserGamesPage.gamesFilterItem_6).toBeDisplayed();
        });
        it('should displayed game filter "Other"', function () {
            expect(loginedUserGamesPage.gamesFilterItem_7).toBeDisplayed();
        });
    });
    describe('Vendors filter section:',function () {
        it('should displayed vendors filter block', function () {
            expect(loginedUserGamesPage.vendorsFilterBlock).toBeDisplayed();
        });
        it('should displayed vendor filter "Netent"', function () {
            expect(loginedUserGamesPage.vendorsFilter_1).toBeDisplayed();
            expect(loginedUserGamesPage.vendorsFilterIcon_1).toBeDisplayed();
        });
        it('should displayed vendor filter "Microgaming"', function () {
            expect(loginedUserGamesPage.vendorsFilter_2).toBeDisplayed();
            expect(loginedUserGamesPage.vendorsFilterIcon_2).toBeDisplayed();
        });
        it('should displayed vendor filter "Amatic"', function () {
            expect(loginedUserGamesPage.vendorsFilter_3).toBeDisplayed();
            expect(loginedUserGamesPage.vendorsFilterIcon_3).toBeDisplayed();
        });
        it('should displayed vendor filter "Novomatic"', function () {
            expect(loginedUserGamesPage.vendorsFilter_4).toBeDisplayed();
            expect(loginedUserGamesPage.vendorsFilterIcon_4).toBeDisplayed();
        });
        it('should displayed vendor filter "Aristocrat"', function () {
            expect(loginedUserGamesPage.vendorsFilter_5).toBeDisplayed();
            expect(loginedUserGamesPage.vendorsFilterIcon_5).toBeDisplayed();
        });
        it('should displayed vendor filter "Egt"', function () {
            expect(loginedUserGamesPage.vendorsFilter_6).toBeDisplayed();
            expect(loginedUserGamesPage.vendorsFilterIcon_6).toBeDisplayed();
        });
        it('should displayed vendor filter "Igt"', function () {
            expect(loginedUserGamesPage.vendorsFilter_7).toBeDisplayed();
            expect(loginedUserGamesPage.vendorsFilterIcon_7).toBeDisplayed();
        });
        it('should displayed vendor filter "Igrosoft"', function () {
            expect(loginedUserGamesPage.vendorsFilter_8).toBeDisplayed();
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






