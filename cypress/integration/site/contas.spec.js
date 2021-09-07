///<reference types="cypress"/> 

import loc from '../../support/locators'

describe('Site Sr Barriga', () =>{

    beforeEach(() =>{
        cy.visit("/login");

        cy.get(loc.LOGIN.EMAIL).type('tamara@teste.com');
        cy.get(loc.LOGIN.SENHA).type('123456');

        cy.get(loc.LOGIN.BTN_BOTAO).click();

        cy.get(loc.MENSAGEM).should('exist');
    })


    it.skip('deve conseguir acessar botão conta', () =>{


        cy.get(loc.MENU.CONFIGURACOES).should('exist');
        cy.get(loc.MENU.CONTAS).click();
        
    })

    it('deve conseguir criar conta sem informar nome ',()=>{
        cy.get(loc.MENU.CONFIGURACOES).click();
        cy.get(loc.MENU.CONTAS).click();
        
        cy.get(loc.CONTAS.BTN_SALVAR).click();

        cy.get(loc.MENSAGEM).should('contain','Informe o nome da conta');
    })

    it('deve conseguir criar conta com sucesso',()=>{
        cy.get(loc.MENU.CONFIGURACOES).click();
        cy.get(loc.MENU.CONTAS).click();
        cy.get(loc.CONTAS.NOME).type('Rita');
        
        cy.get(loc.CONTAS.BTN_SALVAR).click();

        cy.get(loc.MENSAGEM).should('contain','Conta adicionada com sucesso!');


    })

    it('deve conseguir apresentar contas no listar',()=>{
        cy.get(loc.MENU.CONFIGURACOES).click();
        cy.get(loc.CONTAS.LISTAR).click();

        cy.get('body').should('contain','conta');
    
    })
    it.skip('deve conseguir alterar uma conta',() =>{


        cy.get(loc.MENU.CONFIGURACOES).click();
        cy.get(loc.MENU.CONTAS).click();


        let titular = "tati";
        clicaralterarConta(" tati");
        cy.get(loc.CONTAS.NOME).clear().type('katy');

        cy.get(loc.CONTAS.BTN_BOTAO).click();

       // cy.get('.alert').should('contain','Conta alterada com sucesso!');

    
        //[@id="tabelaContas"]/tbody/tr/td[2]/a[1]/span --
        
        //cy.xpath(`//td[text()='${titular}']/../td[2]/a[1]/span`).click();
        // delete - cy.xpath('//td[text()="Aron Piper"]/../td[2]/a[2]/span').click();


        //cy.get('#tabelaContas').contains('Justin').parent();
        ////td[text()='']/td/span
       // cy.xpath('[href="/removerConta?id=758631"]').click();
       // cy.xpath('td[text()="Aron Piper"]/td/span').click();
        
        //cy.get('td.tabelaContas').contains('alterando conta').should('have.attr','href','/editarConta');
       


    })

    function clicaralterarConta(titular){
        cy.xpath(`//td[text()='${titular}']/../td[2]/a[1]/span`).click();

    }

    it.skip('deve conseguir remover uma conta',()=>{

        cy.get(loc.MENU.CONFIGURACOES).click();
        cy.get(loc.MENU.CONTAS).click();

        let titular = "tati";
        clicarRemoverConta("Camila");

        //cy.get('#tabelaContas');
        //cy.get('[href="/removerConta?id=758631"] > .glyphicon').click();
        //cy.get('tbody > :nth-child(1) > :nth-child(2)').click();
       // cy.get('[href="/removerConta?id=780861"] > .glyphicon').click();


        cy.get(loc.MENSAGEM).should('contain','Conta removida com sucesso!');
      

    })
    function clicarRemoverConta(titular){
        cy.xpath(`//td[text()='${titular}']/../td[2]/a[2]/span`).click();

    }
    

    it('deve conseguir criar movimentação e validar mensagens de erro ',()=> {

        //localizar opcao criar movimentação
        //clicar em salvar 
        //deve validar mensagens erro

        cy.get(loc.MENU.MOVIMENTACAO).click();
        cy.get(loc.MENU.BTN_MOVIMENTACAO).click();

        //validando mensagem erro

        cy.get(loc.MENSAGEM).should('contain','Data da Movimentação é obrigatório','Data do pagamento é obrigatório','Descrição é obrigatório','Interessado é obrigatório','Valor é obrigatório');

    })
    it('deve enviar campo valor diferente de numero- validar mensagem de erro',()=> {
        //criar movimentação
        //enviar campo valor : caracteres != numero
        //validar mensagem de erro

        cy.get(loc.MENU.MOVIMENTACAO).click();
        cy.get(loc.MOVIMENTACAO.TIPO);
        cy.get(loc.MOVIMENTACAO.DATA_TRANSACAO).type('02/09/2021');
        cy.get(loc.MOVIMENTACAO.DATA_PAGAMENTO).type('20/10/2021');
        cy.get(loc.MOVIMENTACAO.DESCRICAO).type('teste');
        cy.get(loc.MOVIMENTACAO.INTERESSADO).type('seu Teste');
        cy.get(loc.MOVIMENTACAO.VALOR).type('#%*');
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click();

        cy.get(loc.MENSAGEM).should('contain','Valor deve ser um número');

    })
    it('deve conseguir criar uma movimentação - validar mensagem de sucesso', () => {
        //criar movimentaçao
        //validar msg de sucesso

        cy.get(loc.MENU.MOVIMENTACAO).click();
        cy.get(loc.MOVIMENTACAO.TIPO);
        cy.get(loc.MOVIMENTACAO.DATA_TRANSACAO).type('20/04/2021');
        cy.get(loc.MOVIMENTACAO.DATA_PAGAMENTO).type('20/04/2021');
        cy.get(loc.MOVIMENTACAO.DESCRICAO).type('teste');
        cy.get(loc.MOVIMENTACAO.INTERESSADO).type('seu Teste');
        cy.get(loc.MOVIMENTACAO.VALOR).type('10000');
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click();

        cy.get(loc.MENSAGEM).should('contain','Movimentação adicionada com sucesso!');
    })

    it('deve conseguir validar movimentacao da conta cadastrada',() =>{
        //acessar resumo mensal
        //mapear os elementos mes e ano e botao

        cy.get(loc.MENU.RESUMOMENSAL).click();
        cy.get(loc.RESUMOMENSAL.MESa).select('Agosto');
        cy.get(loc.RESUMOMENSAL.ANO).select('2021');
        cy.get(loc.RESUMOMENSAL.BTN_BUSCAR).click;
        
        cy.get(loc.MENSAGEM).click();

        cy.get( loc.MENSAGEM).should('contain','descricao');

        
    

        
    })

    




})