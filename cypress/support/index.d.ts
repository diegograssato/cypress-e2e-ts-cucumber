/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * Change resolution
         * @example
         * cy.changeResolution(10)
         */
        changeResolution(size: any): Chainable<any>
    }
}