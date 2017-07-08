import { MailBoxPage } from './app.po';

describe('mail-box App', () => {
  let page: MailBoxPage;

  beforeEach(() => {
    page = new MailBoxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
