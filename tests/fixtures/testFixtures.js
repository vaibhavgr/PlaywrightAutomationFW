const{test:base} = require('@playwright/test');
const {createPages} = require('../../pageObjects/index.js')
const {getPetData} = require('../../testData/petData.js')
const test = base.extend({

    pages: async({page}, use)=>{
        const mypage = createPages(page)
        await use (mypage)
    },


    petDetails : async({}, use)=>{
        const petDetails = getPetData();
        await use(petDetails);
    }
});
module.exports = { test };