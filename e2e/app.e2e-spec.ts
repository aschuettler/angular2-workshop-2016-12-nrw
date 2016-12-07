import { Angular2Workshop201612NrwPage } from './app.po';

describe('angular2-workshop-2016-12-nrw App', function() {
  let page: Angular2Workshop201612NrwPage;

  beforeEach(() => {
    page = new Angular2Workshop201612NrwPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bm works!');
  });
});
