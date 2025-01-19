module.exports = {
  beforeEach(browser) {
    browser
      .url('http://127.0.0.1:9090/pricing')
      .waitForElementVisible('body', 1000);
  },

  'Scenario 1 - Verify that the pricing page loads correctly': (browser) => {
    browser
      .assert.visible('header')
      .assert.textContains('h2.home--header-title', 'UN PRIX POUR')
      .assert.textContains('h2.home--header-title', 'TOUTES LES SAISONS')
      .assert.textContains('h2.display-6', 'Venez séjourner à Rosas')
      .assert.visible('a.btn-dark')
      .assert.visible('.img-fluid')
      .assert.visible('.col-4')
      .end();
  }

};
