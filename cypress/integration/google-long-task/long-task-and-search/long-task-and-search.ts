/// <reference types="cypress" />
// @ts-check
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import executeCommand from '../../../common/execute-command';
import { GoogleSearchPage } from '../../../pages/google/google-search-page';
import { GoogleResultsPage } from '../../../pages/google/google-results-page';

Given(/^I execute a long task in my database$/, () => {
  executeCommand('ps >> tux.txt');
   
});

When(/^Press 'Search'$/, () => {
  GoogleSearchPage.pressSearch();
});

Then(/^I have some results$/, () => {
  GoogleResultsPage.expect().toHaveResults();
});
