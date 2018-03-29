'use strict';

/**
 * Objects of Game page for logined user.
 * @constructor
 */
const EC = protractor.ExpectedConditions;

let LoginedUserGamesPage = function () {

    /**
     *  Header section
     */
    this.headerLogoPravda = $('.main-logo');
    this.headerAllGamesItem = $('#link_casino_games_all');
    this.headerJackpotItem = $('body > header > div > div > div.main-nav > ul > li:nth-child(2) > a');
    this.headerCashboxItem = $('body > header > div > div > div.main-nav > ul > li:nth-child(3) > a');
    this.headerBonusesInfoItem = $('body > header > div > div > div.main-nav > ul > li:nth-child(4) > a');
    this.headerTournamentsItem = $('body > header > div > div > div.main-nav > ul > li:nth-child(5) > a');
    this.headerUserNickName = $('.u_log_tittle.user_nikname');
    this.headerLoginedUserItem = $('#user_cvg');
    this.headerUserWalletItem = $('.main-wallet');
    this.headerCurrentWalueVolletItem = $('#currentWalueVolletDiv');
    this.headerDepositItem = $('#dep_cvg');
    this.headerBonusActivateItem = $('#bonus_svg');
    this.headerLogOutItem = $('.wr-user-log ul li:nth-child(5) a #Layer_1');
    this.headerLoginButton = $('#btn-login');
    /**
     * Login popup
     */
    this.loginForm = $('.block-login');
    /* this.loginFormEmailTab = $ ('.block-login .tab.lef');
    this.loginFormSocialTab = $('.block-login .tab.rig');*/
    this.loginFormUserNameInput =$('#form_auth #in_user_login');
    this.loginFormPasswordInput =$('#form_auth #in_user_pass');
    this.loginFormLoginButton = $('#btn_auth');
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
    this.vendorsFilterIcon_1 = $$('.vendors #Layer_1').get(0);
    this.vendorsFilterIcon_2 = $$('.vendors #Layer_1').get(1);
    this.vendorsFilterIcon_3 = $$('.vendors #Layer_1').get(2);
    this.vendorsFilterIcon_4 = $$('.vendors #Layer_1').get(3);
    this.vendorsFilterIcon_5 = $$('.vendors #Layer_1').get(4);
    this.vendorsFilterIcon_6 = $$('.vendors #Layer_1').get(5);
    this.vendorsFilterIcon_7 = $$('.vendors #Layer_1').get(6);
    this.vendorsFilterIcon_8 = $$('.vendors #Layer_1').get(7);
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
    /**
     *  Footer section section
     */
    this.footerTopBlock = $('.footer-top');
    this.footerBottomBlock = $('.footer-bot');
    this.footerLogo = $('.footer-logo #Layer_1_1');
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
     * Login to site via Username
     */
    this.logIn = function (userName, userPassword) {
        browser.driver.manage().window().maximize();
        browser.driver.get(browser.baseUrl);
        browser.ignoreSynchronization = true;
        this.waitForWelcomePageDownload();
        this.loginFormOpen();
        this.waitForLoginFormOpen();
        this.loginFormUserNameInput.sendKeys(userName);
        this.loginFormPasswordInput.sendKeys(userPassword);
        this.loginFormloginButtonPress();
        this.waitForMainPageDownloadAfterUserLogIn();
    };
    this.loginFormOpen = function () {
        browser.actions().click(this.headerLoginButton).perform();
    };
    this.loginFormloginButtonPress = function () {
        browser.actions().click(this.loginFormLoginButton).perform();
    };
    this.waitForWelcomePageDownload = function () {
        browser.wait(EC.visibilityOf(this.headerLogoPravda),3000)
    };
    this.waitForLoginFormOpen = function () {
        browser.wait(EC.visibilityOf(this.loginForm), 2000)
    };

    /**
     * Waiting for "Games" page download
     */
    this.waitForMainPageDownloadAfterUserLogIn = function () {
        browser.wait(EC.visibilityOf(this.headerLogoPravda),4000);
        browser.wait(EC.visibilityOf(this.headerLoginedUserItem),4000);
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

module.exports = LoginedUserGamesPage;