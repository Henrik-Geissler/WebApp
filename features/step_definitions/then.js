import {Then} from 'cucumber'
import checkAccessibility from '../support/check/checkAccessibility'
import checkAttribute from '../support/check/checkAttribute'
import checkAttributeContains from '../support/check/checkAttributeContains'
import checkContainsText from '../support/check/checkContainsText'
import checkElementEnabled from '../support/check/checkElementEnabled'
import checkElementExists from '../support/check/checkElementExists'
import checkElementVisible from '../support/check/checkElementVisible'
import checkElementValue from '../support/check/checkElementValue'
import checkIsEmpty from '../support/check/checkIsEmpty'
import checkTitle from '../support/check/checkTitle'
import checkUrl from '../support/check/checkUrl'
import checkHasFocus from '../support/check/checkHasFocus'
import checkIsChecked from '../support/check/checkIsChecked'
import checkCookieExists from '../support/check/checkCookieExists'
import checkCookieValue from '../support/check/checkCookieValue'
import resizeScreenSize from '../support/action/resizeScreenSize'
import checkTitleContains from '../support/check/checkTitleContains'
import checkUrlContains from '../support/check/checkUrlContains'
import checkScreenshot from '../support/check/checkScreenshot'

Then(/^I expect that the title is "([^"]*)"$/, checkTitle)

Then(/^I expect the element "([^"]*)" is( not)? visible$/, async function(
  selector,
  not,
) {
  await checkElementVisible.call(this, selector, not)
})

Then(
  /^I expect the element "([^"]*)" is( not)? visible after "([^"]*)" seconds$/,
  async function(selector, not, seconds) {
    await checkElementVisible.call(this, selector, not, seconds)
  },
)

Then(
  /^I expect the element "([^"]*)?" value is( not)? "([^"]*)?"$/,
  checkElementValue,
)

Then(
  /^I expect the element "([^"]*)"( does not)? contains? text "([^"]*)"$/,
  checkContainsText,
)

Then(/^I expect the page url is( not)? "([^"]*)?"$/, checkUrl)

Then(
  /^I expect the attribute "([^"]*)?" from element "([^"]*)?" is( not)? "([^"]*)?"$/,
  checkAttribute,
)

Then(
  /^I expect the attribute "([^"]*)?" from element "([^"]*)?"( not)? contain "([^"]*)?"$/,
  checkAttributeContains,
)

Then(
  /^I expect the element "([^"]*)?" is( not)? on the page$/,
  checkElementExists,
)

Then(/^I expect the element "([^"]*)?" is( not)? empty$/, checkIsEmpty)

Then(/^I expect the element "([^"]*)?" is( not)? enabled$/, checkElementEnabled)

Then(/^I expect the element "([^"]*)?" has( no)* focus$/, checkHasFocus)

Then(/^I expect the element "([^"]*)?" is( not)? checked$/, checkIsChecked)

Then(
  /^I expect the cookie "([^"]*)?" value is( not)? "([^"]*)?"$/,
  checkCookieValue,
)

Then(/^I expect the cookie "([^"]*)?"( not)? exist?$/, checkCookieExists)

Then(
  /^I resize the browser to (\d+) pixels width and (\d+) pixels height$/,
  resizeScreenSize,
)

Then(
  /^I expect the page title (does not )?contains? "([^"]*)?"$/,
  checkTitleContains,
)

Then(
  /^I expect the page url (does not )?contains? "([^"]*)?"$/,
  checkUrlContains,
)

Then(
  /^I expect the screenshot of "([^"]*)?" matches the web page?$/,
  async function(filename) {
    await checkScreenshot.call(this, filename)
  },
)

Then(
  'I expect the {string} page has no accessibility errors',
  checkAccessibility,
)
