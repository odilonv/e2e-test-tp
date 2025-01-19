module.exports = {
  'Scenario 1: Login and access Admin page': (browser) => {
    browser
      .url('http://127.0.0.1:9090/login')
      .waitForElementVisible('body', 1000)
      .setValue('input[name="name"]', 'admin')
      .setValue('input[name="password"]', 'admin')
      .click('button[type="submit"]')
      .waitForElementVisible('body', 1000)

      .assert.urlEquals('http://127.0.0.1:9090/admin')
      .assert.elementPresent('table')
      .assert.textContains('table', 'dates')
      .assert.textContains('table', 'authors')
      .assert.textContains('table', 'messages')
      .end();
  },

  'Scenario 2: Logout using the "Disconnected" button': (browser) => {
    browser
      .url('http://127.0.0.1:9090/login')
      .waitForElementVisible('body', 1000)
      .setValue('input[name="name"]', 'admin')
      .setValue('input[name="password"]', 'admin')
      .click('button[type="submit"]')
      .waitForElementVisible('body', 1000)
      .assert.urlEquals('http://127.0.0.1:9090/admin')
      .assert.textContains('button.disconnected', 'Disconnected')
      .click('button.disconnected')
      .waitForElementVisible('body', 1000)
      .assert.urlEquals('http://127.0.0.1:9090/login')
      .end();
  },

  'Scenario 3: Login with invalid credentials': (browser) => {
    browser
      .url('http://127.0.0.1:9090/login')
      .waitForElementVisible('body', 1000)
      .setValue('input[name="name"]', 'invalidUser')
      .setValue('input[name="password"]', 'invalidPassword')
      .click('button[type="submit"]')
      .pause(2000)
      .getLog('browser', (logs) => {
        const badMessage = logs.some((log) => log.message.includes('Failed to load resource: the server responded with a status of 403'));
        browser.assert.ok(badMessage, 'Console log contains 403 error');
      })
      .end();
  }
};
