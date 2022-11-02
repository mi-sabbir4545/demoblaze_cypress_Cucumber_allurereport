Feature: Demoblaze Website Automation Testing

    Background: Open The Website
        Given open demoblaze website

    Scenario: open demoblaze website and contact
        When click on contact
        And type contact email name
        And type contact name
        And type contact message
        And click on contact close
