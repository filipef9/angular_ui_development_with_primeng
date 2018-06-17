import { PrimengAngularcliSetupPage } from './app.po';

describe('primeng-angularcli-setup App', () => {
  let page: PrimengAngularcliSetupPage;

  beforeEach(() => {
    page = new PrimengAngularcliSetupPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
