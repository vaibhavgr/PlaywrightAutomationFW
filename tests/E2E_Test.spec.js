const {test} = require('./fixtures/testFixtures.js')
//const {test} = require('@playwright/test')
//const {POManager} = require('../pageObjects/POManager.js');
const { UniqueGenerator } = require('../utils/UniqueGenerator.js');




test('E2E Test', async({pages , page , petDetails })=>{
await page.goto("https://www.stg.kinship.com/uk");
await pages.loginPage.handleCookies();
await pages.loginPage.navigatetoUserPage();
await pages.userPage.createUser();
await pages.petPage.addPet(petDetails.petName);
await pages.landingPage.verifyPetExistsInAddedDrawer(petDetails.petName);



});