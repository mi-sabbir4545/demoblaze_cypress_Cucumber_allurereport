Feature: Demoblaze Website Automation Testing

    Background: Open The Website
        Given open demoblaze website

    Scenario: open demoblaze website and add cart
        When click on cart
        And click on place order
        And type place order name
        And type place order country
        And type place order city
        And type place order credit card
        And type place order month
        And type place order year
        And click on place order close
