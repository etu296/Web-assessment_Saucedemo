class LogoutPage {
  logout() {
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
  }
  verifyLogoutSuccess() {
    cy.get('.login_logo').should('be.visible');
  }
}
export default LogoutPage;