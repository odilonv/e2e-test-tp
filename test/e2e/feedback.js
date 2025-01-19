module.exports = {
  beforeEach(browser) {
    browser
      .url('http://127.0.0.1:9090/feedback')
      .waitForElementVisible('body', 1000);
  },

  'Scenario 1 - Verify that the feedback page loads correctly': (browser) => {
    browser
      .assert.visible('form')
      .assert.textContains('h2.home--header-title', 'IDEALEMENT SITUE')
      .assert.textContains('h2.text-danger', '30 mètres de la plage')
      .assert.textContains('.card-title', 'Nos clients parlent de nous')
      .assert.visible('input[name="name"]')
      .assert.visible('textarea[name="message"]')
      .assert.visible('button[type="submit"]')
      .end();
  },

  'Scenario 2 - Submit feedback successfully': (browser) => {
    browser
      .setValue('input[name="name"]', 'Jean Dupont')
      .setValue('textarea[name="message"]', 'Great service, I recommend!')
      .click('button[type="submit"]')
      .pause(2000)
      .waitForElementVisible('.card-body', 5000) // Wait until feedback is displayed
      .assert.textContains('.card-body', 'Great service, I recommend!')
      .assert.textContains('.card-header', 'Jean Dupont')
      .end();
  },

  'Scenario 3 - Verify the display of received feedbacks': (browser) => {
    browser
      .waitForElementVisible('.card', 5000)
      .assert.textContains('.card-header', 'Jean Dupont')
      .assert.textContains('.card-body', 'Great service, I recommend!')
      .end();
  },

  'Scenario 4 - Verify the feedback counter display': (browser) => {
    browser
      // .assert.textContains('.h2', '1') // this assumes 1 feedback has been submitted
      .assert.textContains('.fs-6', 'Nombre d\'avis')
      .end();
  }
};
