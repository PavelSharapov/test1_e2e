'use strict';


let WelcomePage = require('./PageObgects/welcomePage-objects.js');
let HeaderFooterLoginedUser = require('./PageObgects/headerFooter-objects.js');


describe('Welcome page sections.', function () {
    let welcomePage = new WelcomePage();
    let headerFooter = new HeaderFooterLoginedUser();

    it('should open Welcome page', function () {
        welcomePage.get();
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);
    });
    describe('Header section: ', function () {
        it('should displayed Pravda logo in header', function () {
            expect(headerFooter.headerLogoPravda.isDisplayed()).toBe(true);
        });
        it('should present "Base url" link at Pravda logo in header ', function () {
            expect(headerFooter.headerLogoPravda.getAttribute('href'))
                .toEqual(browser.baseUrl);
        });
        it('should displayed "Games" button in header', function () {
            expect(headerFooter.headerAllGamesItem.isDisplayed()).toBe(true);
        });
        it('should present "/games" link at Game button ', function () {
            expect(headerFooter.headerAllGamesItem.getAttribute('href'))
                .toEqual(browser.baseUrl + '/games');
        });
        it('should displayed "Jackpot" button in header', function () {
            expect(headerFooter.headerJackpotItem.isDisplayed()).toBe(true);
        });
        it('should present INPROGRESS "/#" link at Jackpot button ', function () {
            expect(headerFooter.headerJackpotItem.getAttribute('href'))
                .toEqual(browser.baseUrl + '#');
        });
        it('should displayed "Wallets" button in header', function () {
            expect(headerFooter.headerKassaItem.isDisplayed()).toBe(true);
        });
        it('should present "/user/wallets" link at Wallets button  ', function () {
            expect(headerFooter.headerKassaItem.getAttribute('href'))
                .toEqual(browser.baseUrl + '/user/wallets');
        });
        it('should displayed "Bonuses" button in header', function () {
            expect(headerFooter.headerBonusesInfoItem.isDisplayed()).toBe(true);
        });
        it('should present "/bonus-info" link at Bonuses button ', function () {
            expect(headerFooter.headerBonusesInfoItem.getAttribute('href'))
                .toEqual(browser.baseUrl + '/bonus-info');
        });
        it('should displayed "Tournaments" button in header', function () {
            expect(headerFooter.headerTournamentsItem.isDisplayed()).toBe(true);
        });
        it('should present INPROGRESS "/#" link at Tournamens button', function () {
            expect(headerFooter.headerTournamentsItem.getAttribute('href'))
                .toEqual(browser.baseUrl + '#');
        });
        it('should displayed "Login" button in header', function () {
            expect(headerFooter.headerLoginButton.isDisplayed()).toBe(true);
        });
        it('should displayed subtext on Login button in header', function () {
            expect(headerFooter.headerLoginButtonSubText.isDisplayed()).toBe(true);
        });
        it('should displayed "Registration" button in header', function () {
            expect(headerFooter.headerRegisterButton.isDisplayed()).toBe(true);
        });
        it('should displayed "Welcome bonus" button in header', function () {
            expect(headerFooter.headerWelcomeBonusButton.isDisplayed()).toBe(true);
        });
    });
    describe('Welcome landing section:', function () {
        it('should displayed Welcome block', function () {
            expect(welcomePage.welcomeBlock.isDisplayed()).toBe(true);
        });
        it('should displayed "WELCOME" text', function () {
            expect(welcomePage.welcomeText.isDisplayed()).toBe(true);
        });
        it('should displayed "First deposit bonus" text', function () {
            expect(welcomePage.welcomeBonusForFirstDepositText.isDisplayed()).toBe(true);
        });
        it('should displayed  "100%"  image', function () {
            expect(welcomePage.welcomeFirstDepositImage.isDisplayed()).toBe(true);
        });
        it('should displayed "Want play" button', function () {
            expect(welcomePage.welcomeWantPlayButton.isDisplayed()).toBe(true);
        });
    });
    describe('Register section:', function () {
        it('register block is displayed',function () {
            expect(welcomePage.welcomeRegisterBlock.isDisplayed()).toBe(true);
        });
        it('cube-1 should displayed',function () {
            expect(welcomePage.welcomeRegisterBlockCube_1.isDisplayed()).toBe(true);
        });
        it('cube-2 should displayed',function () {
            expect(welcomePage.welcomeRegisterBlockCube_2.isDisplayed()).toBe(true);
        });
        it('cube-3 should displayed',function () {
            expect(welcomePage.welcomeRegisterBlockCube_3.isDisplayed()).toBe(true);
        });
        it('cube-4 should displayed',function () {
            expect(welcomePage.welcomeRegisterBlockCube_4.isDisplayed()).toBe(true);
        });
        it('should displayed "Registration" title',function () {
             expect(welcomePage.welcomeRegisterBlockRegistrationTitle.isDisplayed()).toBe(true);
        });
        it('should displayed "Email" input',function () {
             expect(welcomePage.welcomeRegisterBlockEmailInput.isDisplayed()).toBe(true);
        });
        it('should displayed "Username" input',function () {
            expect(welcomePage.welcomeRegisterBlockUserNameInput.isDisplayed()).toBe(true);
        });
        it('should displayed "Password" input',function () {
            expect(welcomePage.welcomeRegisterBlockPasswordInput.isDisplayed()).toBe(true);
        });
        it('should displayed "Confirm password" input',function () {
            expect(welcomePage.welcomeRegisterBlockConfirmPasswordInput.isDisplayed()).toBe(true);
        });
        it('should displayed Agreement checkbox',function () {
            expect(welcomePage.welcomeRegisterBlockCheckBox.isDisplayed()).toBe(true);
        });
        it('should displayed Terms and conditions link',function () {
            expect(welcomePage.welcomeTermsLink.isDisplayed()).toBe(true);
        });
        it('should present "/page/terms" link ', function () {
            expect(welcomePage.welcomeTermsLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/page/terms');
        });
        it('should displayed "Registration" button',function () {
            expect(welcomePage.welcomeRegisterBlockRegistrationButton.isDisplayed()).toBe(true);
        });
    });
    describe('Our bonuses section:',function () {
        it('Our bonuses block should displayed',function () {
           expect(welcomePage.ourBonusesBlock.isDisplayed()).toBe(true);
        });
        it('Our bonuses block title should displayed',function () {
            expect(welcomePage.ourBonusesBlockTitle.isDisplayed()).toBe(true);
        });
        it('"Bonus item 1" should displayed',function () {
            expect(welcomePage.ourBonusesBlockBonusItem_1.isDisplayed()).toBe(true);
           /* welcomePage.ourBonusesBlockBonusItem_1.getText().then(function (text) {
                console.log (text);
            });*/
        });
        it('should present "/bonus-info" link at Bonus item 1 ', function () {
            expect(welcomePage.ourBonusesBlockBonusItem_1.getAttribute('href'))
                .toEqual(browser.baseUrl + '/bonus-info');
        });
        it('"Bonus item 2" should displayed',function () {
            expect(welcomePage.ourBonusesBlockBonusItem_2.isDisplayed()).toBe(true);
        });
        it('should present "/bonus-info" link at Bonus item 2 ', function () {
            expect(welcomePage.ourBonusesBlockBonusItem_2.getAttribute('href'))
                .toEqual(browser.baseUrl + '/bonus-info');
        });
        it('"Bonus item 3" should displayed',function () {
            expect(welcomePage.ourBonusesBlockBonusItem_3.isDisplayed()).toBe(true);
        });
        it('should present "/bonus-info" link at Bonus item 3 ', function () {
            expect(welcomePage.ourBonusesBlockBonusItem_3.getAttribute('href'))
                .toEqual(browser.baseUrl + '/bonus-info');
        });
        /*it('"Bonus item 4" should displayed',function () {
            expect(welcomePage.c.isDisplayed()).toBe(true);
        });*/
        it('Should displayed Slot picture ',function () {
            expect(welcomePage.ourBonusesBlockSlotImage.isDisplayed()).toBe(true);
        });
    });
    describe('Best providers section:',function () {
        it('Best providers block should displayed', function () {
            expect(welcomePage.bestProvidesBlock.isDisplayed()).toBe(true);
        });
        it('Best providers block title should displayed',function () {
            expect(welcomePage.bestProvidesBlockTitle.isDisplayed()).toBe(true);
        });
        it('should displayed Best provider item 1 ',function () {
            expect(welcomePage.bestProvidesBlockItem_1.isDisplayed()).toBe(true);
        });
        it('should present "/games/netent" link at provider item 1 ', function () {
            expect(welcomePage.bestProvidesBlockItem_1.getAttribute('href'))
                .toEqual(browser.baseUrl + '/games/netent');
            /*welcomePage.bestProvidesBlockItem_1.getText().then(function (providerName) {
                console.log(providerName);
            });*/
        });
        it('should displayed Best provider item 2 ',function () {
            expect(welcomePage.bestProvidesBlockItem_2.isDisplayed()).toBe(true);
        });
        it('should present "/games/microgaming" link at provider item 2 ', function () {
            expect(welcomePage.bestProvidesBlockItem_2.getAttribute('href'))
                .toEqual(browser.baseUrl + '/games/microgaming');
        });
        it('should displayed Best provider item 3 ',function () {
            expect(welcomePage.bestProvidesBlockItem_3.isDisplayed()).toBe(true);
        });
        it('should present "/games/amatic" link at provider item 3 ', function () {
            expect(welcomePage.bestProvidesBlockItem_3.getAttribute('href'))
                .toEqual(browser.baseUrl + '/games/amatic');
        });
        it('should displayed Best provider item 4 ',function () {
            expect(welcomePage.bestProvidesBlockItem_4.isDisplayed()).toBe(true);
        });
        it('should present "/games/novomatic" link at provider item 4 ', function () {
            expect(welcomePage.bestProvidesBlockItem_4.getAttribute('href'))
                .toEqual(browser.baseUrl + '/games/novomatic');
        });
        it('should displayed Best provider item 5 ',function () {
            expect(welcomePage.bestProvidesBlockItem_5.isDisplayed()).toBe(true);
        });
        it('should present "/games/aristocrat" link at provider item 5 ', function () {
            expect(welcomePage.bestProvidesBlockItem_5.getAttribute('href'))
                .toEqual(browser.baseUrl + '/games/aristocrat');
        });
        it('should displayed Best provider item 6 ',function () {
            expect(welcomePage.bestProvidesBlockItem_6.isDisplayed()).toBe(true);
        });
        it('should present "/games/egt" link at provider item 6 ', function () {
            expect(welcomePage.bestProvidesBlockItem_6.getAttribute('href'))
                .toEqual(browser.baseUrl + '/games/egt');
        });
        it('should displayed Best provider item 7 ',function () {
            expect(welcomePage.bestProvidesBlockItem_7.isDisplayed()).toBe(true);
        });
        it('should present "/games/igt" link at provider item 7 ', function () {
            expect(welcomePage.bestProvidesBlockItem_7.getAttribute('href'))
                .toEqual(browser.baseUrl + '/games/igt');
        });
        it('should displayed Best provider item 8 ',function () {
            expect(welcomePage.bestProvidesBlockItem_8.isDisplayed()).toBe(true);
        });
        it('should present "/games/igt" link at provider item 8 ', function () {
            expect(welcomePage.bestProvidesBlockItem_8.getAttribute('href'))
                .toEqual(browser.baseUrl + '/games/igrosoft');
        });
    });
    describe('"Want to play" section:', function () {
        it('should displayed w-whant block', function () {
           expect(welcomePage.wantPlayBlock.isDisplayed()).toBe(true);
        });
        it('should displayed want play block arrow', function () {
           expect(welcomePage.wantPlayArrow.isDisplayed()).toBe(true);
        });
        it('should displayed "Want play" button', function () {
           expect(welcomePage.wantPlayButton.isDisplayed()).toBe(true);
        });
        it('coin_1 should displayed', function () {
            expect(welcomePage.wantPlayCoin_1.isDisplayed()).toBe(true);
        });
        it('coin_2 should displayed', function () {
            expect(welcomePage.wantPlayCoin_2.isDisplayed()).toBe(true);
        });
        it('coin_3 should displayed', function () {
            expect(welcomePage.wantPlayCoin_3.isDisplayed()).toBe(true);
        });
        it('coin_4 should displayed', function () {
            expect(welcomePage.wantPlayCoin_4.isDisplayed()).toBe(true);
        });
        it('coin_5 should displayed', function () {
            expect(welcomePage.wantPlayCoin_5.isDisplayed()).toBe(true);
        });
        it('coin_6 should displayed', function () {
            expect(welcomePage.wantPlayCoin_6.isDisplayed()).toBe(true);
        });
    });
    describe('Footer section:', function () {
        it('should displayed Footer-top block',function () {
            expect(headerFooter.footerTopBlock.isDisplayed()).toBe(true);
        });
        it('should displayed Footer-bottom block',function () {
            expect(headerFooter.footerBottomBlock.isDisplayed()).toBe(true);
        });
        it('should displayed footer logo', function () {
            expect(headerFooter.footerLogo.isDisplayed()).toBe(true);
        });
        it('should displayed "Contacts" item ',function () {
            expect(headerFooter.footerContactsLink.isDisplayed()).toBe(true);
        });
        it('should present "/contacts" link at Contacts item ', function () {
            expect(headerFooter.footerContactsLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/contacts');
        });
        it('should displayed "Methods" item ',function () {
            expect(headerFooter.footerMethodsLink.isDisplayed()).toBe(true);
        });
        it('should present "/payment/methods" link at Methods item ', function () {
            expect(headerFooter.footerMethodsLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/payment/methods');
        });
        it('should displayed "Terms" item ',function () {
            expect(headerFooter.footerTermsLink.isDisplayed()).toBe(true);
        });
        it('should present "/page/terms" link at Terms item ', function () {
            expect(headerFooter.footerTermsLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/page/terms');
        });
        it('should displayed "Security" item ',function () {
            expect(headerFooter.footerSecurityLink.isDisplayed()).toBe(true);
        });
        it('should present "/page/security" link at Security item ', function () {
            expect(headerFooter.footerSecurityLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/page/security');
        });
        it('should displayed "FAQ" item ',function () {
            expect(headerFooter.footerFaqLink.isDisplayed()).toBe(true);
        });
        it('should present "/page/faq" link at Faq item ', function () {
            expect(headerFooter.footerFaqLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/page/faq');
        });
        it('should displayed "Terms and Conditions" item ',function () {
            expect(headerFooter.footerBonusTermsLink.isDisplayed()).toBe(true);
        });
        it('should present "/page/bonus-terms" link at Terms and Conditions item ', function () {
            expect(headerFooter.footerBonusTermsLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/page/bonus-terms');
        });
        it('should displayed "Affiliates" item and contain link',function () {
            expect(headerFooter.footerAffiliatesLink.isDisplayed()).toBe(true);
        });
        it('should present "https://truthaffiliate.com/" link at Affiliates item ', function () {
            expect(headerFooter.footerAffiliatesLink.getAttribute('href'))
                .toEqual('https://truthaffiliate.com/');
        });
        it('should displayed Conditions text left block',function () {
            expect(headerFooter.footerConditionsLeftBlock.isDisplayed()).toBe(true);
        });
        it('should displayed Conditions text right block',function () {
            expect(headerFooter.footerConditionsRightBlock.isDisplayed()).toBe(true);
        });
        it('should displayed "/bonus" link in the Conditions text right block ',function () {
            expect(headerFooter.footerConditionsRightBlockBonusLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/bonus-info');
        });
        it('should displayed "/games" link in the Conditions text right block',function () {
            expect(headerFooter.footerConditionsRightBlockChoiseGameLink.getAttribute('href'))
                .toEqual(browser.baseUrl + '/games');
        });
        it('should displayed "Bitcoin" image ',function () {
            expect(headerFooter.footerBitcoinImage.isDisplayed()).toBe(true);
        });
        it('should displayed "Cubits" image ',function () {
            expect(headerFooter.footerCubitsImage.isDisplayed()).toBe(true);
        });
        it('should displayed "Maestro" image ',function () {
            expect(headerFooter.footerMaestroImage.isDisplayed()).toBe(true);
        });
        it('should displayed "Qiwi wallet" image ',function () {
            expect(headerFooter.footerQiwiWalletImage.isDisplayed()).toBe(true);
        });
        it('should displayed "Mastercard" image ',function () {
            expect(headerFooter.footerMasterCardImage.isDisplayed()).toBe(true);
        });
        it('should displayed "Visa" image ',function () {
            expect(headerFooter.footerVisaImage.isDisplayed()).toBe(true);
        });
        it('should displayed "Wirecard" image ',function () {
            expect(headerFooter.footerWirecardImage.isDisplayed()).toBe(true);
            /*headerFooter.footerWirecardImage.getAttribute('src').then(function (img) {
                console.log(img);
            });*/
        });
        it('should displayed scroll-top buton',function () {
            headerFooter.jumpToFooter();
            expect(headerFooter.footerScrollTopButton.isDisplayed()).toBe(true);

        });
    });
});









