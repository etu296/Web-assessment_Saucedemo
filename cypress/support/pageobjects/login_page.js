class LoginPage {
  visit() {
    cy.visit('https://www.saucedemo.com/');
  }

  enterUsername(username) {
    cy.get('#user-name').type(username);
  }

  enterPassword(password) {
    cy.get('#password').type(password);
  }

  submit() {
	cy.get("#login-button").click({ force: true });
  }
    login(username, password) {
        this.visit();
        this.enterUsername(username);
        this.enterPassword(password);
        this.submit();
    }
  verifyLoginSuccess() {
    cy.get('.app_logo').should('contain', 'Swag Labs');
  }

  verifyLoginFailure() {
    cy.get('.error-message').should('be.visible');
  }
}
export default LoginPage;