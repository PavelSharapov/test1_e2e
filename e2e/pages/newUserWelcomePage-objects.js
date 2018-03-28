'use strict';

/**
 * Objects of Welcome page (new user).
 * @constructor
 */

const EC = protractor.ExpectedConditions;
let WelcomePage = function () {

    /**
     *  Header section
     */
    this.headerLogoPravda = $('.main-logo');
    this.headerAllGamesItem = $('#link_casino_games_all');
    this.headerJackpotItem = $('#welcome-lan > header > div > div > div.main-nav > ul > li:nth-child(2) > a');
    this.headerCashboxItem = $('#welcome-lan > header > div > div > div.main-nav > ul > li:nth-child(3) > a');
    this.headerBonusesInfoItem = $('#welcome-lan > header > div > div > div.main-nav > ul > li:nth-child(4) > a');
    this.headerTournamentsItem = $('#welcome-lan > header > div > div > div.main-nav > ul > li:nth-child(5) > a');
    this.headerLoginButton = $('#btn-login');
    this.headerRegisterButton = $('#btn-register');
    this.headerWelcomeBonusButton = $('#btn-bonuses');
    /**
     *  Welcome section
     */
    this.welcomeBlock = $('.welcome-block');
    this.welcomeText = $('.sp-welcom');
    this.welcomeBonusForFirstDepositText = $('.welcome-block h1');
    this.welcomeFirstDepositImage = $('.welcome-block img');
    this.welcomeWantPlayButton = $('.welcome-play');
    /**
     *  Welcome-register section
     */
    this.welcomeRegisterBlock = $('#welcome-register');
    this.welcomeRegisterBlockCube_1 = $('.cube-1');
    this.welcomeRegisterBlockCube_2 = $('.cube-2');
    this.welcomeRegisterBlockCube_3 = $('.cube-3');
    this.welcomeRegisterBlockCube_4 = $('.cube-4');
    this.welcomeRegisterBlockRegistrationTitle = $('.reg-tittle');
    this.welcomeRegisterBlockEmailInput = $('#fos_user_registration_form_email');
    this.welcomeRegisterBlockUserNameInput = $('#fos_user_registration_form_username');
    this.welcomeRegisterBlockPasswordInput = $('#fos_user_registration_form_plainPassword_first');
    this.welcomeRegisterBlockConfirmPasswordInput = $('#fos_user_registration_form_plainPassword_second');
    this.welcomeRegisterBlockCheckBox = $('.my-check.agree-term');
    this.welcomeTermsLink = $ ('.my-check.agree-term span a');
    this.welcomeRegisterBlockRegistrationButton = $ ('.reg-btn');
    /**
     * Our bonuses section
     */
    this.ourBonusesBlock = $('.w-user-bonus');
    this.ourBonusesBlockTitle = $('#welcome-lan > section.w-user-bonus > div > h2');
    this.ourBonusesBlockBonusItem_1 = $('#welcome-lan > section.w-user-bonus > div > div > a:nth-child(1)');
    this.ourBonusesBlockBonusItem_2 = $('#welcome-lan > section.w-user-bonus > div > div > a:nth-child(2)');
    this.ourBonusesBlockBonusItem_3 = $('#welcome-lan > section.w-user-bonus > div > div > a:nth-child(3)');
    // this.ourBonusesBlockBonusItem_4 = $('#welcome-lan > section.w-user-bonus > div > div > a:nth-child(4)');
    this.ourBonusesBlockSlotImage = $('.slot');
    /**
     * Best providers section
     */
    this.bestProvidesBlock = $('.best');
    this.bestProvidesBlockTitle = $('#welcome-lan > section.best > div > h2');
    this.bestProvidesBlockItem_1 = $$('.provider-item').get(0);
    this.bestProvidesBlockItem_2 = $$('.provider-item').get(1);
    this.bestProvidesBlockItem_3 = $$('.provider-item').get(2);
    this.bestProvidesBlockItem_4 = $$('.provider-item').get(3);
    this.bestProvidesBlockItem_5 = $$('.provider-item').get(4);
    this.bestProvidesBlockItem_6 = $$('.provider-item').get(5);
    this.bestProvidesBlockItem_7 = $$('.provider-item').get(6);
    this.bestProvidesBlockItem_8 = $$('.provider-item').get(7);
    /**
     * Want play section
     */
    this.wantPlayBlock = $('.w-whant');
    this.wantPlayArrow = $('.block-whant img');
    this.wantPlayButton = $('.block-whant button');
    this.wantPlayCoin_1 = $('.coin-1');
    this.wantPlayCoin_2 = $('.coin-2');
    this.wantPlayCoin_3 = $('.coin-3');
    this.wantPlayCoin_4 = $('.coin-4');
    this.wantPlayCoin_5 = $('.coin-5');
    this.wantPlayCoin_6 = $('.coin-6');
    /**
     * Footer section
     */
    this.footerTopBlock = $('.footer-top');
    this.footerBottomBlock = $('.footer-bot');
    this.footerLogo = $('.footer-logo #Layer_1_1');
    this.footerContactsLink = $$('footer .foter-link').get(0);
    this.footerMethodsLink = $$('footer .foter-link').get(1);
    this.footerTermsLink = $$('footer .foter-link').get(2);
    this.footerSecurityLink = $$('footer .foter-link').get(3);
    this.footerFaqLink = $$('footer .foter-link').get(4);
    this.footerBonusTermsLink = $$('footer .foter-link').get(5);
    this.footerAffiliatesLink = $$('footer .foter-link').get(6);
    this.footerConditionsLeftBlock = $$('.footer-top .conditions p').get(0);
    this.footerConditionsRightBlock = $$('.footer-top .conditions p').get(1);
    this.footerConditionsRightBlockBonusLink = $$('.footer-top .conditions p a').get(0);
    this.footerConditionsRightBlockChoiseGameLink = $$('.footer-top .conditions p a').get(1);
    this.footerBitcoinImage = $$ ('.footer-bot .block-bot img').get(0);
    this.footerCubitsImage = $$ ('.footer-bot .block-bot img').get(1);
    this.footerMaestroImage = $$ ('.footer-bot .block-bot img').get(2);
    this.footerQiwiWalletImage = $$ ('.footer-bot .block-bot img').get(3);
    this.footerMasterCardImage = $$ ('.footer-bot .block-bot img').get(4);
    this.footerVisaImage = $$ ('.footer-bot .block-bot img').get(5);
    this.footerWirecardImage = $$ ('.footer-bot .block-bot img').get(6);
    this.footerScrollTopButton = $('#scroll-top');
    /**
     * Registration popup
     */
    this.regForm = $('.block-reg');
    this.regFormEmailTab =  $('.tab.lef');
    this.regFormSocialTab = $('.tab.rig');
    this.regFormEmailInput = $('.block-reg #fos_user_registration_form_email');
    this.regFormUserNameInput = $('.block-reg #fos_user_registration_form_username');
    this.regFormPasswordInput = $('.block-reg #fos_user_registration_form_plainPassword_first');
    this.regFormPasswordConfirm = $('.block-reg #fos_user_registration_form_plainPassword_second');
    this.regFormTermsCheckbox = $('#reg_form > label > span.custom-checkbox > span');
    this.regFormSubmitButton = $('#reg_form button');
    this.regFormCloseButton = $('#reg_form #SVGDoc');
    this.regFormSuccess = $ ('.block-success');
    this.regFormSuccessUserEmailText = $('.block-success .user-email');
    this.regFormSuccessCLoseButton = $('.block-success .close-modal')
    /**
     * Login popup
     */
    this.loginForm = $('.block-login');
   /* this.loginFormEmailTab = $ ('.block-login .tab.lef');
    this.loginFormSocialTab = $('.block-login .tab.rig');*/
    this.loginFormUserNameInput =$('#form_auth #in_user_login');
    this.loginFormPasswordInput =$('#form_auth #in_user_pass');
    this.loginFormLoginButton = $('#btn_auth');
    this.forgotPasswordLink = $('.user-forget');
    this.createAccount =$('.user-create');


                 /*  Actions block */

    /**
     * Get Main page
     */

    this.get = function () {
        browser.driver.manage().window().maximize();
        browser.driver.get(browser.baseUrl);
        browser.ignoreSynchronization = true;
        // browser.waitForAngularEnabled(false);

    };
    /**
     * Wait for Welcome page is download
     */
    this.waitForWelcomePageDownload = function () {
        browser.wait(EC.visibilityOf(this.headerLogoPravda),3000)
    };
    /**
     * Jump to the footer
     */
    this.jumpToFooter = function () {

        browser.actions().click(this.footerVisaImage).perform();
    };
    /**
     * Jump to the header
     */
    this.jumpToHeader = function () {
        browser.actions().click(this.footerScrollTopButton).perform();
    };
    /**
     * Registration form actions
     */
    this.regFormOpen = function () {
        browser.actions().click(this.headerRegisterButton).perform();
    };
    this.waitForRegFormOpen = function () {
        browser.wait(EC.visibilityOf(this.regForm),2000);
    };
    this.regFormTermsCheckboxAgree = function () {
        browser.actions().click(this.regFormTermsCheckbox).perform();
    };
    this.regFormSubmitButtonPress = function () {
        browser.actions().click(this.regFormSubmitButton).perform();
    };
    this.waitForRegFormSuccessOpen = function () {
        browser.wait(EC.visibilityOf(this.regFormSuccess),2000);
    };
    this.regFormFillingIn = function () {
        this.userName = 'p'+(Math.round(Math.random()*2000+1500));
        this.email = this.userName + 'autotest' + '@pravda.world';
        this.password = '44445678t';
        this.regFormEmailInput.sendKeys(this.email);
        this.regFormUserNameInput.sendKeys(this.userName);
        this.regFormPasswordInput.sendKeys(this.password);
        this.regFormPasswordConfirm.sendKeys(this.password);
    };
    this.regFormSuccessClose = function () {
        browser.actions().click(this.regFormSuccessCLoseButton).perform();
    };
    /**
     * Login form actions
     */
    this.loginFormOpen = function () {
        browser.actions().click(this.headerLoginButton).perform();
    };
    this.waitForLoginFormOpen = function () {
        browser.wait(EC.visibilityOf(this.loginForm),2000);
    };
    this.loginFormloginButtonPress = function () {
        browser.actions().click(this.loginFormLoginButton).perform();
    };

};

module.exports = WelcomePage;