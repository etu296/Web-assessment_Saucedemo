class CheckoutPage {
    checkout() {
        cy.get('#checkout').click();
    }
    fillCheckoutDetails(firstName, lastName, postalCode) {
        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#postal-code').type(postalCode);
    }
    submitCheckout() {
        cy.get('#continue').click();
    }
    finishCheckout() {
        cy.get('#finish').click();
    }  
    assertCheckoutSuccess() {
        cy.get('.complete-header').should('contain', 'Thank you for your order!');

    } 


}
export default CheckoutPage;