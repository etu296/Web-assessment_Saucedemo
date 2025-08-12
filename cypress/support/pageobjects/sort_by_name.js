class SortbyName {
  selectAnyOption(optionValue) {
  cy.get('[data-test="product-sort-container"]').select(optionValue);  
 }
 verifySortByName() {
    cy.get('.product_sort_container').should('contain', 'Name (Z to A)');
  }
}
export default SortbyName;