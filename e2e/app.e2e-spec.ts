import { KlaScrumPokerPage } from './app.po';

describe('kla-scrum-poker App', () => {
  let page: KlaScrumPokerPage;

  beforeEach(() => {
    page = new KlaScrumPokerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
