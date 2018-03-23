'use strict';

let WelcomePage = require('/home/pavel/Usefull tolls/Protractor tests/Pravda-e2e-test/e2e/Pages/newUserWelcomePage-objects');
let LoginedUserMainPage = require('/home/pavel/Usefull tolls/Protractor tests/Pravda-e2e-test/e2e/Pages/loginedUserGamesPage-objects');

describe('Login to the site', function () {
    let welcomePage = new WelcomePage();
    let mainPage = new LoginedUserMainPage();
    let userName = 'p1';
    let userPassword = '44445678t';

        it('Should download Welcome page', function () {
            welcomePage.get();
            welcomePage.waitForWelcomePageDownload();
            expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);
        });
        it ('Should opened Login modal window', function () {
            welcomePage.loginFormOpen();
            welcomePage.waitForLoginFormOpen();
            expect(welcomePage.loginForm.isDisplayed()).toBe(true);
        });
        it('Should be login to site',function () {
            welcomePage.loginFormUserNameInput.sendKeys(userName);
            welcomePage.loginFormPasswordInput.sendKeys(userPassword);
            welcomePage.loginFormloginButtonPress();
            mainPage.waitForMainPageDownloadAfterUserLogIn();
            expect(mainPage.headerLoginedUserItem.isDisplayed()).toBe(true);

        });




});