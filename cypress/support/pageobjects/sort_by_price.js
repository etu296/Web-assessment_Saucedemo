class SortbyPrice {
  selectAnyOption(optionValue) {
 cy.get('[data-test="product-sort-container"]').select(optionValue);  }
 verifySortByPrice() {
    cy.get('.product_sort_container').should('contain', 'Price (high to low)');
    }
}
export default SortbyPrice;