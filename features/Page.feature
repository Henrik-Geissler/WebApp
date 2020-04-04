Feature: Page Feature

    In order to explore the Ionic UI Components
    As a user
    I want to be able access the Ionic UI Component Documentation

    Scenario: The Website should match the Screenshot
        #  E2ETest #1 : Expect the Website to match Screenshot
        Given the page "page/Inbox" is opened
        Then  I expect the screenshot of "inbox" matches the web page

    Scenario: Visit the Ionic UI Components Documentation
        #  E2ETest #3 : Click on a link and expect to be on a different Page
        Given the page "page/Inbox" is opened
        When  I click the element "ion-menu-button"
        And  I click the element "#page_Inbox"
        And  I click the element "#ui_components"
        Then  I expect the page url is "https://ionicframework.com/docs/components"