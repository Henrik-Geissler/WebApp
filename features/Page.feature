Feature: Page Feature

    In order to explore the Ionic UI Components
    As a user
    I want to be able access the Ionic UI Component Documentation

    Scenario: The Website should match the Screenshot
        Given the page "page/Inbox" is opened
        And   I wait for 1.0 seconds
        Then  I expect the screenshot of "inbox" matches the web page
