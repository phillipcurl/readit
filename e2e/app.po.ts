export class ReaditPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('readit-app h1')).getText();
  }
}
