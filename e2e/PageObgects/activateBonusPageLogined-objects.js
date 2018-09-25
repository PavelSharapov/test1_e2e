'use strict';

/**
 * Objects of Deposit page for logined user.
 * @constructor
 */
    const EC = protractor.ExpectedConditions;
    const HeaderFooterLoginedUser = require('./headerFooter-objects');
    // const LoginedUserProfilePage = require('./profilePageLogined-objects');
    const LoginedUserActivateBonusPage = function () {


        /**
         *  Header/footer section
         */

         let headerFooter = new HeaderFooterLoginedUser();

        /**
         *  Profile nav section
         */

        // Used LoginedUserProfilePage-object in spec

        /**
         *  "Activate bonus" section
         */
        this.activateBonusPageTitle = $('h1.page-tittle');
        this.activateBonusBlockTitle = $('.form-get-bonuses h4:nth-child(1)');
        this.activateBonusBlock = $('.form-get-bonuses');
        this.bonusChooseInputLabel = $('#bonusform > div:nth-child(1) > label');
        this.bonusChooseInput = $('#bonusform_bonus');
        this.bonusAmounthChooseInputLabel = $('#bonusform > div.wr-inpts.optional > label');
        this.bonusAmounthChooseInput = $('#bonusform_amount');
        this.getBonusButton = $('#bonusform_switch_to_bonus');
        this.promoCodeBlockTitle = $('.form-get-bonuses h4:nth-child(3)');
        this.promCodeInputLabel = $('#promoform > div.wr-inpts > label');
        this.promoCodeInput = $('#promoform_code');
        this.promoCodeBuyButton = $('#promoform_submit');
        /**
         *  "Bonus history" section
         */
        this.bonusHistoryTableTitle = $('.bonus-tabble h4.table-heading');
        this.bonusHistoryTable = $('#grid_id');
        this.historyTableNameOfBonusColumn = $('#grid_id th:nth-child(1)');
        this.historyTableAmounthColumn = $('#grid_id th:nth-child(2)');
        this.historyTableActivityColumn = $('#grid_id th:nth-child(3)');
        this.historyTableTimeColumn = $('#grid_id th:nth-child(4)');
        this.historyTableWaigerColumn = $('#grid_id th:nth-child(5)');
        this.historyTableStatusColumn = $('#grid_id th:nth-child(6)');
        this.allBonusesHistoryButton = $('a.under-heading');


                                      /*  Actions block */


    /**
     * Get "Activate-bonus" page
     */
    this.getActivateBonusPage = function () {
        browser.actions().click(headerFooter.headerBonusActivateItemLink).perform();
        browser.wait(EC.visibilityOf(this.activateBonusBlock),6000);
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

module.exports = LoginedUserActivateBonusPage;