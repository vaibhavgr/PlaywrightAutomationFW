const { AccountsPage } = require('./AccountsPage');
const { LandingPage } = require('./LandingPage')
const { LoginPage} = require('./LoginPage')
const { PetPage} = require('./PetPage');
const { UserPage } = require('./UserPage');


function createPages(page){
    return{
        loginPage : new LoginPage(page),
        landingPage : new LandingPage(page),
        petPage : new PetPage(page),
        userPage : new UserPage(page),
        accountPage : new AccountsPage(page)

    }


}
module.exports = {createPages};