
// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../../support" />

// check this file using TypeScript if available
// @ts-check
import { GoogleResultsPage } from "./google-results-page";

const SEARCH_FIELD = 'input[type=text]';
const SEARCH_BUTTON = 'input[type=submit]';
const SEARCH_TEXT = 'Pesquisa Google';
const FEEL_LUCKY_BUTTON = 'input[type=submit]';
const FEEL_LUCKY_TEXT = 'suerte';

export class GoogleSearchPage {

  


  static visit() {

    const sizes = [
      ['iphone-6', 'landscape'],
      'iphone-6',
      'ipad-2',
      ['ipad-2', 'landscape'],
      [1920, 1080],
    ];
    
    // sizes.forEach((size) => {
      
    //     it(`Should match previous screenshot default Page' When '${size}' resolution`, () => {
    //       cy.setResolution(size);
    //       cy.visit('/');
    //       cy.matchImageSnapshot();
    //     });
      
    // });
    cy.changeResolution(sizes[0]);
    cy.visit('/');
    //cy.matchImageSnapshot();
  }

  static type(query: any) {
    cy.get(SEARCH_FIELD) // 2 seconds
      .type(query)
  }

  static pressSearch() {

    
    cy.get(SEARCH_BUTTON).contains(SEARCH_TEXT)
      .click()
      
    //cy.matchImageSnapshot();
    return new GoogleResultsPage;
  }

  static pressFeelLucky() {
    cy.get(FEEL_LUCKY_BUTTON).contains(FEEL_LUCKY_TEXT)
      .click();
  }
}