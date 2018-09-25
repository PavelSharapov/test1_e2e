'use strict';


/**
 * Objects of Registration to site.
 * @constructor
 */
const EC = protractor.ExpectedConditions;
let HeaderFooterLoginedUser = require('../PageObgects/headerFooter-objects.js');
let Registration = function () {
    let headerFooter = new HeaderFooterLoginedUser();

    /**
     * Registration popup
     */

    this.regForm = $('.block-reg');
    this.regFormEmailInput = $('.block-reg #fos_user_registration_form_email');
    this.regFormUserNameInput = $('.block-reg #fos_user_registration_form_username');
    this.regFormPasswordInput = $('.block-reg #fos_user_registration_form_plainPassword_first');
    this.regFormPasswordConfirm = $('.block-reg #fos_user_registration_form_plainPassword_second');
    this.regFormTermsCheckbox = $('#reg_form > label > span.custom-checkbox > span');
    this.regFormSubmitButton = $('#reg_form button');
    this.regFormSuccess = $ ('.block-success');
    this.regFormSuccessUserEmailText = $('.block-success .user-email');
    this.regFormSuccessCLoseButton = $('.block-success .close-modal');


                                 /*  Actions block */

    /**
     * Registration form actions
     */
    this.regFormOpen = function () {
        browser.actions().click(headerFooter.headerRegisterButton).perform();
        this.waitForRegFormOpen();
    };
    this.waitForRegFormOpen = function () {
        browser.wait(EC.visibilityOf(this.regForm), 2000);
    };
    this.regFormFillingIn = function () {
        let userName = 'p' + (Math.round(Math.random() * 2000 + 1500));
        this.email = userName + 'autotest' + '@pravda.world';
        let password = '44445678t';
        this.regFormEmailInput.sendKeys(this.email);
        this.regFormUserNameInput.sendKeys(userName);
        this.regFormPasswordInput.sendKeys(password);
        this.regFormPasswordConfirm.sendKeys(password);
        this.regFormTermsCheckboxAgree();
        this.regFormSubmitButtonPress();
        this.waitForSuccsesPopupOpen();

    };
    this.regFormTermsCheckboxAgree = function () {
        browser.actions().click(this.regFormTermsCheckbox).perform();
    };
    this.regFormSubmitButtonPress = function () {
        browser.actions().click(this.regFormSubmitButton).perform();
    };
    this.waitForSuccsesPopupOpen = function () {
        browser.wait(EC.visibilityOf(this.regFormSuccess), 2000);
    };
    this.regFormSuccessClose = function () {
        browser.actions().click(this.regFormSuccessCLoseButton).perform();
    };
};

module.exports = Registration;