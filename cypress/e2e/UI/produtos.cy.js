/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {
    beforeEach(() => {
        cy.visit('produtos/')
    })

    afterEach(() => {
        cy.get('.woocommerce-message').should('contain', 'adicionado no seu carrinho.')
    })

    it('Deve adicionar produtos ao carrinho', () => {
        cy.addProdutos('Argus All-Weather Tank', 'M', 'Gray')
    });

    
    it('Deve adicionar um novo produto ao carrinho', () => {
        cy.addProdutos('Aero Daily Fitness Tee', 'XS', 'Black')
    });

    
    it('Deve adicionar um novo produto ao carrinho', () => {
        cy.addProdutos('Aether Gym Pant', '33', 'Blue')
    });

});