const {AccountsPage, LandingPage , LoginPage , PetPage , UserPage} = require('./index.js')

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