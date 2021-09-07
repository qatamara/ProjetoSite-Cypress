const locators ={
 LOGIN:{
     EMAIL: '#email',
     SENHA:'#senha',
     BTN_BOTAO:'.btn'
     
    },
    MENU:{
        CONFIGURACOES:'.dropdown-toggle',
        CONTAS:'.dropdown-menu > :nth-child(1) > a',
        MOVIMENTACAO:'#navbar > ul > li:nth-child(3) > a',
        BTN_MOVIMENTACAO:'.btn',
        RESUMOMENSAL:':nth-child(4) > a'

    },
    CONTAS:{
        NOME:'#nome',
        BTN_SALVAR:'.btn',
        LISTAR:'.dropdown-menu > :nth-child(2) > a'

    },
    MOVIMENTACAO:{
        TIPO:'#tipo',
        DATA_TRANSACAO:'#data_transacao',
        DATA_PAGAMENTO:'#data_pagamento',
        DESCRICAO:'#descricao',
        INTERESSADO:'#interessado',
        VALOR:'#valor',
        BTN_SALVAR:'.btn'

    },
    RESUMOMENSAL:{
        MES:'#mes',
        ANO:'#ano',
        BTN_BUSCAR:'btn'



    },
    MENSAGEM:'.alert'
}

export default locators;