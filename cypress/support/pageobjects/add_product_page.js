class AddtoCart {
  addProduct() {
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.wait(1000);
    cy.get('#add-to-cart-sauce-labs-bike-light').click();
    cy.wait(1000);
    cy.get('#add-to-cart-sauce-labs-fleece-jacket').click();

}
}
export default AddtoCart;