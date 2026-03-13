
const { test: base, request , expect } = require('@playwright/test');
const { createPages } = require('../../pageObjects/PageFactory.js')
const { getPetData } = require('../../testData/petData.js')
const { APIUtil } = require('../../utils/APIUtil.js')
const test = base.extend({

    pages: async ({ page }, use) => {
        const mypage = createPages(page)
        await use(mypage)
    },


    petDetails: async ({ }, use) => {
        const petDetails = getPetData();
        await use(petDetails);
    },

    apiUtil: async ({ }, use) => {
        const apiContext = await request.newContext();
        const apiUtil = new APIUtil(apiContext);
        await use(apiUtil)
    },

    authtoken: async ({ apiUtil }, use) => {
        const token = await apiUtil.getAccessToken();
        console.log(token)
        await use(token)
    },

    addPet: async ({ apiUtil, authtoken }, use) => {
        const petName = await apiUtil.addPet(authtoken);
        console.log(petName)
        await use(petName)
    },

    authentUser: async ({ page, authtoken }, use) => {
        await page.addInitScript(value => {
            window.localStorage.setItem('access_token', value);
        }, authtoken)
        await use()
    }










});
module.exports = { test };