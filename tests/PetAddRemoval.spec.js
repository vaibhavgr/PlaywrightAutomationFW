const { test } = require('./fixtures/testFixtures.js');

//fixtures(pages,addpet,authentUser) passing in params so that fixtures can be call automatically
test('verify user is able to delete pet profile', async ({ pages, page, authentUser, addPet }) => {
  await page.goto("https://www.stg.kinship.com/uk");
  await pages.loginPage.handleCookies();
  await pages.landingPage.navigateToAccountsPage();
  await new Promise(res => setTimeout(res, 6000));
  await pages.landingPage.navigateToAccountsPage();
  const xpath = await pages.accountPage.verifyPetXExistsOnAccounstPage(addPet);
  await pages.accountPage.removePet(xpath);

})



