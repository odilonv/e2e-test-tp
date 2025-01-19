module.exports = {
  beforeEach(browser) {
    browser
      .url('http://127.0.0.1:9090/geo')
      .waitForElementVisible('body', 1000);
  },

  'Scenario 1 - Verify that the localisation page loads correctly': (browser) => {
    browser
      .assert.visible('header')
      .assert.textContains('h2.home--header-title', 'IDEALEMENT SITUE')
      .assert.textContains('h2.text-danger', '30 mètres de la plage')
      .assert.visible('a.btn-dark')
      .assert.visible('.img-fluid')
      .assert.visible('.col-4')
      .assert.visible('.col-8')
      .assert.visible('iframe')
      .end();
  }

};
