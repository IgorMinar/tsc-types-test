import * as webdriver from 'selenium-webdriver';
import * as protractor from 'protractor';
import * as fse from 'fs-extra';

let c = new webdriver.Command("hello");
let we = new protractor.WebElement(null, null);

fse.appendFile("lala", "baba");
