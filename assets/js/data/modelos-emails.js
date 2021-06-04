export default [
    {
        id: "1",
        cron: "recuperar_senha",
        nivel: 1,
        cat: "RECUPERAR SENHA",
        title: "Recuperação de Senha",
        text: `Olá {{nome_instituicao}}, você solicitou a recuperação de sua senha, 
        segue abaixo sua nova senha: {{senha}}, Caso não tenha sido você quem 
        solicitou a recuperação de senha por favor reencaminhe esse e-mail 
        para nos informando que não foi solicitado. Obrigado `,
    },
    {
        id: "2",
        cron: "paga_fatura",
        nivel: 1,
        cat: "FATRURA PAGA (Quando renova assinatura)",
        title: "Sua Assinatura foi Renovada!",
        text: `Olá {{nome_instituicao}}, seu pagamento da fatura referente ao {{mes_vigente}} 
            está paga. Qualquer necessidade ficamos à disposição, obrigado!`,
    },

    {
        id: "3",
        cron: "falha_fatura",
        nivel: 1,
        cat: "FALHA NO PAGAMENTO DA FATURA {Quando não consegue renovar o pagamento da fatura}",
        title: "Falha no Pagamento da Assinatura",
        text: `Olá {{nome_instituicao}}, seu pagamento da fatura referente ao {{mes_vigente}} 
            falhou, por gentileza tente novamente. Qualquer necessidade ficamos á disposição, obrigado!`,
    },
    {
        id: "4",
        cron: "2_dias",
        nivel: 1,
        cat: "SUA FATURA ESTÁ EM ATRASO 2 DIAS ",
        title: "Fatura em Atraso",
        text: `Olá {{nome_instituicao}}, seu pagamento da fatura referente ao {{mes_vigente}} 
            ainda não foi identificado. Caso já tenha efetuado o pagamento favor desconsiderar 
            essa mensagem. Qualquer necessidade ficamos à disposição, obrigado!`,
    },
    {
        id: "5",
        cron: "7_dias",
        nivel: 1,
        cat: "SUA FATURA ESTÁ EM ATRASO 7 DIAS ",
        title: "Fatura em Atraso",
        text: `Olá {{nome_instituicao}}, sua fatura venceu a {{dias_de_atraso_fatura}}, 
        seu pagamento da fatura referente ao {{mes_vigente}} ainda não foi identificado. 
        
        Caso já tenha efetuado o pagamento favor desconsiderar essa mensagem. 
        
        Qualquer necessidade ficamos à disposição, obrigado!`,

    },
    {
        id: "6",
        cron: "14_dias",
        nivel: 1,
        cat: "SUA FATURA ESTÁ EM ATRASO 14 DIAS ",
        title: "Fatura em Atraso",
        text: `Olá {{nome_instituicao}}, sua fatura venceu a {{dias_de_atraso_fatura}}, 
            seu pagamento da fatura referente ao {{mes_vigente}} ainda não foi identificado. 
            Caso já tenha efetuado o pagamento favor desconsiderar essa mensagem. 
            Qualquer necessidade ficamos à disposição, obrigado!`,

    },
    {
        id: "7",
        cron: "30_dias",
        nivel: 1,
        cat: "SUA FATURA ESTÁ EM ATRASO 30 DIAS {INFORMANDO BLOQUEIO}",
        title: "Fatura atrasada - Conta Bloqueada",
        text: `
            Olá {{nome_instituicao}}, sua fatura venceu a {{dias_de_atraso_fatura}}, 
            seu pagamento da fatura referente ao {{mes_vigente}} ainda não foi identificado.
            Sua conta está atualmente bloqueada. 

            Para liberar sua conta realize o pagamento da fatura acessando seu painel e 
            a renovação ocorrerá automaticamente.

            Caso já tenha efetuado o pagamento favor desconsiderar essa mensagem.

            Qualquer necessidade ficamos à disposição, obrigado!`
    }
]