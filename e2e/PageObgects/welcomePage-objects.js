'use strict';

/**
 * Objects of Welcome page (new user).
 * @constructor
 */

const EC = protractor.ExpectedConditions;
let HeaderFooterLoginedUser = require('./headerFooter-objects.js');
let WelcomePage = function () {

    /**
     *  Header/footer section
     */
    let headerFooterLogined = new HeaderFooterLoginedUser();

    /**
     *  Welcome landing section
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
    this.welcomeRegisterBlockRegistrationButton = $ ('.reg-btn.disbled');
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



                 /*  Actions block */

    /**
     * Get Main page
     */

    this.get = function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        browser.driver.get(browser.baseUrl);
        // browser.waitForAngularEnabled(false);
        this.waitForWelcomePageDownload();


    };
    /**
     * Wait for Welcome page is download
     */
    this.waitForWelcomePageDownload = function () {
        browser.wait(EC.visibilityOf(headerFooterLogined.headerLogoPravda),6000)
    };
    /**
     * Jump to the footer
     */
    this.jumpToFooter = function () {
        browser.actions().click(headerFooterLogined.footerVisaImage).perform();
    };
    /**
     * Jump to the header
     */
    this.jumpToHeader = function () {
        browser.actions().click(headerFooterLogined.footerScrollTopButton).perform();
        browser.wait(EC.visibilityOf(headerFooterLogined.headerLogoPravda),4000);
    };
};

module.exports = WelcomePage;