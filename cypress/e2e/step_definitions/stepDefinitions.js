import {Given, When, And, Then,} from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/Locators";
import Data from "../../TestData/data"; 
import CommonMethods from "./commonMethods";

const locator = new locatorsPage();
const data= new Data(); 

const common= new CommonMethods(); 



// <------------------------------------------------------------------->
// <----------------------- Signup Steps ------------------------------->
// <------------------------------------------------------------------->
Given('open demoblaze website', function(){ 
    cy.visit(data.URL);
    // cy.url().should('eq', data.URL)
    cy.wait(5000)
})

When('click on sign up', function() {
    cy.xpath(locator.signup).click()
    cy.wait(5000)
})

And('type sign up user name', function() {
    cy.xpath(locator.signup_username).type(data.USERNAME)
    cy.wait(5000)
})

And('type sign up password', function() {
    cy.xpath(locator.signup_password).type(data.PASSWORD)
    cy.wait(5000)
})

And('click on sign up close', function() {
    cy.xpath(locator.signup_close).click()
    cy.wait(5000)
})


// <------------------------------------------------------------------->
// <----------------------- Login Steps ------------------------------->
// <------------------------------------------------------------------->

When('click on login', function() {
    cy.xpath(locator.login).click()
    cy.wait(5000)
})

And('type login user name', function() {
    cy.xpath(locator.login_username).type(data.USERNAME)
    cy.wait(5000)
})

And('type login password', function() {
    cy.xpath(locator.login_password).type(data.PASSWORD)
    cy.wait(5000)
})

And('click on login close', function() {
    cy.xpath(locator.loginp_close).click()
    cy.wait(5000)
})


// <------------------------------------------------------------------->
// <----------------------- Cart Steps ------------------------------->
// <------------------------------------------------------------------->

When('click on cart', function() {
    cy.xpath(locator.cart).click()
    cy.wait(5000)
})

And('click on place order', function() {
    cy.xpath(locator.place_order).click()
    cy.wait(5000)
})

And('type place order name', function() {
    cy.xpath(locator.place_order_name).type(data.Name)
    cy.wait(5000)
})

And('type place order country', function() {
    cy.xpath(locator.place_order_country).type(data.Country)
    cy.wait(5000)
})

And('type place order city', function() {
    cy.xpath(locator.place_order_city).type(data.City)
    cy.wait(5000)
})

And('type place order credit card', function() {
    cy.xpath(locator.place_order_credit_card).type(data.Credit_card)
    cy.wait(5000)
})

And('type place order month', function() {
    cy.xpath(locator.place_order_month).type(data.Month)
    cy.wait(5000)
})

And('type place order year', function() {
    cy.xpath(locator.place_order_year).type(data.Year)
    cy.wait(5000)
})


And('click on place order close', function() {
    cy.xpath(locator.place_order_close).click()
    cy.wait(5000)
})


// <------------------------------------------------------------------->
// <----------------------- About Us Steps ------------------------------->
// <------------------------------------------------------------------->

When('click on about us', function() {
    cy.xpath(locator.about_us).click()
    cy.wait(5000)
})

And('click on video', function() {
    cy.xpath(locator.open_video).click()
    cy.wait(5000)
})

And('click on pause video', function() {
    cy.xpath(locator.pause_video).click()
    cy.wait(5000)
})

And('click on about us close', function() {
    cy.xpath(locator.about_us_close).click()
    cy.wait(5000)
})

// <------------------------------------------------------------------->
// <----------------------- Contact Steps ------------------------------->
// <------------------------------------------------------------------->

When('click on contact', function() {
    cy.xpath(locator.contact).click()
    cy.wait(5000)
})

And('type contact email name', function() {
    cy.xpath(locator.contact_email).type(data.contact_email)
    cy.wait(5000)
})

And('type contact name', function() {
    cy.xpath(locator.contact_Name).type(data.contact_name)
    cy.wait(5000)
})

And('type contact message', function() {
    cy.xpath(locator.contact_message).type(data.message)
    cy.wait(5000)
})

And('click on contact close', function() {
    cy.xpath(locator.contact_close).click()
    cy.wait(5000)
})

// <------------------------------------------------------------------->
// <----------------------- Home phones Steps ------------------------------->
// <------------------------------------------------------------------->

When('click on Home', function() {
    cy.xpath(locator.home).click()
    cy.wait(5000)
})

And('click on home phone', function() {
    cy.xpath(locator.home_phone).click()
    cy.wait(5000)
})

And('click on phone nexus6', function() {
    cy.xpath(locator.phone_nexus6).click()
    cy.wait(5000)
})

And('click on add to cart', function() {
    cy.xpath(locator.add_to_cart).click()
    cy.wait(5000)
})

And('click on home cart', function() {
    cy.xpath(locator.home_cart).click()
    cy.wait(5000)
})

And('click on cart delete', function() {
    cy.xpath(locator.cart_delete).click()
    cy.wait(5000)
})


// <------------------------------------------------------------------->
// <----------------------- Home laptops Steps ------------------------------->
// <------------------------------------------------------------------->


When('click on laptops', function() {
    cy.xpath(locator.home_laptops).click()
    cy.wait(5000)
})

And('click on laptops sony', function() {
    cy.xpath(locator.laptops_sony).click()
    cy.wait(5000)
})

And('click on add to laptops add to cart', function() {
    cy.xpath(locator.laptops_add_to_cart).click()
    cy.wait(5000)
})

And('click on laptops cart', function() {
    cy.xpath(locator.laptops_cart).click()
    cy.wait(5000)
})

And('click on laptops cart delete', function() {
    cy.xpath(locator.laptops_cart_delete).click()
    cy.wait(5000)
})

// <------------------------------------------------------------------->
// <----------------------- Home monitors Steps ------------------------------->
// <------------------------------------------------------------------->



When('click on monitors', function() {
    cy.xpath(locator.home_monitors).click()
    cy.wait(5000)
})

And('click on monitors apple', function() {
    cy.xpath(locator.monitors_apple).click()
    cy.wait(5000)
})

And('click on add to monitors add to cart', function() {
    cy.xpath(locator.monitors_add_to_cart).click()
    cy.wait(5000)
})

And('click on monitors cart', function() {
    cy.xpath(locator.monitors_cart).click()
    cy.wait(5000)
})

And('click on monitors cart delete', function() {
    cy.xpath(locator.monitors_cart_delete).click()
    cy.wait(5000)
})
