/// <reference types="cypress" />

describe('Teste da funcionalidade Cupom', () => {

    // Autenticação da API:
    // Usuário: admin_ebac
    // Senha: @admin!&b@c!2022
    // Authorization: Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy
    

    // let token

    // before(() => {
    //     cy.token('admin_ebac', '@admin!&b@c!2022').then(tkn => {
    //         token = tkn
    //     })
    // });

    it('Deve listar cupons cadastrados', () => {
        cy.request({
            method: 'GET',
            url: 'wp-json/wc/v3/coupons',
            headers: {authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'}
        }).then((response) => {
            expect(response.status).to.equal(200)
        })
    });

    it('Deve cadastrar os cupons campos obrigattórios', () => {
        cy.request({
            method: 'POST',
            url: 'wp-json/wc/v3/coupons',
            body: {
                "code": "CupomLarissa11",
                "amount": "10",
                "discount_type": "fixed_cart",
                "description": "Cupom de desconto Larissa"
            },
            headers: {authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'}
        }).then((response) => {
            expect(response.status).to.equal(201)
        })
    }); 
});