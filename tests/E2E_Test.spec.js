const {test} = require('@playwright/test');
const {POManager} = require('../pageObjects/POManager.js');


test('E2E Test', async({page})=>{
await page.goto("https://www.stg.kinship.com/uk");
const poManager = new POManager(page);

await poManager.getloginPageObject().handleCookies();
await poManager.getloginPageObject().navigatetoUserPage();
await poManager.getUserPageObject().createUser();
await poManager.getPetPageObject().addPet();



})