'use strict';

/**
 * Objects of Wallets page for logined user.
 * @constructor
 */
const EC = protractor.ExpectedConditions;
let HeaderFooterLoginedUser = require('.//headerFooter-objects.js');

let LoginedUserBonusiPage = function () {

    /**
     *  Header/footer section
     */
    let headerFooterLogined = new HeaderFooterLoginedUser();
    /**
     *  Slider section
     */
    this.sliderBlock = $('#hammer-slider');
    this.sliderLeftControl = $('#prev-btn');
    this.sliderRightControl =$('#next-btn');
    this.sliderDot_1 = $('#dot-container > li:nth-child(1)');
    this.sliderDot_2 = $('#dot-container > li:nth-child(2)');
    this.sliderDot_3 = $('#dot-container > li:nth-child(3)');

    /**
     *   Bonusi section
     */
    this.ourBonusiTitle = $('.bonuses-tittle');
    this.bonusiItem1 = $('.top-view.first-bonus');
    this.bonusiItem1Image = $('.top-view.first-bonus img.bonus-1-person');
    this.bonusiItem1Title = $('.top-view.first-bonus .tittle-b');
    this.bonusiItem1Describe = $('.top-view.first-bonus .tittle-descr');
    this.bonusiItem1DepositButton = $('.top-view.first-bonus .bonus-reg.make');
    this.bonusiItem1ShowButton = $('.top-view.first-bonus .bonus-show');
    this.bonusiItem2 = $('.top-view.second-bonus');
    this.bonusiItem2Image = $('.top-view.second-bonus img.bonus-1-person');
    this.bonusiItem2Title = $('.top-view.second-bonus .tittle-b');
    this.bonusiItem2Describe = $('.top-view.second-bonus .tittle-descr');
    this.bonusiItem2DepositButton = $('.top-view.second-bonus .bonus-reg.make');
    this.bonusiItem2ShowButton = $('.top-view.second-bonus .bonus-show');
    this.bonusiItem3 = $('.top-view.third-bonus');
    this.bonusiItem3Image = $('.top-view.third-bonus img.bonus-3-person');
    this.bonusiItem3Title = $('.top-view.third-bonus .tittle-b');
    this.bonusiItem3Describe = $('.top-view.third-bonus .tittle-descr');
    this.bonusiItem3DepositButton = $('.top-view.third-bonus .bonus-reg.make');
    this.bonusiItem3ShowButton = $('.top-view.third-bonus .bonus-show');
    this.bonusiItem4 = $('.top-view.fourth-bonus');
    this.bonusiItem4Image = $('.top-view.fourth-bonus img.bonus-4-person-1');
    this.bonusiItem4Title = $('.top-view.fourth-bonus .tittle-b');
    this.bonusiItem4Describe = $('.top-view.fourth-bonus .tittle-descr');
    this.bonusiItem4DepositButton = $('.top-view.fourth-bonus .bonus-reg.make');
    this.bonusiItem4ShowButton = $('.top-view.fourth-bonus .bonus-show');
    this.bonusiItem5 = $('.top-view.fifth-bonus');
    this.bonusiItem5Image = $('.top-view.fifth-bonus img.bonus-5-person');
    this.bonusiItem5Title = $('.top-view.fifth-bonus .tittle-b');
    this.bonusiItem5Describe = $('.top-view.fifth-bonus .tittle-descr');
    this.bonusiItem5DepositButton = $('.top-view.fifth-bonus .bonus-reg.make');
    this.bonusiItem5ShowButton = $('.top-view.fifth-bonus .bonus-show');
    this.bonusiItem6 = $('.top-view.sixth-bonus');
    this.bonusiItem6Image = $('.top-view.sixth-bonus img.bonus-6-person');
    this.bonusiItem6Title = $('.top-view.sixth-bonus .tittle-b');
    this.bonusiItem6Describe = $('.top-view.sixth-bonus .tittle-descr');
    this.bonusiItem6DepositButton = $('.top-view.sixth-bonus .bonus-reg.make');
    this.bonusiItem6ShowButton = $('.top-view.sixth-bonus .bonus-show');
    this.bonusiItem7 = $('.top-view.seventh-bonus');
    this.bonusiItem7Image = $('.top-view.seventh-bonus img.bonus-7-person');
    this.bonusiItem7Title = $('.top-view.seventh-bonus .tittle-b');
    this.bonusiItem7Describe = $('.top-view.seventh-bonus .tittle-descr');
    this.bonusiItem7DepositButton = $('.top-view.seventh-bonus .bonus-reg.make');


                            /* Actions block */

    /**
     * Get Bonusi page
     */
    this.getBonusiPage = function () {
        browser.actions().click(headerFooterLogined.headerBonusesInfoItem).perform();
        browser.wait(EC.visibilityOf(this.ourBonusiTitle),4000);
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

};

module.exports = LoginedUserBonusiPage;