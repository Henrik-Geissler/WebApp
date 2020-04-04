Feature: Page Feature

    In order to explore the Ionic UI Components
    As a user
    I want to be able access the Ionic UI Component Documentation

    Scenario: The Website should match the Screenshot
        Given the page "page/Inbox" is opened
        And   I wait for 1.0 seconds
        Then  I expect the screenshot of "inbox" matches the web page

    Scenario: Visit other Pages via the Menu
        Given the page "page/Inbox" is opened
        When  I click the element "ion-menu-button"
        And   I wait for 1.0 seconds
        And   I click the element "#page_Outbox"
        Then  I expect the page url contains "page/Outbox"

    Scenario: Visit the Ionic UI Components Documentation
        Given the page "page/Inbox" is opened
        And   I wait for 1.0 seconds
        When  I click the element "#ui_components"
        Then  I expect the page url is "https://ionicframework.com/docs/components"