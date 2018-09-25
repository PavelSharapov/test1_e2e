'use strict';

/**
 * Objects of Wallets page for logined user.
 * @constructor
 */
const EC = protractor.ExpectedConditions;
let HeaderFooterLoginedUser = require('.//headerFooter-objects.js');

 let LoginedUserKassaPage = function () {


     /**
      *  Header/footer section
      */

     let headerFooter = new HeaderFooterLoginedUser();

    /**
     *  Profile nav section
     */

    /**
     *   Kassa section
     */
    this.kassaTable = $('.cassa-page');
    this.kassaTableColumn1Title = $('.table-scrollable .heading th:nth-child(1)');
    this.kassaTableColumn2Title = $('.table-scrollable .heading th:nth-child(2)');
    this.kassaTableColumn3Title = $('.table-scrollable .heading th:nth-child(3)');
    this.kassaTableColumn4Title = $('.table-scrollable .heading th:nth-child(4)');
    this.kassaTableColumn5Title = $('.table-scrollable .heading th:nth-child(5)');


                               /*  Actions block */


    /**
     * Get Kassa page
     */
    this.getKassaPage = function () {
        browser.actions().click(headerFooter.headerKassaItem).perform();
        this.waitForKassaPageOpen();
    };
    /**
     * Waiting for "Kassa" page download
     */
    this.waitForKassaPageOpen = function () {
        browser.wait(EC.visibilityOf(this.kassaTable),6000);
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
    };

};

module.exports = LoginedUserKassaPage;