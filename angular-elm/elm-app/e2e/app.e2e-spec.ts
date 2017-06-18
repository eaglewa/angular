import { ElmAppPage } from './app.po';

describe('elm-app App', () => {
  let page: ElmAppPage;

  beforeEach(() => {
    page = new ElmAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
