import { Angular2LeafletPage } from './app.po';

describe('angular2-leaflet App', function() {
  let page: Angular2LeafletPage;

  beforeEach(() => {
    page = new Angular2LeafletPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
