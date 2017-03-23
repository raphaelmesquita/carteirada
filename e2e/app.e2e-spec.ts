import { CarteiradaPage } from './app.po';

describe('carteirada App', () => {
  let page: CarteiradaPage;

  beforeEach(() => {
    page = new CarteiradaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
