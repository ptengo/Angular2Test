import { FirstdeitsPage } from './app.po';

describe('firstdeits App', function() {
  let page: FirstdeitsPage;

  beforeEach(() => {
    page = new FirstdeitsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
