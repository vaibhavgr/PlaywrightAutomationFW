const {test} = require('@playwright/test');
const {POManager} = require('../pageObjects/POManager.js');
const { UniqueGenerator } = require('../utils/UniqueGenerator.js');


test('E2E Test', async({page})=>{
await page.goto("https://www.stg.kinship.com/uk");
const poManager = new POManager(page);

await poManager.getloginPageObject().handleCookies();
await poManager.getloginPageObject().navigatetoUserPage();
await poManager.getUserPageObject().createUser();
const petName  = UniqueGenerator.getFakeData('firstname')
await poManager.getPetPageObject().addPet(petName);
await poManager.getLandingPageObject().verifyPetExistsInAddedDrawer(petName);



})