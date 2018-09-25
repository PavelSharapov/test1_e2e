'use strict';

/**
 * Objects of Game page for logined user.
 * @constructor
 */
const EC = protractor.ExpectedConditions;
let HeaderFooterLoginedUser = require('.//headerFooter-objects.js');
let LoginedUserGamesPage = function () {

    /**
     *  Header/footer section
     */
    let headerFooter = new HeaderFooterLoginedUser();
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
     *  Games filter section
     */
    this.gamesNavBlock = $('.gama-nav');
    this.exchangeBlock = $('.gama-nav .exchange');
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
     *  Vendors filter section
     */
    this.vendorsFilterBlock = $('.vendors');
    this.vendorsFilter_1 = $$('.vendors .link-filter').get(0);
    this.vendorsFilter_2 = $$('.vendors .link-filter').get(1);
    this.vendorsFilter_3 = $$('.vendors .link-filter').get(2);
    this.vendorsFilter_4 = $$('.vendors .link-filter').get(3);
    this.vendorsFilter_5 = $$('.vendors .link-filter').get(4);
    this.vendorsFilter_6 = $$('.vendors .link-filter').get(5);
    this.vendorsFilter_7 = $$('.vendors .link-filter').get(6);
    this.vendorsFilter_8 = $$('.vendors .link-filter').get(7);
    this.vendorsFilterIcon_1 = $('#icon-netent');
    this.vendorsFilterIcon_2 = $('#icon-microgaming');
    this.vendorsFilterIcon_3 = $('#icon-amatic');
    this.vendorsFilterIcon_4 = $('#icon-novomatic');
    this.vendorsFilterIcon_5 = $('#icon-aristocrat');
    this.vendorsFilterIcon_6 = $('#icon-egt');
    this.vendorsFilterIcon_7 = $('#icon-igt');
    this.vendorsFilterIcon_8 = $('#icon-igrosoft');

    /**
     *  Games section
     */
    this.gamesBlock = $('.games-block');
    this.gamePrewiewTop_1 = $$('.games-block .wr-game .game-top').get(0);
    this.gamePrewiewTop_2 = $$('.games-block .wr-game .game-top').get(1);
    this.gamePrewiewTop_3 = $$('.games-block .wr-game .game-top').get(2);
    this.gamePrewiewTop_4 = $$('.games-block .wr-game .game-top').get(3);
    this.gamePrewiewTop_5 = $$('.games-block .wr-game .game-top').get(4);
    this.gamePrewiewTop_6 = $$('.games-block .wr-game .game-top').get(5);
    this.gamePrewiewTop_7 = $$('.games-block .wr-game .game-top').get(6);
    this.gamePrewiewTop_8 = $$('.games-block .wr-game .game-top').get(7);
    this.gamePrewiewTop_9 = $$('.games-block .wr-game .game-top').get(8);
    this.gamePrewiewTop_10 = $$('.games-block .wr-game .game-top').get(9);
    this.gamePrewiewTop_11 = $$('.games-block .wr-game .game-top').get(10);
    this.gamePrewiewBottom_1 = $$('.games-block .wr-game .game-bot').get(0);
    this.gamePrewiewBottom_2 = $$('.games-block .wr-game .game-bot').get(1);
    this.gamePrewiewBottom_3 = $$('.games-block .wr-game .game-bot').get(2);
    this.gamePrewiewBottom_4 = $$('.games-block .wr-game .game-bot').get(3);
    this.gamePrewiewBottom_5 = $$('.games-block .wr-game .game-bot').get(4);
    this.gamePrewiewBottom_6 = $$('.games-block .wr-game .game-bot').get(5);
    this.gamePrewiewBottom_7 = $$('.games-block .wr-game .game-bot').get(6);
    this.gamePrewiewBottom_8 = $$('.games-block .wr-game .game-bot').get(7);
    this.gamePrewiewBottom_9 = $$('.games-block .wr-game .game-bot').get(8);
    this.gamePrewiewBottom_10 = $$('.games-block .wr-game .game-bot').get(9);
    this.gamePrewiewBottom_11 = $$('.games-block .wr-game .game-bot').get(10);
    this.bigGamePrewiewTop = $('.games-block .big-game .b-top');
    this.bigGamePrewiewMid = $('.games-block .big-game .b-mid');
    this.bigGamePrewiewBottom = $('.games-block .big-game .b-bot');



                 /*  Actions block */


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
    /**
     * Close One Signal popover
     */
    this.closeOneSignalPopover = function () {
        browser.wait(EC.visibilityOf(headerFooter.headerOneSignalPopover),6000);
        browser.sleep(1000);
        browser.actions().click(headerFooter.headerOneSignalPopoverCloseButton).perform();
        browser.sleep(1000);

        // browser.wait(EC.invisibilityOf(headerFooter.headerOneSignalPopover), 6000);
    };

};

module.exports = LoginedUserGamesPage;