const { LoginPage } = require('../pageObjects/LoginPage.js');
const { UserPage } = require('../pageObjects/UserPage.js');
const { PetPage } = require('../pageObjects/PetPage.js');




class POManager {
    constructor(page) {
        this.page = page;
    }

    getloginPageObject() {
        return new LoginPage(this.page)
    }

    getUserPageObject() {
        return new UserPage(this.page)
    }

    getPetPageObject() {
        return new PetPage(this.page)
    }

    

}

module.exports = { POManager };