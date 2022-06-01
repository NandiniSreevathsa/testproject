var BasePage = require('./basepage')

class HomePage extends BasePage {
    loginUser(username, password) {
        this.enterUsername(username)
        this.enterPassword(password)
        this.submitLogin()
    }

    clickCartAndVerifyMessage(message) {
        this.clickCart()
        this.verifyCartMessage(message)
    }

    clickSavedAndVerifyMessage(message){
        this.clickSaved()
        this.verifySavedItemsMessge(message)
    }   
}

module.exports = new HomePage();