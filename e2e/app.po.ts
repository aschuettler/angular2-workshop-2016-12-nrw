import { browser, element, by } from 'protractor';

export class Angular2Workshop201612NrwPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bm-root h1')).getText();
  }
}
