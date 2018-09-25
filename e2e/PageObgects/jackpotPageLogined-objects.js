'use strict';

/**
 * Objects of Jackpot page for logined user.
 * @constructor
 */
const EC = protractor.ExpectedConditions;
let HeaderFooterLoginedUser = require('.//headerFooter-objects.js');

let LoginedUserJackpotPage = function () {

    /**
     *  Header/footer section
     */

    let headerFooter = new HeaderFooterLoginedUser();

    /**
     * In Progres modal window
     */
    this.inProgresModal = $('.wr-progress.open');


                 /*  Actions block */



    /**
     * Get Jackpot page
     */
    this.getJackpotPage = function () {
        browser.actions().click(headerFooter.headerJackpotItem).perform();
        this.waitForInProgressModalOpen();
    };
    /**
     * Waiting for "In progress" modal is displayed
     */
    this.waitForInProgressModalOpen = function () {
        browser.wait(EC.visibilityOf(this.inProgresModal),6000);
    };

    /**
     * Jump to the footer
     */
    this.jumpToFooter = function () {

        browser.actions().click(headerFooter.footerVisaImage).perform();
    };
    /**
     * Jump to the header
     */
    this.jumpToHeader = function () {
        browser.actions().click(headerFooter.footerScrollTopButton).perform();
        browser.sleep(2000);
    };

};

module.exports = LoginedUserJackpotPage;