import { DatabidingPage } from './app.po';

describe('databiding App', () => {
  let page: DatabidingPage;

  beforeEach(() => {
    page = new DatabidingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
