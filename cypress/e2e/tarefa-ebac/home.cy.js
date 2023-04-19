/// <reference types="cypress" />

describe('Testes das funcionalidades da agenda de contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve incluir um novo contato na agenda', () => { 
        cy.get('input[type="text"]').type('Leonardo Sibuya')
        cy.get('input[type="email"]').type('leonardosibuya@teste.com')
        cy.get('input[type="tel"]').type('1112345678')

        cy.get('.adicionar').click()
    });

    it('Deve alterar os dados de um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()

        cy.get('input[type="text"]').clear()
        cy.get('input[type="text"]').type('Leonardo Rodrigues')

        cy.get('input[type="email"]').clear()
        cy.get('input[type="email"]').type('leonardo@testeDois.com')

        cy.get('input[type="tel"]').clear()
        cy.get('input[type="tel"]').type('11998701385')

        cy.get('.alterar').click()
    })

    it('Deve remover um contato existente', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
})