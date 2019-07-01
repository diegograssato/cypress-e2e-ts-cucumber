import { GoogleResultsPage } from "./google-results-page";

const SEARCH_FIELD = 'input[type=text]';
const SEARCH_BUTTON = 'input[type=submit]';
const SEARCH_TEXT = 'Pesquisa Google';
const FEEL_LUCKY_BUTTON = 'input[type=submit]';
const FEEL_LUCKY_TEXT = 'suerte';

export class GoogleSearchPage {
  static visit() {
    cy.visit('/');
  }

  static type(query: any) {
    cy.get(SEARCH_FIELD) // 2 seconds
      .type(query).debug();
  }

  static pressSearch() {
    cy.get(SEARCH_BUTTON).contains(SEARCH_TEXT)
      .click().debug();
      
    //cy.matchImageSnapshot();
    return new GoogleResultsPage;
  }

  static pressFeelLucky() {
    cy.get(FEEL_LUCKY_BUTTON).contains(FEEL_LUCKY_TEXT)
      .click();
  }
}