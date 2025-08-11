class SortbyName {
  selectAnyOption(optionValue) {
 cy.get('[data-test="product-sort-container"]').select(optionValue);  }
}
export default SortbyName;