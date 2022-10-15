# Blogs API

Um projeto que faz uma API RestFUL para um Blog, usando Node.js e conceitos de estrutura de Software MSC com CRUD completo.


## 🚀 Sobre mim
Eu sou uma pessoa desenvolvedora fullstack jr, desenvolvo os meus projetos frontend com HTML, CSS, Javascript e React e no Backend com Node usando o Express e Typescript.

## Aprendizados

O desafio desse projeto foi a minha primeira utilização de uma ORM, nesse projeto usamos o Sequelize para fazer o acesso ao banco de dados.


## Stack utilizada

**Back-end:** Node, Express, Docker, Git, Javascript, MySQL e ORM - Sequelize.


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env
O projeto inclui um arquivo chamado '.env.exemple', edite o nome para '.env', o arquivo dotenv está incluído no .gitignore e não subirá para o repositório caso tenham modificações ou dados sensíveis.
O subir o arquivo .env para o repositório é uma má prática de segurança, o arquivo '.env.exemple' existe por fins educacionais e para o bom funcionamento do projeto com nomes e dados genéricos.

## Documentação
* Para instalação do [Docker](https://docs.docker.com/desktop/install/windows-install/) em sua máquina
* Para instalação do [Docker Compose](https://docs.docker.com/compose/install/)
* Para ver a imagem utilizada no projeto [MySQL](https://hub.docker.com/layers/library/mysql/8.0.23/images/sha256-355617769102e9d2ebb7d5879263a12d230badb7271c91748b2c7b0ac6971083?context=explore)



## Instalação

Instale o meu projeto clonando do o repositório pela chave SSH.

```bash
  $ git clone git@github.com:IanDeSa/BlogsAPI.git
```
Entre na pasta do projeto e instale as dependências do projeto com npm.
```bash
  $ cd BlogsAPI
  $ npm install
```
O projeto usa docker e docker-compose, agora suba o container com o docker-compose
```bash
  $ docker-compose up -d
```
Para o bom funcionamento do projeto, instale as dependências dentro do container.
```bash
  $ docker exec -it blogs_api bash
  $ npm install
```
O uso de scripts via npm devem ser feitos dentro do container docker via bash.
Sempre que quiser acessar o bash do docker, o comando a seguir:
```bash
  $ docker exec -it blogs_api bash
```

## Uso do Projeto
Para usar o projeto siga os passos:
* lembre de usar os scripts dentro do container

Criar o banco de dados e popular com o Sequelize via migrations e seed.

```
$ npm prestart
$ npm seed
```
Para dropar o banco de dados.
```
$ npm drop
```
Para iniciar o projeto.
```
$ npm start
```
## Rodando os testes

O projeto foi desenvolvido usando TDD, mas não foi incluído no projeto final. Caso novos testes unitários e de integração voltem a ser incluídos, o script para rodar testes é:

```bash
  npm run test
```


## Melhorias

O projeto está em construção, algumas possíveis melhorias são futuras implementações de outras rotas e mais possibilidades de buscas.
Outra melhoria é a inclusão de testes unitários e testes de intregração.
## Autor

- [@IanDeSa](https://github.com/IanDeSa)


## Feedback

Se você tiver algum feedback, por favor nos deixe saber por meio do email: contato.iansantos@gmail.com
