# Projeto TMDB

Este projeto consiste na criação de um site, consumindo a API do The Movie Database (conhecido como TMDb) que é uma base de dados grátis
e de código aberto sobre Filmes e Séries de TV. O site deve exibir uma lista de filmes e uma tela com os detalhes do filme escolhido. 
Ele conta também com um campo de buscas e um espaço para inserir e visualizar comentários. 


## Preparando o Ambiente ⚙️

 1. Instalar o [Node.js](https://nodejs.org/en/) 
 2. Instalar o [VS Code](https://code.visualstudio.com/) 
 3. Baixar imagem do Mysql no [Docker](https://hub.docker.com/_/mysql)
 4. Solicitar a APY KEY e consultar a [Documentação API TMDB](https://www.themoviedb.org/documentation/api)

## Configurando o Mysql com Docker 🛠️

- Criar a pasta principal do projeto, dentro dela uma pasta de nome **api** e dentro dela crie outra pasta de nome **db**
- Dentro da pasta **db** crie o arquivo Dockerfile do mysql
- Navegue até a pasta principal, abra o terminal e execute os seguintes comandos:
``` bash
docker build -t mysql-image -f api/db/Dockerfile .
docker run -d --rm --name mysql-container mysql-image
``` 
Este arquivos vão respectivamente baixar e rodar a imagem mysql.
- Na pasta **db** , crie um scrip.sql. Ele será usado para criar o banco de dados
- No terminal execute este comando para realizar a criação do banco de dados:
```bash 
docker exec -i mysql-container2 mysql -uSeuUsuaro -pSuaSenha < api/db/script.sql
```
- Para conferir o seu banco de dados utilize os seguintes comandos:
```bash 
docker exec -it mysql-container2 /bin/bash
mysql -uSeuUsuaro -pSuaSenha
USE nomeDoBanco
SELECT * FROM nomeDaTabela
```

## Configurando o Node 🛠️

Navegue até a pasta **api**, abra o terminal e execute os seguintes comandos:
``` bash
npm init -y
npm install  --save-dev nodemon
npm instal --save express mysql
``` 
No package.json, inserir o código:
```bash 
"start": "nodemon ./index"
```
Dessa forma, para iniciar o node, basta executar o comando:
```bash 
npm start
```

## Arquivos Utilizados 

1. **index.js** Com as infomações de rotas e conexões
2. **script.js** Backend da pagina inicial 
3. **detalhes.js** Backend da tela de detalhes
4. **movies.html** Frontend da pagina inicial
5. **detalhes.html** Frontend da pagina de detalhes
6. **detalhes.css** e **style.css** Configuração CSS


