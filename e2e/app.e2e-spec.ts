import { Angular2Rc5MaterialWebpackPage } from './app.po';

describe('angular2-rc5-material-webpack App', function() {
  let page: Angular2Rc5MaterialWebpackPage;

  beforeEach(() => {
    page = new Angular2Rc5MaterialWebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
