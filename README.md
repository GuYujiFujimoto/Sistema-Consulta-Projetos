Entrega Grupo 26

Sistema de Consulta de Projetos

PROJETO INTEGRADOR: ANÁLISE DE SOLUÇÕES INTEGRADAS PARA ORGANIZAÇÕES

Vídeo: https://drive.google.com/file/d/1KtFYh4BfTsYFYFhdb-ayb9keuF8NN0xC/view?usp=sharing

# Plataforma de Consulta de Projetos - Vivo/Telefônica

Este é um sistema web desenvolvido para consulta de projetos internos da Vivo/Telefônica, com foco em acessibilidade, segurança e eficiência na busca por informações de projetos de telecomunicações.

Funcionalidades:

     Autenticação de Usuários: sistema de login simples com e-mail e senha
     Busca Inteligente: pesquisa por ID, nome ou palavras-chave do projeto
     Exibição Dinâmica: resultados apresentados diretamente na interface após a consulta.
     Conexão com Banco de Dados: integração com PostgreSQL para persistência dos dados.

Tecnologias:

     Frontend: HTML, CSS, JavaScript
     Backend: Node.js, Express
     Banco de dados: PostgreSQL

## Estrutura do Projeto

Pré-requisitos:

     - Node.js e npm instalados
     - PostgreSQL instalado e configurado
     - Um banco de dados criado com a tabela projetos (e opcionalmente usuarios para login)

## Como Executar Localmente

1. Clone o projeto:
   ```bash
   git clone https://github.com/seuusuario/projeto-vivo.git
   cd projeto-vivo

2. Instale as dependências:
   ```bash
   npm install

3. Configure o banco de dados PostgreSQL:

       Crie o banco de dados e a tabela projetos com colunas:

        CREATE TABLE projetos (
            id_projeto SERIAL PRIMARY KEY,
            nome TEXT NOT NULL,
            descricao TEXT NOT NULL
        );

        Crie a tabela usuarios:

        CREATE TABLE usuarios (
            id SERIAL PRIMARY KEY,
            email TEXT UNIQUE NOT NULL,
            senha TEXT NOT NULL
        );

4. Configure o arquivo .env com sua URL do banco:

       DATABASE_URL=postgres://seu_usuario:sua_senha@localhost:5432/projetovivo

5. Inicie o servidor:

       node server.js

Uso
     
     Acesse o aplicativo no navegador.
     Abra o navegador e acesse a URL onde o servidor está rodando.

Equipe   
    
    GUSTAVO YUJI DE ALMEIDA FUJIMOTO
    JOÃO VICTOR KELSON
    ELLEN CAMARGO CATTANEO
    ADILVANIO BARBOSA RODRIGUES


 
