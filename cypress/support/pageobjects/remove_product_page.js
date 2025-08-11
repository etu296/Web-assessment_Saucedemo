class RemoveProductFromCart {
  cartDetails() {
    cy.get('#shopping_cart_container').click();
    cy.wait(1000);
  }

  removeitem() {
    cy.get('.btn').eq(1).click();
  }
}
export default RemoveProductFromCart;