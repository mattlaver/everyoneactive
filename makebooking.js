var webDriver = require('selenium-webdriver');
var member = require('./credentials')

var driver = new webDriver.Builder().
    withCapabilities(webDriver.Capabilities.chrome()).
    build();

driver.get('http://www.everyoneactive.com');

driver.findElement(webdriver.By.linkText('Book now')).click().then(function() {
    driver.sleep(3000);
})

/* Log on */
driver.findElement(webdriver.By.id('selectmember')).click();
driver.findElement(webdriver.By.id('mrmid')).sendKeys(member.memberId());
driver.findElement(webdriver.By.id('pin')).sendKeys(member.pin());
driver.findElement(webdriver.By.className('booking-redirect')).click();

