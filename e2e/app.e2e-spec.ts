import { BooksProjPage } from './app.po';

describe('books-proj App', () => {
  let page: BooksProjPage;

  beforeEach(() => {
    page = new BooksProjPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
