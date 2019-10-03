import { getGreeting } from '../support/app.po';

describe('movie-critic', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to movie-critic!');
  });
});
