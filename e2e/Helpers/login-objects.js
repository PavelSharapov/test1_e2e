'use strict';


/**
 * Objects of Login page for logined user.
 * @constructor
 */
const EC = protractor.ExpectedConditions;
let HeaderFooterLoginedUser = require('../PageObgects/headerFooter-objects.js');
let Login = function () {
    let headerFooterLogined = new HeaderFooterLoginedUser();

    /**
     * Login popup
     */

    this.loginForm = $('.block-login');
    this.loginFormUserNameInput =$('#form_auth #in_user_login');
    this.loginFormPasswordInput =$('#form_auth #in_user_pass');
    this.loginFormLoginButton = $('#btn_auth');


                 /*  Actions block */

    /**
     * Login to site with Username
     */
    this.logIn = function (userName, userPassword) {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        browser.driver.get(browser.baseUrl);
        this.waitForWelcomePageDownload();
        this.loginFormOpen();
        this.loginFormUserNameInput.sendKeys(userName);
        this.loginFormPasswordInput.sendKeys(userPassword);
        this.loginFormloginButtonPress();
        this.waitForMainPageDownloadAfterUserLogIn();
    };
    this.loginFormOpen = function () {
        browser.actions().click(headerFooterLogined.headerLoginButton).perform();
        browser.wait(EC.visibilityOf(this.loginForm), 3000);
    };
    this.loginFormloginButtonPress = function () {
        browser.actions().click(this.loginFormLoginButton).perform();
    };
    this.waitForWelcomePageDownload = function () {
        browser.wait(EC.visibilityOf(headerFooterLogined.headerLogoPravda),5000);
    };
    /**
     * Waiting for Main page download
     */
    this.waitForMainPageDownloadAfterUserLogIn = function () {
        browser.wait(EC.visibilityOf(headerFooterLogined.headerLogoPravda),6000);
        browser.wait(EC.visibilityOf(headerFooterLogined.headerLoginedUserName),6000);
        browser.wait(EC.visibilityOf(headerFooterLogined.headerLoginedUserItemIcon),6000);
    };
};

module.exports = Login;