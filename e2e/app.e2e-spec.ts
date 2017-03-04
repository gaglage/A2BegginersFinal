import { A2BeginnersFinalPage } from './app.po';

describe('a2-beginners-final App', function() {
  let page: A2BeginnersFinalPage;

  beforeEach(() => {
    page = new A2BeginnersFinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
