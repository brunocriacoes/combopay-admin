[] perfil alterar senha e dados mostrar mensagem de sucesso


API Instituição add campo CEP



error ao atualizar 
PUT v1/instituicao/1 {"domain_person":"person","bairro":"Jennyfer Bypass","cidade":"Port Nikitachester","cnpj":"614545301","complemento":"Jerry Center","dominio":"gleichner.com","dominio_personalizado":"kautzer.com","email":"raynor.carlos@example.net","estado":"Minnesota","id":1,"nome_fantasia":"Pierre","razao_social":"Yessenia Jones","rua":"Nikolaus Ville","subdominio":"hessel.com","telefone":"+12525089922"}
RES {"status":"error","message":"SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'nome_fantasia' cannot be null (SQL: update `instituicao` set `nome_fantasia` = ?, `instituicao`.`updated_at` = 2021-05-18 18:15:39 where `id` = 1)"}

