const homepage = require('../pageobject/homepage')
const path = require('path')


describe.only('Login to ebay website', function() {
    beforeEach(function() {
        var baseurl = 'https://www.ebay.com/'
        homepage.go_to_url(baseurl)
    });

    it('should login to ebay successfully', function() {
        homepage.loginUser("nandini.sreevathsa3@gmail.com", "manam1234")
        homepage.quit()
    });
});

describe('Saved items', function() {
    beforeEach(function() {
        var baseurl = 'https://www.ebay.com/'
        homepage.go_to_url(baseurl)
        homepage.loginUser("nandini.sreevathsa3@gmail.com", "manam1234")
    });

    it('should click on Saved and display message', function() {
        homepage.clickSavedAndVerifyMessage("Your feed is currently empty. But there are so many amazing things to follow!")
        homepage.quit()
    });
});

describe('Empty cart', function() {
    beforeEach(function() {
        var baseurl = 'https://www.ebay.com/'
        homepage.go_to_url(baseurl)
        homepage.loginUser("nandini.sreevathsa3@gmail.com", "manam1234")
    });

    it('should click on cart and display message', function() {
        homepage.clickCartAndVerifyMessage("You don't have any items in your cart.")
        homepage.quit()
    });
});


