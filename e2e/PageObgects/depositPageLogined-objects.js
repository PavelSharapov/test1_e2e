'use strict';

/**
 * Objects of Deposit page for logined user.
 * @constructor
 */
    const EC = protractor.ExpectedConditions;
    const HeaderFooterLoginedUser = require('./headerFooter-objects');
    // const LoginedUserProfilePage = require('./profilePageLogined-objects');
    const LoginedUserDepositMakePage = function () {


        /**
         *  Header/footer section
         */

         let headerFooter = new HeaderFooterLoginedUser();


        /**
         *  Deposit pay-way block
         */
        this.depositPageTitle = $('.page-tittle');
        this.payWayBlock = $('.wr-pay-way');
        this.cubitsItem = $('.p-block.Cubits');
        this.visaItem = $('.p-block.Visa');
        this.perfectmoneyItem = $('.p-block.Perfectmoney');
        this.qiwiItem = $('.p-block.Qiwi');
        this.yamoneyItem = $('.p-block.Yamoney');
        this.terminalItem = $('.p-block.Terminal');
        this.payeerItem = $('.p-block.Payeer');
        this.alfaclickItem = $('.p-block.Alfaclick');
        this.megafonItem = $('.p-block.Megafon');
        this.mtsItem = $('.p-block.MTS');
        this.beelineItem = $('.p-block.Beeline');
        this.tele2Item = $('.p-block.Tele2');

        /**
         *  Deposit history table block
         */
        this.depositHistoryTableName = $('.table-heading');
        this.depositHistoryTable = $('#grid_id');
        this.depositHistoryTableColumn1 = $('.table-scrollable .heading th:nth-child(1)');
        this.depositHistoryTableColumn2 = $('.table-scrollable .heading th:nth-child(2)');
        this.depositHistoryTableColumn3 = $('.table-scrollable .heading th:nth-child(3)');
        this.depositHistoryTableColumn4 = $('.table-scrollable .heading th:nth-child(4)');
        this.depositHistoryTableColumn5 = $('.table-scrollable .heading th:nth-child(5)');
        this.allDepositsButton = $('.all-deposits');








    /*  Actions block */


    /**
     * Get Deposit page
     */
    this.getDepositPage = function () {
        browser.actions().click(headerFooter.headerDepositItemLink).perform();
        browser.wait(EC.visibilityOf(this.payWayBlock),6000);
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

module.exports = LoginedUserDepositMakePage;