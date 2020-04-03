import {Given} from 'cucumber'
import checkAccessibility from '../support/check/checkAccessibility'
import checkAttribute from '../support/check/checkAttribute'
import checkAttributeContains from '../support/check/checkAttributeContains'
import checkContainsText from '../support/check/checkContainsText'
import checkElementEnabled from '../support/check/checkElementEnabled'
import checkElementExists from '../support/check/checkElementExists'
import checkElementValue from '../support/check/checkElementValue'
import checkElementVisible from '../support/check/checkElementVisible'
import checkIsEmpty from '../support/check/checkIsEmpty'
import checkUrl from '../support/check/checkUrl'
import checkHasFocus from '../support/check/checkHasFocus'
import checkIsChecked from '../support/check/checkIsChecked'
import checkCookieExists from '../support/check/checkCookieExists'
import checkCookieValue from '../support/check/checkCookieValue'
import checkScreenshot from '../support/check/checkScreenshot'
import openUrl from '../support/action/openUrl'
import checkTitleContains from '../support/check/checkTitleContains'
import checkUrlContains from '../support/check/checkUrlContains'

Given('the url {string-env} is opened', async function (url) {
  await openUrl.call(this, url)
})

Given(
  'the url {string-env} with user agent {string} is opened',
  async function (url, userAgent) {
    await openUrl.call(this, url, userAgent)
  },
)

Given('the url {string-env} with device {string} is opened', async function (
  url,
  device,
) {
  await openUrl.call(this, url, null, device)
})

Given(/^the element "([^"]*)" is( not)? visible$/, async function (
  selector,
  not,
) {
  await checkElementVisible.call(this, selector, not)
})

Given(
  /^the element "([^"]*)" is( not)? visible after "([^"]*)" seconds$/,
  async function (selector, not, seconds) {
    await checkElementVisible.call(this, selector, not, seconds)
  },
)

Given(/^the element "([^"]*)?" value is( not)? "([^"]*)?"$/, checkElementValue)

Given(/^the page url is( not)? "([^"]*)?"$/, checkUrl)

Given(
  /^the attribute "([^"]*)?" from element "([^"]*)?" is( not)? "([^"]*)?"$/,
  checkAttribute,
)

Given(
  /^the attribute "([^"]*)?" from element "([^"]*)?"( not)? contain "([^"]*)?"$/,
  checkAttributeContains,
)

Given(
  /^the element "([^"]*)"( does not)? contains? text "([^"]*)"$/,
  checkContainsText,
)

Given(/^element "([^"]*)?" is( not)? on the page$/, checkElementExists)

Given(/^the element "([^"]*)?" is( not)? empty$/, checkIsEmpty)

Given(/^the element "([^"]*)?" is( not)? checked$/, checkIsChecked)

Given(/^the element "([^"]*)?" has( no)* focus$/, checkHasFocus)

Given(/^the element "([^"]*)?" is( not)? enabled$/, checkElementEnabled)

Given(/^the cookie "([^"]*)?" value is( not)? "([^"]*)?"$/, checkCookieValue)

Given(/^the cookie "([^"]*)?"( not)? exist?$/, checkCookieExists)

Given(/^the page title (does not )?contains? "([^"]*)?"$/, checkTitleContains)

Given(/^the page url (does not )?contains? "([^"]*)?"$/, checkUrlContains)

Given(/^the screenshot of "([^"]*)?" matches the web page?$/, async function (
  filename,
) {
  await checkScreenshot.call(this, filename)
})

Given('the {string} page has no accessibility errors', checkAccessibility)
