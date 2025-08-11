import LoginPage from '../../support/pageobjects/login_page';
const loginPage = new LoginPage();
import SortbyName from '../../support/pageobjects/sort_by_name';
const sortByName = new SortbyName();
import SortbyPrice from '../../support/pageobjects/sort_by_price';
const sortByPrice = new SortbyPrice();
import AddtoCart from '../../support/pageobjects/add_product_page';
const addToCart = new AddtoCart();
import RemoveProductFromCart from '../../support/pageobjects/remove_product_page';
const removeProductFromCart = new RemoveProductFromCart();
import CheckoutPage from '../../support/pageobjects/checkout_page';
const checkoutPage = new CheckoutPage();
import LogoutPage from '../../support/pageobjects/logut_page';
const logoutPage = new LogoutPage();

describe("login page automate",()=>{
beforeEach(() => {
    loginPage.visit();
    loginPage.enterUsername("standard_user");
    loginPage.enterPassword("secret_sauce");
    loginPage.submit();
    cy.wait(2000); // optional, better to wait for an element instead
  });

   it("sort by name",()=>{
      sortByName.selectAnyOption("Name (Z to A)");
      cy.wait(2000);
   })
   it("sort by price",()=>{
      sortByPrice.selectAnyOption("Price (high to low)");
      cy.wait(2000);
   })
   it("add 3 product to cart and remove 2nd item from the cart details then checkout for complete the order then logout",()=>{
      addToCart.addProduct();
      removeProductFromCart.cartDetails();
      removeProductFromCart.removeitem();
      checkoutPage.checkout();
      checkoutPage.fillCheckoutDetails("Salma","Rahman","1234");
      checkoutPage.submitCheckout();
      checkoutPage.finishCheckout();
      checkoutPage.assertCheckoutSuccess();
      cy.wait(2000);
      logoutPage.logout();
   })

   
})