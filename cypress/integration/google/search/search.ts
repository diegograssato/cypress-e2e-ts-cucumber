/// <reference types="cypress" />
// @ts-check
import { When, Then } from "cypress-cucumber-preprocessor/steps";

import { GoogleSearchPage } from '../../../pages/google/google-search-page';
import { GoogleResultsPage } from '../../../pages/google/google-results-page';
 
When(/^Press 'Search'$/, () => {

  cy.fixture('user.json', 'utf8').then((usersJSON) => {
    
  }); 
  GoogleSearchPage.pressSearch();
});

Then(/^I have some results$/, () => {
  GoogleResultsPage.expect().toHaveResults();
});
