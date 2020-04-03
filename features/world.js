import {setWorldConstructor, setDefaultTimeout} from 'cucumber'
import puppeteer from 'puppeteer'
import scope from './support/scope'

const World = function() {
  scope.driver = puppeteer
  scope.context = {}
}

setDefaultTimeout(60 * 1000)
setWorldConstructor(World)
