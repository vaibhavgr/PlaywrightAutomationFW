const { LoginPage } = require('../pageObjects/LoginPage.js');
const { UserPage } = require('../pageObjects/UserPage.js');
const { PetPage } = require('../pageObjects/PetPage.js');
const {LandingPage} = require('../pageObjects/LandingPage.js');




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

    getLandingPageObject(){
        return new LandingPage(this.page)
    }

    

}

module.exports = { POManager };