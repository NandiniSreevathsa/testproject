require('chromedriver')
var webdriver = require('selenium-webdriver')
const { Options } = require('selenium-webdriver/chrome')
const chromeOptions = new Options()
var capabilities = webdriver.Capabilities.chrome();

capabilities.set('chromeOptions', {
      'args': ['--disable-plugins']
});
chromeOptions.excludeSwitches('enable-logging')
var driver = new webdriver.Builder()
        .forBrowser('chrome')
        .withCapabilities(capabilities)
        .setChromeOptions(chromeOptions)
        .build()
driver.manage().setTimeouts({implicit: (10000)})
const {Builder, By, Key, until, Capabilities} = require('selenium-webdriver')
const { expect } = require('chai')

class BasePage{
    constructor() {
        global.driver = driver;
    }

    go_to_url(baseurl){
      driver.manage().window().maximize()
      try {
        driver.sleep(10000)
        driver.get(baseurl)        
      } catch (error) {
        console.log('Unable to launch')
      }
      
  }

    enterUsername(username) {
      driver.findElement(By.css(`.gh-ug-guest a`)).click()
      driver.wait(until.elementLocated(By.css(`#create-account-link`)), 30000)
      // driver.findElement(By.css(`#switch-account-anchor`)).click()
      driver.findElement(By.css(`#userid`)).sendKeys(username).then(function() {
        console.log(`Entered Username`);
        driver.findElement(By.css(`#signin-continue-btn`)).click()
      });
    }

    enterPassword(password) {
      driver.findElement(By.css(`#pass`)).sendKeys(password).then(function() {
        console.log(`Entered Password`);
      });
    }

    submitLogin() {
      driver.findElement(By.css(`#sgnBt`)).click().then(function() {
        console.log(`Hit Sign in`);
      });
    }

    clickCart() {
      driver.findElement(By.css(`#gh-minicart-hover`)).click().then(function() {
        console.log(`Clicked on cart`);
      })
    }

    verifyCartMessage(expectedmessage) {
      driver.findElement(By.css(".font-title-3 span span span")).getText().then(function(actualMessage) {
        expect(actualMessage).to.equal(expectedmessage)
        console.log(`expected is same as actual message : ${actualMessage}`)
      })      
    }

    clickSaved() {
      driver.findElement(By.css(`.saved`)).click().then(function() {
        console.log(`Clicked on Saved link`);
      })
    }

    verifySavedItemsMessge(expectedmessage) {
      driver.findElement(By.css("#contentFragment  > div > div > div > span.empty-message-text")).getText().then(function(actualMessage) {
        expect(actualMessage).to.equal(expectedmessage)
        console.log(`expected is same as actual message : ${actualMessage}`)
      })      
    }

    quit() {
      driver.close()
      console.log('exit the browser')
  }
}

module.exports = BasePage