# Comissão de Recepção - Site

Esse repositório contém todo o código fonte do site estático da comissão de recepção hospedado [aqui](https://recepcao.ime.usp.br/).

## Tecnologias Usadas
  * [Yarn](https://yarnpkg.com/)
  * [Nuxt.js](https://nuxtjs.org/)
  * [Vuetify.js](https://vuetifyjs.com/en/)

## Fluxo de trabalho
  Esse repositório não aceita commits diretamente na branch principal, para contribuir para o desenvolvimento você deve:
  * Criar uma nova branch (caso não saiba como fazer isso, olhe [aqui](#Dicas))
  * Abrir um pull request
  * Fazer os seus commits nessa nova branch
  * Pedir para alguém revisar o pull request (Obrigatório no mínimo uma revisão)
  * Passar no teste de linter (Não é obrigatório o teste de linter estar passando para o pull request ser aprovado, mas para manter uma boa pŕatica, tente sempre manter o teste de linter passando antes de aceitar o pull request)
  * Aceitar o pull request

## Pré-requisitos
  Antes de fazer qualquer um dos passoss seguintes, você deve instalar no seu computador o [node.js](https://nodejs.org/en/), NPM (normalmente já vem junto com o node.js) e o Yarn. Após isso, siga os seguintes passos:
  * Clone o repositório
  * Na pasta raiz do projeto, execute:
    ```bash
    $ yarn install
    ```
    Esse commando irá instalar todas as dependências necessárias para você.
  
## Como desenvolver?
### Servidor de desenvolvimento
  * Na pasta raiz do projeto, execute:
    ```bash
    $ yarn dev
    ```
    Esse comando irá executar um servidor de desenvolvimento que atualiza automaticamente conforme você edita os arquivos, normalmente no link `localhost:3000`.

### Linter
O Linter é uma ferramenta de análise de código para ajudar a manter um código mais organizado e limpo, por isso, tente sempre ficar ligado nos `warnings`.

Para verificar os problemas de lint,execute:
```bash
$ yarn lint
```

Para corrigir automaticamente os problemas de lint, execute:
```bash
$ yarn lint --fix
```
Obs:
  * Note que nem todos os problemas de lint são resolvidos por esse comando.
  * Execute esse comando sempre que possível para o teste de linter não falhar no seu pull request.

## Como atualizar o site?

## Dicas
### Como criar uma nova branch?
  Para trabalhar em uma nova branch, execute:
  ```bash
  $ git checkout -b nome_da_branch
  ```
  (Esse comando irá criar e mudar para a nova branch automaticamente).
  
  Após criar a branch, para envia-la para o repositório remoto (github) execute o seguinte comando:
  ```bash
  $ git push -u origin nome_da_branch
  ```
  Depois disso é só abrir seu pull request.
  
### Como ver todas as branches?
Execute:
  ```bash 
  $ git branch
  ```
### Como mudar de branch?
Execute:
  ```bash 
  $ git checkout nome_da_branch
  ```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
