import { Ng2IqSelect2DemoPage } from './app.po';

describe('ng2-iq-select2-demo App', function() {
  let page: Ng2IqSelect2DemoPage;

  beforeEach(() => {
    page = new Ng2IqSelect2DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
