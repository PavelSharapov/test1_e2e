'use strict';


let WelcomePage = require('./pages/newUserWelcomePage-objects.js');


describe('Welcome page sections.', function () {
    let welcomePage = new WelcomePage();

    it('should open Welcome page', function () {
        welcomePage.get();
        welcomePage.waitForWelcomePageDownload();
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);
    });
    describe('Header section: ', function () {
        it('should present Pravda logo in header', function () {
            expect(welcomePage.headerLogoPravda.isDisplayed()).toBe(true);
            // browser.sleep(2000);
        });
        it('should present "Games" button in header', function () {
            expect(welcomePage.headerAllGamesItem.isDisplayed()).toBe(true);
            // browser.sleep(2000);
        });
        it('should present "Jackpot" button in header', function () {
            expect(welcomePage.headerJackpotItem.isDisplayed()).toBe(true);
            // browser.sleep(2000);
        });
        it('should present "Wllets" button in header', function () {
            expect(welcomePage.headerCashboxItem.isDisplayed()).toBe(true);
            // browser.sleep(2000);
        });
        it('should present "Bonuses" button in header', function () {
            expect(welcomePage.headerBonusesInfoItem.isDisplayed()).toBe(true);
            // browser.sleep(2000);
        });
        it('should present "Tournaments" button in header', function () {
            expect(welcomePage.headerTournamentsItem.isDisplayed()).toBe(true);
            // browser.sleep(2000);
        });

        it('should present "Login" button in header', function () {
            expect(welcomePage.headerLoginButton.isDisplayed()).toBe(true);
            // browser.sleep(2000);
        });
        it('should present "Registration" button in header', function () {
            expect(welcomePage.headerRegisterButton.isDisplayed()).toBe(true);
            // browser.sleep(2000);
        });
        it('should present "Registration" button in header', function () {
            expect(welcomePage.headerWelcomeBonusButton.isDisplayed()).toBe(true);
            // browser.sleep(2000);
        });
        it('should present Welcome block', function () {
            expect(welcomePage.welcomeBlock.isDisplayed()).toBe(true);
            // browser.sleep(2000);
        });
    });
    describe('Welcome section:', function () {
        it('should present Welcome block', function () {
            expect(welcomePage.welcomeBlock.isDisplayed()).toBe(true);
            // browser.sleep(2000);
        });
        it('should present "WELCOME" text', function () {
            expect(welcomePage.welcomeText.isDisplayed()).toBe(true);
            // browser.sleep(2000);
        });
        it('should present "First deposit bonus" text', function () {
            expect(welcomePage.welcomeBonusForFirstDepositText.isDisplayed()).toBe(true);
        });
        it('should present  "100%"  image', function () {
            expect(welcomePage.welcomeFirstDepositImage.isDisplayed()).toBe(true);
           // browser.sleep(2000);
        });
        it('should present "Want play" button', function () {
            expect(welcomePage.welcomeWantPlayButton.isDisplayed()).toBe(true);
            // browser.sleep(2000);
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
        it('"Bonus item 2" should displayed',function () {
            expect(welcomePage.ourBonusesBlockBonusItem_2.isDisplayed()).toBe(true);

        });
        it('"Bonus item 3" should displayed',function () {
            expect(welcomePage.ourBonusesBlockBonusItem_3.isDisplayed()).toBe(true);
        });
        /*it('"Bonus item 4" should displayed',function () {
            expect(welcomePage.c.isDisplayed()).toBe(true);
        });*/
        it('Should displayed Slot picture ',function () {
            expect(welcomePage.ourBonusesBlockSlotImage.isDisplayed()).toBe(true);
        });
    });
    describe('Best providers section:',function () {
        it('Best providers block should present', function () {
            expect(welcomePage.bestProvidesBlock.isDisplayed()).toBe(true);
        });
        it('Best providers block title should present',function () {
            expect(welcomePage.bestProvidesBlockTitle.isDisplayed()).toBe(true);
        });
        it('should displayed Best provider item 1 ',function () {
            expect(welcomePage.bestProvidesBlockItem_1.isDisplayed()).toBe(true);
            expect(welcomePage.bestProvidesBlockItem_1.getAttribute('href'))
                .toEqual(browser.baseUrl + '/games/netent');
            /*welcomePage.bestProvidesBlockItem_1.getText().then(function (providerName) {
                console.log(providerName);
            });*/
        });
        it('should displayed Best provider item 2 ',function () {
            expect(welcomePage.bestProvidesBlockItem_2.isDisplayed()).toBe(true);
            expect(welcomePage.bestProvidesBlockItem_2.getAttribute('href'))
                .toEqual(browser.baseUrl + '/games/microgaming');
        });
        it('should displayed Best provider item 3 ',function () {
            expect(welcomePage.bestProvidesBlockItem_3.isDisplayed()).toBe(true);
            expect(welcomePage.bestProvidesBlockItem_3.getAttribute('href'))
                .toEqual(browser.baseUrl + '/games/amatic');
        });
        it('should displayed Best provider item 4 ',function () {
            expect(welcomePage.bestProvidesBlockItem_4.isDisplayed()).toBe(true);
            expect(welcomePage.bestProvidesBlockItem_4.getAttribute('href'))
                .toEqual(browser.baseUrl + '/games/novomatic');
        });
        it('should displayed Best provider item 5 ',function () {
            expect(welcomePage.bestProvidesBlockItem_5.isDisplayed()).toBe(true);
            expect(welcomePage.bestProvidesBlockItem_5.getAttribute('href'))
                .toEqual(browser.baseUrl + '/games/aristocrat');
        });
        it('should displayed Best provider item 6 ',function () {
            expect(welcomePage.bestProvidesBlockItem_6.isDisplayed()).toBe(true);
            expect(welcomePage.bestProvidesBlockItem_6.getAttribute('href'))
                .toEqual(browser.baseUrl + '/games/egt');
        });
        it('should displayed Best provider item 7 ',function () {
            expect(welcomePage.bestProvidesBlockItem_7.isDisplayed()).toBe(true);
            expect(welcomePage.bestProvidesBlockItem_7.getAttribute('href'))
                .toEqual(browser.baseUrl + '/games/igt');
        });
        it('should displayed Best provider item 8 ',function () {
            expect(welcomePage.bestProvidesBlockItem_8.isDisplayed()).toBe(true);
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
           /*welcomePage.wantPlayArrow.isDisplayed().then(function (state) {
                console.log(state);
            });*/
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
            expect(welcomePage.footerTopBlock.isDisplayed()).toBe(true);
        });
        it('should displayed Footer-bottom block',function () {
            expect(welcomePage.footerBottomBlock.isDisplayed()).toBe(true);
        });
        it('should displayed footer logo', function () {
            expect(welcomePage.footerLogo.isDisplayed()).toBe(true);
        });
        it('should displayed "Contacts" item and contain link',function () {
            expect(welcomePage.footerContactsLink.isDisplayed()).toBe(true);
            expect(welcomePage.footerContactsLink.getAttribute('href')).toEqual(browser.baseUrl + '/contacts');
            /*welcomePage.footerContactsLink.getText().then(function (text) {
                console.log(text);
            });
            welcomePage.footerContactsLink.getAttribute('href').then(function (link) {
                console.log(link);
            });*/
        });
        it('should displayed "Methods" item and contain link',function () {
            expect(welcomePage.footerMethodsLink.isDisplayed()).toBe(true);
            expect(welcomePage.footerMethodsLink.getAttribute('href')).toEqual(browser.baseUrl + '/payment/methods');

            /*welcomePage.footerMethodsLink.getText().then(function (text) {
                console.log(text);
            });
            welcomePage.footerMethodsLink.getAttribute('href').then(function (link) {
                console.log(link);
            });*/
        });
        it('should displayed "Terms" item and contain link',function () {
            expect(welcomePage.footerTermsLink.isDisplayed()).toBe(true);
            expect(welcomePage.footerTermsLink.getAttribute('href')).toEqual(browser.baseUrl + '/page/terms');
        });
        it('should displayed "Security" item and contain link',function () {
            expect(welcomePage.footerSecurityLink.isDisplayed()).toBe(true);
            expect(welcomePage.footerSecurityLink.getAttribute('href')).toEqual(browser.baseUrl + '/page/security');
        });
        it('should displayed "FAQ" item and contain link',function () {
            expect(welcomePage.footerFaqLink.isDisplayed()).toBe(true);
            expect(welcomePage.footerFaqLink.getAttribute('href')).toEqual(browser.baseUrl + '/page/faq');
        });
        it('should displayed "Terms and Conditions" item and contain link',function () {
            expect(welcomePage.footerBonusTermsLink.isDisplayed()).toBe(true);
            expect(welcomePage.footerBonusTermsLink.getAttribute('href')).toEqual(browser.baseUrl + '/page/bonus-terms');
        });
        it('should displayed "Affiliates" item and contain link',function () {
            expect(welcomePage.footerAffiliatesLink.isDisplayed()).toBe(true);
            expect(welcomePage.footerAffiliatesLink.getAttribute('href')).toEqual('https://truthaffiliate.com/');
        });
        it('should displayed Conditions text left block',function () {
            expect(welcomePage.footerConditionsLeftBlock.isDisplayed()).toBe(true);
        });
        it('should displayed Conditions text right block and contain "/bonus" and "games" links',function () {
            expect(welcomePage.footerConditionsRightBlock.isDisplayed()).toBe(true);
        });
        it('should displayed "Bonus" link in right block of footer terms "/bonus" and "games" links',function () {
            expect(welcomePage.footerConditionsRightBlockBonusLink.getAttribute('href')).toEqual(browser.baseUrl + '/page/inprogres');
        });
        it('should displayed "Bonus" link in right block of footer terms "/bonus" and "games" links',function () {
            expect(welcomePage.footerConditionsRightBlockChoiseGameLink.getAttribute('href')).toEqual(browser.baseUrl + '/games');
        });
        it('should displayed "Bitcoin" image ',function () {
            expect(welcomePage.footerBitcoinImage.isDisplayed()).toBe(true);
        });
        it('should displayed "Cubits" image ',function () {
            expect(welcomePage.footerCubitsImage.isDisplayed()).toBe(true);
        });
        it('should displayed "Maestro" image ',function () {
            expect(welcomePage.footerMaestroImage.isDisplayed()).toBe(true);
        });
        it('should displayed "Qiwi wallet" image ',function () {
            expect(welcomePage.footerQiwiWalletImage.isDisplayed()).toBe(true);
        });
        it('should displayed "Mastercard" image ',function () {
            expect(welcomePage.footerMasterCardImage.isDisplayed()).toBe(true);
        });
        it('should displayed "Visa" image ',function () {
            expect(welcomePage.footerVisaImage.isDisplayed()).toBe(true);
        });
        it('should displayed "Wirecard" image ',function () {
            expect(welcomePage.footerWirecardImage.isDisplayed()).toBe(true);
            /*welcomePage.footerWirecardImage.getAttribute('src').then(function (img) {
                console.log(img);
            });*/
        });
        it('should displayed scroll-top buton',function () {
            welcomePage.jumpToFooter();
            expect(welcomePage.footerScrollTopButton.isDisplayed()).toBe(true);
            welcomePage.jumpToHeader();
        });
    });
});








