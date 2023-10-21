/// <reference types="cypress"/>


describe('', () => {

    beforeEach('Visit Home Page', () => {
        cy.visit('/about')
    })
    it('Basic Operations', () => {
        cy.getById('contact-input-message').as('msgInput')

        cy.get('@msgInput').focus().blur()
        cy.get('@msgInput')
            .parent()
            .should('have.attr', 'class') //should yields class attribute instead of parent dom element
            .and('match', /invalid/)

        //cy.screenshot()
        cy.get('@msgInput')
            .parent()
            .should((el) => {
                expect(el.attr('class')).not.to.be.undefined
                expect(el.attr('class')).contains('invalid')
            })
        cy.get('@msgInput').type('asdf')
        // contact-input-message
        // contact-input-name
        // contact-input-email

        
        //cy.screenshot()
    })

})