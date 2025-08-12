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
const dayjs = require("dayjs");
describe("login page automate",()=>{
beforeEach(() => {
    loginPage.visit();
    loginPage.enterUsername("standard_user");
    loginPage.enterPassword("secret_sauce");
    loginPage.submit();
    cy.wait(2000);
    loginPage.verifyLoginSuccess();
  });

   it("sort by name",()=>{
      const timestamp = dayjs().format("YYYY_MM_DD_HH_mm_ss");
      sortByName.selectAnyOption("Name (Z to A)");
      sortByName.verifySortByName();
      cy.screenshot(`run_${timestamp}/sort_by_name`);
      cy.wait(2000);
   })
   it("sort by price",()=>{
      const timestamp = dayjs().format("YYYY_MM_DD_HH_mm_ss");
      sortByPrice.selectAnyOption("Price (high to low)");
      sortByPrice.verifySortByPrice();
      cy.screenshot(`run_${timestamp}/sort_by_price`);
      cy.wait(2000);
   })
   it("add 3 product to cart and remove 2nd item from the cart details then checkout for complete the order then logout",()=>{
      const timestamp = dayjs().format("YYYY_MM_DD_HH_mm_ss");
      addToCart.addProduct();
      removeProductFromCart.cartDetails();
      removeProductFromCart.removeitem();
      checkoutPage.checkout();
      checkoutPage.fillCheckoutDetails("Salma","Rahman","1234");
      checkoutPage.submitCheckout();
      checkoutPage.finishCheckout();
      checkoutPage.assertCheckoutSuccess();
      cy.screenshot(`run_${timestamp}/finish_checkout`);
      cy.wait(2000);
      logoutPage.logout();
      logoutPage.verifyLogoutSuccess();
   })

   
})