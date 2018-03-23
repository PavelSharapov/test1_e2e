'use strict';

/**
 * Page objects for the Main page.
 * @constructor
 */

const EC = protractor.ExpectedConditions;
let LoginedUserMainPage = function () {

    /**
     *  Header section elements
     */
    this.headerLogoPravda = $('.main-logo');
    this.headerAllGamesItem = $('#link_casino_games_all');
    this.headerJackpotItem = $('#welcome-lan > header > div > div > div.main-nav > ul > li:nth-child(2) > a');
    this.headerCashboxItem = $('#welcome-lan > header > div > div > div.main-nav > ul > li:nth-child(3) > a');
    this.headerBonusesInfoItem = $('#welcome-lan > header > div > div > div.main-nav > ul > li:nth-child(4) > a');
    this.headerTournamentsItem = $('#welcome-lan > header > div > div > div.main-nav > ul > li:nth-child(5) > a');
    this.headerUserNickName = $('.u_log_tittle.user_nikname');
    this.headerLoginedUserItem = $('#user_cvg');
    this.headerUserWalletItem = $('.main-wallet');
    this.headerCurrentWalueVolletItem = $('#currentWalueVolletDiv');
    this.headerDepositItem = $('#dep_cvg');
    this.headerBonusItem = $('.bonus_svg');
    this.headerLogOutItem = $('.wr-user-log ul li:nth-child(5) a #Layer_1');
    /**
     *  Slider block elements
     */
    this.sliderBlock = $('#hammer-slider');
    this.sliderLeftControl = $('#prev-btn');
    this.sliderRightControl =$('#next-btn');
    this.sliderDot_1 = $('#dot-container > li:nth-child(1)');
    this.sliderDot_2 = $('#dot-container > li:nth-child(2)');
    this.sliderDot_3 = $('#dot-container > li:nth-child(3)');
    /**
     *  Games filter block
     */
    this.exchangeBlock = $('.gama-nav .exchange span');
    this.exchangeBlockValue = $('.exchange-val');
    this.gameSearchInputBlock = $('#input_search');
    this.gamesFilterItem_1 = $$('.game-filters .link-filter').get(0);
    this.gamesFilterItem_2 = $$('.game-filters .link-filter').get(1);
    this.gamesFilterItem_3 = $$('.game-filters .link-filter').get(2);
    this.gamesFilterItem_4 = $$('.game-filters .link-filter').get(3);
    this.gamesFilterItem_5 = $$('.game-filters .link-filter').get(4);
    this.gamesFilterItem_6 = $$('.game-filters .link-filter').get(5);
    this.gamesFilterItem_7 = $$('.game-filters .link-filter').get(6);
    /**
     *  Vendors filter block
     */
    this.vendorsFilter_1 = $$('.vendors .link-filter').get(0);
    this.vendorsFilter_2 = $$('.vendors .link-filter').get(1);
    this.vendorsFilter_3 = $$('.vendors .link-filter').get(2);
    this.vendorsFilter_4 = $$('.vendors .link-filter').get(3);
    this.vendorsFilter_5 = $$('.vendors .link-filter').get(4);
    this.vendorsFilter_6 = $$('.vendors .link-filter').get(5);
    this.vendorsFilter_7 = $$('.vendors .link-filter').get(6);
    this.vendorsFilter_8 = $$('.vendors .link-filter').get(7);
    /**
     *  Games block
     */










    /**
     *  Welcome section elements
     */


    /**
     *  Welcome-register section elements
     */

    /**
     * Our bonuses section elements
     */

    /**
     * Best providers section elements
     */

    /**
     * Want play section elements
     */

    /**
     * Footer section
     */
    this.footerTopBlock = $('.footer-top');
    this.footerBottomBlock = $('.footer-bot');
    this.footerLogo = $('.footer-logo');
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




                 /*  Actions block */


    /**
     * Waiting to Login and Main page downloading
     */
    this.waitForMainPageDownloadAfterUserLogIn = function () {
        browser.wait(EC.visibilityOf(this.headerLogoPravda),4000);
        browser.wait(EC.visibilityOf(this.headerLoginedUserItem),4000);
    };

};

module.exports = LoginedUserMainPage;