const { test } = require('./fixtures/testFixtures.js')



test.only('E2E Test', async ({ pages, page, petDetails }) => {
    await page.goto("https://www.stg.kinship.com/uk");
    await pages.loginPage.handleCookies();
    await pages.loginPage.navigatetoUserPage();
    await pages.userPage.createUser();
    await pages.petPage.addPet(petDetails.petName);
    await pages.landingPage.verifyPetExistsInAddedDrawer(petDetails.petName);



});

