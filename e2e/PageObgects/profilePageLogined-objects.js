'use strict';

/**
 * Objects of Profile page for logined user.
 * @constructor
 */
const EC = protractor.ExpectedConditions;
const HeaderFooterLoginedUser = require('.//headerFooter-objects.js');
const LoginedUserProfilePage = function () {


    /**
     *  Header/footer section
     */
     let headerFooter = new HeaderFooterLoginedUser();

    /**
     *  Profile nav section
     */

    this.profilePageTitle = $('body > div:nth-child(4) > h1');
    this.profileNavigationMenu = $('.profile-nav .profile-menu');
    this.profileMenuGamesHistory = $$('.profile-menu li').get(0);
    this.profileMenuBonusesHistory = $$('.profile-menu li').get(1);
    this.profileMenuDepositsHistory = $$('.profile-menu li').get(2);
    this.profileMenuWithdrawHistory = $$('.profile-menu li').get(3);
    this.profileMenuUserAffiliates = $$('.profile-menu li').get(4);
    this.profileMenuDocumentsUpload = $$('.profile-menu li').get(5);

    /**
     *  Profile menu form section
     */

    this.profileMenuForm = $ ('#form');
    this.profileMenuFormNickNameInput = $$('#form .wr-inpts').get(0);
    this.profileMenuFormNickName = $('#form_nickname');
    this.profileMenuFormEmailInput = $$('#form .wr-inpts').get(1);
    this.profileMenuFormNameInput = $$('#form .wr-inpts').get(2);
    this.profileMenuFormLastNameInput = $$('#form .wr-inpts').get(3);
    this.profileMenuFormPhoneInput = $$('#form .wr-inpts').get(4);
    this.profileMenuFormGenderInput = $$('#form .wr-inpts').get(5);
    this.profileMenuFormBirthDateInput = $$('#form .wr-inpts').get(6);
    this.profileMenuFormAdress1Input = $$('#form .wr-inpts').get(7);
    this.profileMenuFormAdress2Input = $$('#form .wr-inpts').get(8);
    this.profileMenuFormStateInput = $$('#form .wr-inpts').get(9);
    this.profileMenuFormCityInput = $$('#form .wr-inpts').get(10);
    this.profileMenuFormZipCodeInput = $$('#form .wr-inpts').get(11);
    this.profileMenuFormCountryInput = $$('#form .wr-inpts').get(12);
    this.profileMenuFormSaveButton = $('#form_update');
    this.profileMenuFormChangePasswordLink = $('#profile-forget');
    this.profileMenuFormRequiredFieldsDot = $('#profile_form .need');




                               /*  Actions block */


    /**
     * Get Profie page
     */
    this.getProfileMenuPage = function () {
        browser.actions().click(headerFooter.headerLoginedUserItemIcon).perform();
        browser.wait(EC.visibilityOf(this.profileMenuForm),6000);
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

module.exports = LoginedUserProfilePage;