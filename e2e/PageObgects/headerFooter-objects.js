'use strict';

/**
 * Objects of Game page for logined user.
 * @constructor
 */
// const EC = protractor.ExpectedConditions;

let HeaderFooterLoginedUser = function () {

    /**
     *  Header section
     */
    this.headerLogoPravda = $('.main-logo');
    this.headerAllGamesItem = $('#link_casino_games_all');
    this.headerJackpotItem = $('body > header > div > div > div.main-nav > ul > li:nth-child(2) > a');
    this.headerKassaItem = $('body > header > div > div > div.main-nav > ul > li:nth-child(3) > a');
    this.headerBonusesInfoItem = $('body > header > div > div > div.main-nav > ul > li:nth-child(4) > a');
    this.headerTournamentsItem = $('body > header > div > div > div.main-nav > ul > li:nth-child(5) > a');
    this.headerLoginButton = $('#btn-login');
    this.headerLoginButtonSubText = $('.sub-text');
    this.headerRegisterButton = $('#btn-register');
    this.headerWelcomeBonusButton = $('#btn-bonuses');
    this.headerLoginedUserName = $('.u_log_tittle.user_nikname');
    this.headerLoginedUserItemIcon = $('#user_cvg');
    this.headerLoginedUserItemLink = $('.buy_credit_btn.user_pic_in.u_log_link');
    this.headerUserWalletItemTitle = $('#main-wallet span');
    this.headerUserWalletItemCurrentValue = $('#currentWalueVolletDiv');
    this.headerDepositItemIcon = $('#dep_cvg');
    this.headerDepositItemTitle = $('.wr-user-log ul li:nth-child(3) a span');
    this.headerDepositItemLink = $('.wr-user-log ul li:nth-child(3) a');
    this.headerBonusActivateItemTitle = $('.wr-user-log ul li:nth-child(4) a span');
    this.headerBonusActivateItemIcon = $('#bonus_svg');
    this.headerBonusActivateItemLink = $('.wr-user-log ul li:nth-child(4) a');
    this.headerLogOutItemTitle = $('.wr-user-log ul li:nth-child(5) a span');
    this.headerLogOutItemIcon = $('#icon-logout');
    this.headerLogOutItemLink = $('.wr-user-log ul li:nth-child(5) a');
    this.headerOneSignalPopover = $('#normal-popover');
    this.headerOneSignalPopoverCloseButton = $('#onesignal-popover-cancel-button');

    /**
     *  Footer section section
     */
    this.footerTopBlock = $('.footer-top');
    this.footerBottomBlock = $('.footer-bot');
    this.footerLogo = $('#logo-pravda-footer');
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

                                /* Actions block */
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

module.exports = HeaderFooterLoginedUser;