'use strict';


let LoginedUserBonusiPage = require('../PageObgects/bonusiPageLogined-objects');
let HeaderFooterLoginedUser = require('../PageObgects/headerFooter-objects.js');
// let Login = require('../Helpers/login-objects.js')
let helpers = require('protractor-helpers');


describe('Bonusi page sections:', function () {
    let bonusiPageLogined = new LoginedUserBonusiPage();
    let headerFooter = new HeaderFooterLoginedUser();
    // let logInHelper = new Login();
    // logInHelper.logIn('p1', '44445678t'); // login to site

    it('get Bonusi page', function () {
        bonusiPageLogined.getBonusiPage();
    });
    describe('Header section:', function () {
        it('should displayed Pravda logo in header', function () {
            expect(headerFooter.headerLogoPravda).toBeDisplayed();
            // browser.sleep(2000);
        });
        it('should present "Base url" link at Pravda logo in header', function () {
            expect(headerFooter.headerLogoPravda.getAttribute('href'))
                .toEqual(browser.baseUrl);
        });
        it('should displayed "Games" button in header', function () {
            expect(headerFooter.headerAllGamesItem).toBeDisplayed();
            // browser.sleep(2000);
        });
        it('should present "/game" link at Game button', function () {
            expect(headerFooter.headerAllGamesItem.getAttribute('href'))
                .toEqual(browser.baseUrl + '/games');
        });
        it('should displayed "Jackpot" button in header', function () {
            expect(headerFooter.headerJackpotItem).toBeDisplayed();
        });
        it('should present INPROGRESS "#" link at Jackpot button', function () {
            expect(headerFooter.headerJackpotItem.getAttribute('href'))
                .toEqual(browser.baseUrl + '/bonus-info#');
        });
        it('should displayed "Kassa" button in header', function () {
            expect(headerFooter.headerKassaItem).toBeDisplayed();
        });
        it('should present "/user/wallets" link in header', function () {
            expect(headerFooter.headerKassaItem.getAttribute('href'))
                .toEqual(browser.baseUrl + "/user/wallets");
        });
        it('should displayed "Bonuses" button in header', function () {
            expect(headerFooter.headerBonusesInfoItem).toBeDisplayed();
        });
        it('should present "/bonus-info" link at Bonuses button in header', function () {
            expect(headerFooter.headerBonusesInfoItem.getAttribute('href'))
                .toEqual(browser.baseUrl + '/bonus-info');
        });
        it('should displayed "Tournaments" button in header', function () {
            expect(headerFooter.headerTournamentsItem).toBeDisplayed();
        });
        it('should present INPROGRESS "#" link at Tournamens button', function () {
            expect(headerFooter.headerTournamentsItem.getAttribute('href'))
                .toEqual(browser.baseUrl + '/bonus-info#');
        });
        it('should displayed logined user name ', function () {
            expect(headerFooter.headerLoginedUserName).toBeDisplayed();
        });
        it('should displayed logined user icon ', function () {
            expect(headerFooter.headerLoginedUserItemIcon).toBeDisplayed();
        });
        it('should presrnt "/user/profile" link at the logined user icon', function () {
            expect(headerFooter.headerLoginedUserItemLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/profile');
        });
        it('should displayed "Wallet" item title', function () {
            expect(headerFooter.headerUserWalletItemTitle).toBeDisplayed();
        });
        it('should displayed User current currency value ', function () {
            expect(headerFooter.headerUserWalletItemCurrentValue).toBeDisplayed();
        });
        it('should displayed "Deposit (make)" title ', function () {
            expect(headerFooter.headerDepositItemTitle).toBeDisplayed();
        });
        it('should displayed "Deposit (make)" icon ', function () {
            expect(headerFooter.headerDepositItemIcon).toBeDisplayed();
        });
        it('should present "/user/deposits/make" link at the deposit(make) item ', function () {
            expect(headerFooter.headerDepositItemLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/user/deposits/make');
        });
        it('should displayed "Bonus (activate)" icon in hesder', function () {
            expect(headerFooter.headerBonusActivateItemIcon).toBeDisplayed();
        });
        it('should displayed "Bonus (activate)" title in hesder', function () {
            expect(headerFooter.headerBonusActivateItemTitle).toBeDisplayed();
        });
        it('should present "/user/activate-bonus" link at bonus item', function () {
            expect(headerFooter.headerBonusActivateItemLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/user/activate-bonus');
        });
        it('should displayed logout item title', function () {
            expect(headerFooter.headerLogOutItemTitle).toBeDisplayed();
        });
        it('should displayed logout item icon', function () {
            expect(headerFooter.headerLogOutItemIcon).toBeDisplayed();
        });
        it('should present "/logout" link at the logout button', function () {
            expect(headerFooter.headerLogOutItemLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/logout');
        });
    });
    describe('Slider section:', function () {
        it('should displayed slider block', function () {
            expect(bonusiPageLogined.sliderBlock).toBeDisplayed();
        });
        it('should displayed left control button', function () {
            expect(bonusiPageLogined.sliderLeftControl).toBeDisplayed();
        });
        it('should displayed right control button', function () {
            expect(bonusiPageLogined.sliderRightControl).toBeDisplayed();
        });
        it('should displayed navigate dot_1', function () {
            expect(bonusiPageLogined.sliderDot_1).toBeDisplayed();
        });
        it('should displayed navigate dot_2', function () {
            expect(bonusiPageLogined.sliderDot_2).toBeDisplayed();
        });
        it('should displayed navigate dot_3', function () {
            expect(bonusiPageLogined.sliderDot_3).toBeDisplayed();
        });
    });
    describe('Our regular Bonusi section elements displayed', function () {
        it('should displayed Title of bonus list ', function () {
            expect(bonusiPageLogined.ourBonusiTitle.isDisplayed()).toBe(true);
        });
        describe('first bonus item:', function () {
            it('should displayed 1st bonus item', function () {
                expect(bonusiPageLogined.bonusiItem1.isDisplayed()).toBe(true);
            });
            it('should displayed Image of 1st bonus item', function () {
                expect(bonusiPageLogined.bonusiItem1Image.isDisplayed()).toBe(true);
            });
            it('should displayed Title of 1st bonus item', function () {
                expect(bonusiPageLogined.bonusiItem1Title.isDisplayed()).toBe(true);
            });
            it('should displayed Describe of 1st bonus item', function () {
                expect(bonusiPageLogined.bonusiItem1Describe.isDisplayed()).toBe(true);
            });
            it('should displayed Deposit button of 1st bonus item', function () {
                expect(bonusiPageLogined.bonusiItem1DepositButton.isDisplayed()).toBe(true);
            });
            it('should displayed "Show" button of 1st bonus item', function () {
                expect(bonusiPageLogined.bonusiItem1ShowButton.isDisplayed()).toBe(true);
            });
        });
        describe('Second bonus item:', function () {
            it('should displayed 2nd bonus item', function () {
                expect(bonusiPageLogined.bonusiItem2.isDisplayed()).toBe(true);
            });
            it('should displayed Image of 2nd bonus item', function () {
                expect(bonusiPageLogined.bonusiItem2Image.isDisplayed()).toBe(true);
            });
            it('should displayed Title of 2nd bonus item', function () {
                expect(bonusiPageLogined.bonusiItem2Title.isDisplayed()).toBe(true);
            });
            it('should displayed Describe of 2nd bonus item', function () {
                expect(bonusiPageLogined.bonusiItem2Describe.isDisplayed()).toBe(true);
            });
            it('should displayed Deposit button of 2nd bonus item', function () {
                expect(bonusiPageLogined.bonusiItem2DepositButton.isDisplayed()).toBe(true);
            });
            it('should displayed "Show" button of 2nd bonus item', function () {
                expect(bonusiPageLogined.bonusiItem2ShowButton.isDisplayed()).toBe(true);
            });
        });
        describe('Third bonus item:', function () {
            it('should displayed 3rd bonus item', function () {
                expect(bonusiPageLogined.bonusiItem3.isDisplayed()).toBe(true);
            });
            it('should displayed Image of 3rd bonus item', function () {
                expect(bonusiPageLogined.bonusiItem3Image.isDisplayed()).toBe(true);
            });
            it('should displayed Title of 3rd bonus item', function () {
                expect(bonusiPageLogined.bonusiItem3Title.isDisplayed()).toBe(true);
            });
            it('should displayed Describe of 3rd bonus item', function () {
                expect(bonusiPageLogined.bonusiItem3Describe.isDisplayed()).toBe(true);
            });
            it('should displayed Deposit button of 3rd bonus item', function () {
                expect(bonusiPageLogined.bonusiItem3DepositButton.isDisplayed()).toBe(true);
            });
            it('should displayed "Show" button of 3rd bonus item', function () {
                expect(bonusiPageLogined.bonusiItem3ShowButton.isDisplayed()).toBe(true);
            });
        });
        describe('Fourth bonus item:', function () {
            it('should displayed 4th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem4.isDisplayed()).toBe(true);
            });
            it('should displayed Image of 4th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem4Image.isDisplayed()).toBe(true);
            });
            it('should displayed Title of 4th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem4Title.isDisplayed()).toBe(true);
            });
            it('should displayed Describe of 4th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem4Describe.isDisplayed()).toBe(true);
            });
            it('should displayed Deposit button of 4th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem4DepositButton.isDisplayed()).toBe(true);
            });
            it('should displayed "Show" button of 4th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem4ShowButton.isDisplayed()).toBe(true);
            });
        });
        describe('Fifth bonus item:', function () {
            it('should displayed 5th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem5.isDisplayed()).toBe(true);
            });
            it('should displayed 5th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem5.isDisplayed()).toBe(true);
            });
            it('should displayed Image of 5th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem5Image.isDisplayed()).toBe(true);
            });
            it('should displayed Title of 5th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem5Title.isDisplayed()).toBe(true);
            });
            it('should displayed Describe of 5th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem5Describe.isDisplayed()).toBe(true);
            });
            it('should displayed Deposit button of 5th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem5DepositButton.isDisplayed()).toBe(true);
            });
            it('should displayed "Show" button of 5th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem4ShowButton.isDisplayed()).toBe(true);
            });
        });
        describe('Sixth bonus item:', function () {
            it('should displayed 6th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem6.isDisplayed()).toBe(true);
            });
            it('should displayed 6th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem6.isDisplayed()).toBe(true);
            });
            it('should displayed Image of 6th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem6Image.isDisplayed()).toBe(true);
            });
            it('should displayed Title of 6th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem6Title.isDisplayed()).toBe(true);
            });
            it('should displayed Describe of 6th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem6Describe.isDisplayed()).toBe(true);
            });
            it('should displayed Deposit button of 6th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem6DepositButton.isDisplayed()).toBe(true);
            });
            it('should displayed "Show" button of 6th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem4ShowButton.isDisplayed()).toBe(true);
            });
        });
        describe('Seventh bonus item:', function () {
            it('should displayed 7th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem7.isDisplayed()).toBe(true);
            });
            it('should displayed 7th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem7.isDisplayed()).toBe(true);
            });
            it('should displayed Image of 7th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem7Image.isDisplayed()).toBe(true);
            });
            it('should displayed Title of 7th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem7Title.isDisplayed()).toBe(true);
            });
            it('should displayed Describe of 7th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem7Describe.isDisplayed()).toBe(true);
            });
            it('should displayed Deposit button of 7th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem7DepositButton.isDisplayed()).toBe(true);
            });
            it('should displayed "Show" button of 7th bonus item', function () {
                expect(bonusiPageLogined.bonusiItem4ShowButton.isDisplayed()).toBe(true);
            });
        });
        it('should displayed 7rd bonus item', function () {
            expect(bonusiPageLogined.bonusiItem7.isDisplayed()).toBe(true);
        });
    });
    describe('Footer section elements:', function () {
        it('should displayed Footer-top block',function () {
            expect(headerFooter.footerTopBlock).toBeDisplayed();
        });
        it('should displayed Footer-bottom block',function () {
            expect(headerFooter.footerBottomBlock).toBeDisplayed();
        });
        it('should displayed footer logo', function () {
            expect(headerFooter.footerLogo).toBeDisplayed();
        });
        it('should displayed "Contacts" item ',function () {
            expect(headerFooter.footerContactsLink).toBeDisplayed();
        });
        it('should present "Contacts"  link',function () {
            expect(headerFooter.footerContactsLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/contacts');
            /*headerFooter.footerContactsLink.getText().then(function (text) {
                console.log(text);
            });
            headerFooter.footerContactsLink.getAttribute('href').then(function (link) {
                console.log(link);
            });*/
        });
        it('should displayed "Methods" item and contain link',function () {
            expect(headerFooter.footerMethodsLink).toBeDisplayed();
            expect(headerFooter.footerMethodsLink.getAttribute('href')).toEqual(browser.baseUrl + '/payment/methods');

            /*headerFooter.footerMethodsLink.getText().then(function (text) {
                console.log(text);
            });
            headerFooter.footerMethodsLink.getAttribute('href').then(function (link) {
                console.log(link);
            });*/
        });
        it('should displayed "Terms" item ',function () {
            expect(headerFooter.footerTermsLink).toBeDisplayed();
        });
        it('should present "/page/terms"  link',function () {
            expect(headerFooter.footerTermsLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/page/terms');
        });
        it('should displayed "Security" item ',function () {
            expect(headerFooter.footerSecurityLink).toBeDisplayed();
        });
        it('should present "/page/security" link',function () {
            expect(headerFooter.footerSecurityLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/page/security');
        });
        it('should displayed "FAQ" item ',function () {
            expect(headerFooter.footerFaqLink).toBeDisplayed();
        });
        it('should present "/page/faq" link',function () {
            expect(headerFooter.footerFaqLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/page/faq');
        });
        it('should displayed "Terms and Conditions" item',function () {
            expect(headerFooter.footerBonusTermsLink).toBeDisplayed();
        });
        it('should present "/page/bonus-terms" link',function () {
            expect(headerFooter.footerBonusTermsLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/page/bonus-terms');
        });
        it('should displayed "Affiliates" item',function () {
            expect(headerFooter.footerAffiliatesLink).toBeDisplayed();
        });
        it('should displayed "https://truthaffiliate.com/" link',function () {
            expect(headerFooter.footerAffiliatesLink.getAttribute('href'))
                .toEqual('https://truthaffiliate.com/');
        });
        it('should displayed Conditions text left block',function () {
            expect(headerFooter.footerConditionsLeftBlock).toBeDisplayed();
        });
        it('should displayed Conditions text right block',function () {
            expect(headerFooter.footerConditionsRightBlock).toBeDisplayed();
        });
        it('should displayed "bonus" link in right block of footer terms',function () {
            expect(headerFooter.footerConditionsRightBlockBonusLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/bonus-info');
        });
        it('should displayed "choise game" link in right block of footer terms',function () {
            expect(headerFooter.footerConditionsRightBlockChoiseGameLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/games');
        });
        it('should displayed "Bitcoin" image ',function () {
            expect(headerFooter.footerBitcoinImage).toBeDisplayed();
        });
        it('should displayed "Cubits" image ',function () {
            expect(headerFooter.footerCubitsImage).toBeDisplayed();
        });
        it('should displayed "Maestro" image ',function () {
            expect(headerFooter.footerMaestroImage).toBeDisplayed();
        });
        it('should displayed "Qiwi wallet" image ',function () {
            expect(headerFooter.footerQiwiWalletImage).toBeDisplayed();
        });
        it('should displayed "Mastercard" image ',function () {
            expect(headerFooter.footerMasterCardImage).toBeDisplayed();
        });
        it('should displayed "Visa" image ',function () {
            expect(headerFooter.footerVisaImage).toBeDisplayed();
        });
        it('should displayed "Wirecard" image ',function () {
            expect(headerFooter.footerWirecardImage).toBeDisplayed();
            /*headerFooter.footerWirecardImage.getAttribute('src').then(function (img) {
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








