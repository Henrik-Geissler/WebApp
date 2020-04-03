Feature: Page Feature

    In order to explore the Ionic UI Components
    As a user
    I want to be able access the Ionic UI Component Manual

    Scenario: The Website should be accessable
        #  E2ETest #1 : Expect the Website to match Accessability Criteria
        Given the url "http://localhost:3000/index.html" is opened
        When  I click the link "#page_Inbox"
        Then  I expect the "index" page has no accessibility errors

    Scenario: The Website should match the Screenshot
        #  E2ETest #2 : Expect the Website to match Screenshot
        Given the url "http://localhost:3000/index.html" is opened
        When  I click the link "#page_Inbox"
        Then  I expect the screenshot of "ccc-hangman" matches the web page

    Scenario: Visit the Authers github website
        #  E2ETest #3 : Click on a link and expect to be on a different Page
        Given the url "http://localhost:3000/index.html" is opened
        When  I click the link "#page_Inbox"
        And  I click the link "#ui_components"
        Then  I expect the page url is "https://github.com/vetrivelcsamy/reactjs-hangman"