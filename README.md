<h1 align=center>Nodesequelizeblog</h1>
<p align=center>O projeto Nodesequelizeblog mostra a estrutura para criação de um CRUD de SQL no fornt-end.</p>

## Getting Started

Para iniciar o projeto é necessário os seguintes programas:
- [nodeJS - para a manipulação dos pacotes javascript](https://nodejs.org/en/download/) 
- [IDE VScode (opcional) - para o desenvolvimento do projeto](https://code.visualstudio.com/download)
- [PostgreSQL (opcional) - para a criação e gerenciamento do banco de dados](https://www.postgresql.org/download/)

Além de um banco de dados préviamente criado, com as tabelas:

1. postagens
   - titulo
   - conteudo
2. usuarios
   - nome
   - sobrenome
   - idade
   
## Desenvolvimento

Para iniciar o desenvolvimento é necessário clonar o projeto do Github para um diretório de sua preferência:

` cd diretório`

`git clone git@github.com:Sallito/nodeSequelizeBlog.git`
   

## Construção

É necessário baixar as dependências do projeto no diretório raiz com o código:

`npm i`

## Features
O projeto pode ser usado como modelo para iniciar o desenvolvimento de um projeto web fullstack. Ele também demostra as configurações e comandos necessários para a manipulação de registros SQL via frontend.
## Configuração
É necessário configurar o arquivo `/models/db.js` na IDE e preencher os campos para a conexão com seu banco de dados:

![alt text](https://github.com/Sallito/nodeSequelizeBlog/blob/master/readme/nodesequelizeblog.png "Conexão com PostgreSQL")

## Testes
Para testar, basta iniciar o arquivo index.js pelo node:

`node index.js`

Será retornado mensagem de êxito na conexão ou de erro com especificações

Por fim basta abrir o browser em `localhost:8081`.

## Contribuições
Contribuições são sempre bem vindas! Para contribuir, favor não esquecer de documentar as alterações.
## Licença
Não se aplica
