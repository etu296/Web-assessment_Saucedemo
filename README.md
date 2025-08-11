# 🧪 Cypress E2E Automation – Sauce Demo (POM)

This project automates end-to-end user scenarios for the Sauce Demo application using **Cypress** with the **Page Object Model (POM)** design pattern.

---

## 📁 Project Structure

- `pageobjects/` – All Page Object Model classes (login, sorting, cart, checkout, logout, etc.)
- `e2e/` – Cypress test files
- `fixtures/` – Test data (optional)
- `support/` – Cypress commands and setup files

---

## 🚀 Features Covered

- **Login Automation** – Logs in with valid credentials before each test
- **Sorting Products** – Sorts by name (Z to A) and price (high to low)
- **Add to Cart** – Adds multiple products to the cart
- **Remove Product from Cart** – Removes the second item from the cart details page
- **Checkout** – Completes a full checkout flow with customer details
- **Logout** – Logs the user out after checkout

---

## 🧪 Test Scenarios

1. **Sort by Name**
   - Logs in
   - Selects “Name (Z to A)” in the sort dropdown

2. **Sort by Price**
   - Logs in
   - Selects “Price (high to low)” in the sort dropdown

3. **Full Purchase Flow**
   - Logs in
   - Adds three products to the cart
   - Removes the second item from cart details
   - Proceeds to checkout
   - Fills in first name, last name, and postal code
   - Completes checkout and verifies success
   - Logs out

---

## ✍️ Author

**Etu Mahmuda Era**  
GitHub: [etu296](https://github.com/etu296)  
Portfolio: [etu296.github.io](https://etu296.github.io/Etu_Mahmuda_Era/)
