import Cypress from 'cypress';

declare global {
    namespace Cypress {
        interface Chainable {
            matchImageSnapshot: (options?: any) => void
        }
    }
}