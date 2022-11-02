Feature: Demoblaze Website Automation Testing

    Background: Open The Website
        Given open demoblaze website

    Scenario: open demoblaze website and login
        When click on login
        And type login user name
        And type login password
        And click on login close
