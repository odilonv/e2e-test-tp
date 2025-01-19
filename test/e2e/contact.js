module.exports = {
  'Scenario 1: Access Contact page': (browser) => {
    browser
      .url('http://127.0.0.1:9090/contact')
      .waitForElementVisible('body', 1000)

      .assert.urlEquals('http://127.0.0.1:9090/contact')
      .assert.textContains('h2', 'CONTACTEZ-NOUS')
      .assert.elementPresent('form')

      .end();
  },

  'Scenario 2: Submit valid contact form': (browser) => {
    browser
      .url('http://127.0.0.1:9090/contact')
      .waitForElementVisible('body', 1000)

      .setValue('input[name="firstName"]', 'John')
      .setValue('input[name="lastName"]', 'Doe')
      .setValue('input[name="mobilePhone"]', '0612345678')
      .setValue('input[name="email"]', 'john.doe@example.com')
      .setValue('input[name="arrivedAt"]', '2025-01-01')
      .setValue('input[name="departureAt"]', '2025-01-10')
      .setValue('textarea[name="message"]', 'Hello, I need information about your services.')

      .click('button[type="submit"]')
      .waitForElementVisible('body', 1000)

      .assert.elementPresent('button[type="submit"]')
      .assert.textContains('button[type="submit"]', 'Envoyer')
      .assert.urlContains('/contact')

      .end();
  },

  'Scenario 3: Submit contact form with missing required fields': (browser) => {
    browser
      .url('http://127.0.0.1:9090/contact')
      .waitForElementVisible('body', 1000)

      .setValue('input[name="firstName"]', '')
      .setValue('input[name="lastName"]', '')
      .setValue('input[name="mobilePhone"]', '')
      .setValue('input[name="email"]', '')
      .setValue('input[name="arrivedAt"]', '')
      .setValue('input[name="departureAt"]', '')
      .setValue('textarea[name="message"]', '')

      .click('button[type="submit"]')
      .waitForElementVisible('body', 1000)

      .assert.urlContains('/contact')
      .assert.attributeContains('input[name="firstName"]', 'required', 'true')
      .assert.attributeContains('input[name="lastName"]', 'required', 'true')
      .assert.attributeContains('input[name="mobilePhone"]', 'required', 'true')
      .assert.attributeContains('input[name="email"]', 'required', 'true')
      .assert.attributeContains('input[name="arrivedAt"]', 'required', 'true')
      .assert.attributeContains('input[name="departureAt"]', 'required', 'true')

      .end();
  }
};
