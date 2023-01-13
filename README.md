# Sumário

- [Habilidades](#habilidades)

- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
  - [Data de entrega](#data-de-entrega)

- [Instruções para entregar seu projeto](#instruções-para-entregar-seu-projeto)
  - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)

- [Como Desenvolver](#como-desenvolver)
  - [Análise Estática](#análise-estática)
  - [Instruções para restaurar o banco de dados commerce](#instruções-para-restaurar-o-banco-de-dados-commerce)
  - [Implementações técnicas](#implementações-técnicas)
  - [Linter](#linter)

- [Boas vindas ao repositório do projeto de MongoDB Commerce!](#boas-vindas-ao-repositório-do-projeto-de-mongodb-commerce)
- [Sumário](#sumário)
- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
    - [⚠️ É importante que seus arquivos tenham exatamente estes nomes! ⚠️](#️-é-importante-que-seus-arquivos-tenham-exatamente-estes-nomes-️)
  - [Data de Entrega](#data-de-entrega)
- [Instruções para entregar seu projeto](#instruções-para-entregar-seu-projeto)
    - [Antes de começar a desenvolver:](#antes-de-começar-a-desenvolver)
  - [- Volte até a página de _Pull Requests_ do repositório e confira que o seu _Pull Request_ está criado](#--volte-até-a-página-de-pull-requests-do-repositório-e-confira-que-o-seu-pull-request-está-criado)
    - [Durante o desenvolvimento](#durante-o-desenvolvimento)
- [Como Desenvolver](#como-desenvolver)
    - [Análise Estática](#análise-estática)
    - [Instruções para restaurar o banco de dados `commerce`](#instruções-para-restaurar-o-banco-de-dados-commerce)
    - [Implementações técnicas](#implementações-técnicas)
    - [Linter](#linter)
- [Requisitos do projeto](#requisitos-do-projeto)
    - [1 - Retorne a quantidade de documentos inseridos na coleção `produtos`.](#1---retorne-a-quantidade-de-documentos-inseridos-na-coleção-produtos)
    - [2 - Ordene a coleção `produtos` pela quantidade de lanches vendidos em ordem crescente e mostre apenas o nome e quantidade de lanches vendidos.](#2---ordene-a-coleção-produtos-pela-quantidade-de-lanches-vendidos-em-ordem-crescente-e-mostre-apenas-o-nome-e-quantidade-de-lanches-vendidos)
    - [3 - Retorne o lanche mais vendido e mostre apenas o nome e quantidade de lanches vendidos.](#3---retorne-o-lanche-mais-vendido-e-mostre-apenas-o-nome-e-quantidade-de-lanches-vendidos)
    - [4 - Retorne os lanches que tiveram vendas maiores que `50` e menores que `100`. Mostre apenas o nome e quantidade de lanches vendidos. Ordene por quantidade de lanches vendidos em ordem crescente.](#4---retorne-os-lanches-que-tiveram-vendas-maiores-que-50-e-menores-que-100-mostre-apenas-o-nome-e-quantidade-de-lanches-vendidos-ordene-por-quantidade-de-lanches-vendidos-em-ordem-crescente)
    - [5 - Retorne o `nome`, as `curtidas` e `vendidos` dos lanches que tiveram quantidade de `curtidas` igual a `36` ou tenham a quantidade de vendas igual a `85`.](#5---retorne-o-nome-as-curtidas-e-vendidos-dos-lanches-que-tiveram-quantidade-de-curtidas-igual-a-36-ou-tenham-a-quantidade-de-vendas-igual-a-85)
    - [6 - Retorne o `nome` e `curtidas` dos lanches que tiveram curtidas maiores que `10` e menores que `100`.](#6---retorne-o-nome-e-curtidas-dos-lanches-que-tiveram-curtidas-maiores-que-10-e-menores-que-100)
    - [7 - Retorne o `nome` e `vendidos` dos lanches que tenham sido `vendidos` uma quantidade diferente de `50` e que o campo `tag` não exista.](#7---retorne-o-nome-e-vendidos-dos-lanches-que-tenham-sido-vendidos-uma-quantidade-diferente-de-50-e-que-o-campo-tag-não-exista)
    - [8 - Delete os lanches que tenham menos de `50` `curtidas` e retorne o `nome` dos lanches que restaram no banco.](#8---delete-os-lanches-que-tenham-menos-de-50-curtidas-e-retorne-o-nome-dos-lanches-que-restaram-no-banco)
    - [9 - Retorne o `nome` de todos os lanches que possuam `calorias` abaixo de `500`.](#9---retorne-o-nome-de-todos-os-lanches-que-possuam-calorias-abaixo-de-500)
    - [10 - Retorne o `nome` de todos os lanches que tenham o percentual de `proteínas` maior ou igual a `30` e menor ou igual a `40`.](#10---retorne-o-nome-de-todos-os-lanches-que-tenham-o-percentual-de-proteínas-maior-ou-igual-a-30-e-menor-ou-igual-a-40)
    - [11 - Retorne o `nome` do produto, a quantidade de `curtidas` e quantos itens foram `vendidos` dos produtos que não sejam iguais a `Big Mac` e `McChicken`.](#11---retorne-o-nome-do-produto-a-quantidade-de-curtidas-e-quantos-itens-foram-vendidos-dos-produtos-que-não-sejam-iguais-a-big-mac-e-mcchicken)
    - [12 - Adicione `ketchup` aos `ingredientes` para todos os sanduíches menos o `McChicken`, garantindo que não haja duplicidade nos `ingredientes`.](#12---adicione-ketchup-aos-ingredientes-para-todos-os-sanduíches-menos-o-mcchicken-garantindo-que-não-haja-duplicidade-nos-ingredientes)
    - [13 - Inclua o campo `criadoPor` em todos os documentos, colocando `Ronald McDonald` no valor desse campo.](#13---inclua-o-campo-criadopor-em-todos-os-documentos-colocando-ronald-mcdonald-no-valor-desse-campo)
    - [14 - Crie uma query que retorne todos os lanches que possuem *picles* em seus ingredientes e mostre apenas os `3` primeiros itens contidos no array `valoresNutricionais`.](#14---crie-uma-query-que-retorne-todos-os-lanches-que-possuem-picles-em-seus-ingredientes-e-mostre-apenas-os-3-primeiros-itens-contidos-no-array-valoresnutricionais)
    - [15 - Adicione o campo `avaliacao` em todos os documentos da coleção e efetue alterações nesse campo.](#15---adicione-o-campo-avaliacao-em-todos-os-documentos-da-coleção-e-efetue-alterações-nesse-campo)
    - [16 - Atribua a data corrente ao campo `ultimaModificacao` no sanduíche `Big Mac`.](#16---atribua-a-data-corrente-ao-campo-ultimamodificacao-no-sanduíche-big-mac)
    - [17 - Retorne a quantidade total de produtos em uma nova coleção chamada `resumoProdutos`.](#17---retorne-a-quantidade-total-de-produtos-em-uma-nova-coleção-chamada-resumoprodutos)
    - [18 - Inclua `bacon` no final da lista de `ingredientes` dos sanduíches `Big Mac` e `Quarteirão com Queijo`.](#18---inclua-bacon-no-final-da-lista-de-ingredientes-dos-sanduíches-big-mac-e-quarteirão-com-queijo)
    - [19 - Remova o item `cebola` de todos os sanduíches.](#19---remova-o-item-cebola-de-todos-os-sanduíches)
    - [20 - Remova o **primeiro** `ingrediente` do sanduíche `Quarteirão com Queijo`.](#20---remova-o-primeiro-ingrediente-do-sanduíche-quarteirão-com-queijo)
    - [21 - Remova o **último** `ingrediente` do sanduíche `Cheddar McMelt`.](#21---remova-o-último-ingrediente-do-sanduíche-cheddar-mcmelt)
    - [22 - Adicione a quantidade de vendas dos sanduíches por dia da semana.](#22---adicione-a-quantidade-de-vendas-dos-sanduíches-por-dia-da-semana)
    - [23 - Insira os elementos `combo` e `tasty` no _array_ `tags` de todos os sanduíches e aproveite para deixar os elementos em ordem alfabética ascendente.](#23---insira-os-elementos-combo-e-tasty-no-array-tags-de-todos-os-sanduíches-e-aproveite-para-deixar-os-elementos-em-ordem-alfabética-ascendente)
    - [24 - Ordene em todos os documentos os elementos do _array_ `valoresNutricionais` pelo campo `percentual` de forma descendente.](#24---ordene-em-todos-os-documentos-os-elementos-do-array-valoresnutricionais-pelo-campo-percentual-de-forma-descendente)
    - [25 - Adicione o elemento `muito sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior ou igual a `40`.](#25---adicione-o-elemento-muito-sódio-ao-final-do-array-tags-nos-produtos-em-que-o-percentual-de-sódio-seja-maior-ou-igual-a-40)
    - [26 - Adicione o elemento `contém sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior do que `20` e menor do que `40`.](#26---adicione-o-elemento-contém-sódio-ao-final-do-array-tags-nos-produtos-em-que-o-percentual-de-sódio-seja-maior-do-que-20-e-menor-do-que-40)
    - [27 - Conte quantos produtos contêm `Mc` no nome, sem considerar letras maiúsculas ou minúsculas.](#27---conte-quantos-produtos-contêm-mc-no-nome-sem-considerar-letras-maiúsculas-ou-minúsculas)
    - [28 - Conte quantos produtos têm `4` ingredientes.](#28---conte-quantos-produtos-têm-4-ingredientes)
    - [29 - Renomeie o campo `descricao` para `descricaoSite` em todos os documentos.](#29---renomeie-o-campo-descricao-para-descricaosite-em-todos-os-documentos)
    - [30 - Remova o campo `curtidas` do item `Big Mac`.](#30---remova-o-campo-curtidas-do-item-big-mac)
    - [31 - Retorne o `nome` dos sanduíches em que o número de `curtidas` é maior que o número de sanduíches `vendidos`.](#31---retorne-o-nome-dos-sanduíches-em-que-o-número-de-curtidas-é-maior-que-o-número-de-sanduíches-vendidos)
    - [32 - Retorne o `nome` e a quantidade de vendas (`vendidos`) dos sanduíches em que o número de vendas é múltiplo de `5`.](#32---retorne-o-nome-e-a-quantidade-de-vendas-vendidos-dos-sanduíches-em-que-o-número-de-vendas-é-múltiplo-de-5)
- [Depois de terminar o desenvolvimento (OPCIONAL)](#depois-de-terminar-o-desenvolvimento-opcional)
- [Revisando um pull request](#revisando-um-pull-request)
- [Avisos Finais](#avisos-finais)

---

# Habilidades
Neste projeto, verificamos se você é capaz de:

  * Buscar documentos no banco
  
  * Usar filtros na busca
  
  * Deletar documentos conforme filtro
  
  * Contar documentos compreendidos nos filtros pedidos
  
  * Inserir documentos no banco

  * Utilizar o método `updateOne()` e `updateMany()`

  * Utilizar os operadores `$set`, `$mul`, `$inc`, `$min`, `$max` e `$currentDate`

  * Renomear campos e remover campos

  * Incorporar dados aos documentos através de arrays

  * Utilizar os operadores `$pop`, `$pull` e `$push`
  
  * Utilizar o operador `$addToSet`

  * Utilizar os operadores `$each`, `$slice` e `$sort`

  * Utilizar o operador `$all` para filtrar documentos

  * Utilizar o operador `$elemMatch` para filtrar documentos

  * Utilizar o operador `$size` para filtrar documentos pelo tamanho de arrays

  * Utilizar o operador `$expr` para criar expressões de agregação

  * Utilizar expressões regulares e o operador `$regex` para buscar documentos

  * Utilizar o operador `$mod`

---

# Entregáveis

## O que deverá ser desenvolvido

Hoje você fará um projeto com o codinome _commerce_. Neste projeto, você praticará todos os conceitos de **MongoDB** já ensinados até aqui.

A ideia é trabalhar com o banco de dados `commerce`, que contém dados do cardápio do **McDonald's**, como ingredientes, valores nutricionais e dados fictícios de vendas. As instruções de como restaurar o banco podem ser lidas a seguir.

---

## Desenvolvimento

Temos, neste projeto, uma série de desafios com diferentes níveis de complexidade. Cada desafio deve ser resolvido em seu arquivo próprio.

1. Leia a pergunta e crie no diretório `challenges` um arquivo chamado `desafioN.js`, em que N é o número do desafio.

2. O arquivo deve conter apenas o código MQL (_Mongo Query Language_) do desafio resolvido. **Não se esqueça de incluir o ponto e vírgula (";")** no final de suas queries, como no exemplo a seguir:

   ```js
   db.produtos.find();
   ```

   ⚠️ **Restrições** ⚠️:

   - **Não se deve usar aspas simples** para especificar campos e/ou valores. Quando for necessário usar aspas, **use somente aspas duplas**;

   - **Não se deve usar o comando `use commerce`**, haja visto que **os testes já se conectam automaticamente à base `commerce`**.

3. Faça isso até finalizar todos os desafios e depois siga as instruções de como entregar o projeto em [**Instruções para entregar seu projeto**](#instruções-para-entregar-seu-projeto).

4. Para entregar o seu projeto você deverá criar um _Pull Request_ neste repositório. Este _Pull Request_ deverá conter no diretório `challenges` os arquivos `desafio1.js`, `desafio2.js` e assim por diante até o `desafio22.js`, que conterão seu código `MQL` de cada desafio, respectivamente.

### ⚠️ É importante que seus arquivos tenham exatamente estes nomes! ⚠️

Qualquer dúvida, procure a monitoria. Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://course.betrybe.com/intro/git/) sempre que precisar!

---

## Data de Entrega

  - Projeto individual.

  - Serão dois dias de projeto.
  
  - Data de entrega para avaliação final do projeto: `xx/xx/xx 14:00`.

---

# Instruções para entregar seu projeto

⚠ **IMPORTANTE** ⚠

Caso você opte por não utilizar docker, para realizar os testes na sua máquina local, é necessário que o clone do projeto seja realizado **fora** do diretório com nome `Área de Trabalho`. Ou seja, `Área de Trabalho` não pode estar no caminho do diretório onde o projeto foi clonado porque o script que realiza os testes não consegue "encontrar" pastas que contenham espaços em seus nomes. Para certificar-se, utilize o comando `pwd` no terminal.

---

### Antes de começar a desenvolver:

1. Clone o repositório

- `git clone git@github.com:tryber/sd-014-b-mongodb-commerce.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-014-b-mongodb-commerce`

2. Crie uma branch a partir da branch `master`

- Verifique que você está na branch `master`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `master`
  - Exemplo: `git checkout master`
- Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
  - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
  - Exemplo: `git checkout -b seunome-mongodb-commerce`

3. Para cada exercício você deve criar um novo arquivo JS **dentro de uma pasta na raiz do seu projeto chamada `challenges`** seguindo a seguinte estrutura:

- desafio1.js, desafio2.js, ..., desafioN.js

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_
  - Exemplo: `git status` (deve aparecer o arquivo que você alterou como desafio1.js)
- Adicione o novo arquivo ao _stage_ do Git
  - Exemplo:
    - `git add .` (adicionando arquivo de solução _challenges/desafio1.js_ para desafio 1)
    - `git status` (deve aparecer listado o arquivo _challenges/desafio1.js_ em verde)
- Faça o `commit` inicial
  - Exemplo:
    - `git commit -m 'iniciando o projeto MongoDB Commerce'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin joaozinho-sd-014-b-mongodb-commerce`

6. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-014-b-mongodb-commerce/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
- **Não se preocupe em preencher mais nada por enquanto!**
- Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-014-b-mongodb-commerce/pulls) e confira que o seu _Pull Request_ está criado
---

### Durante o desenvolvimento

- ⚠ **LEMBRE-SE DE CRIAR TODOS OS ARQUIVOS DENTRO DA PASTA `challenges`** ⚠

- Faça `commits` das alterações que você fizer no código regularmente

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

- Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

# Como Desenvolver

### Análise Estática

Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

Este projeto já vem com as dependências relacionadas ao _linter_ configuradas no arquivos `package.json`.

Para poder rodar os `ESLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Você pode também instalar o plugin do `ESLint` no `VSCode`, bastar ir em extensions e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

---

### Instruções para restaurar o banco de dados `commerce`

1. Abra o terminal e conecte-se à sua instância local do **MongoDB**. Se você receber uma mensagem de erro com uma mensagem como **_Connection refused_**, tente reiniciar sua instância ([veja como fazer isso aqui](https://app.betrybe.com/course/back-end/introducao-ao-mongodb/mongodb-introducao/d396e5a2-d5c9-4f3a-b723-1a1d3ea06b3d/conteudos/b9646f17-77fc-401e-bab5-421fdc37428e/conectando/f63aa7aa-ac8f-4253-bf76-7fc71e4eac5a?use_case=side_bar)).

2. Agora que você tem certeza de que a sua instância está no ar e que você está conectado a ela, digite `exit`. Você voltará ao terminal para iniciar a importação dos dados.

3. Na raiz do diretório do projeto, execute o seguinte comando que fará a restauração da base de dados `commerce`:
   ```sh
   DBNAME=commerce ./scripts/resetdb.sh assets/produtos
   ```

- A execução desse script criará um banco de dados chamado `commerce` e importará os dados para a coleção `produtos`.

⚠️ Como tanto esse script quanto o script de execução local dos testes (mostrado na [seção seguinte](#implementações-técnicas)), **restauram a base de dados `commerce`**, se atente a salvar seu progresso nos arquivos de desafio! ⚠️

---

### Implementações técnicas

Para executar localmente os testes, é preciso escrever o seguinte no seu terminal, estando na raiz do diretório do projeto:

```sh
./scripts/evaluate.sh
```

Esse script passará por **todos os desafios** e imprimirá um relatório indicando se passou ou não para cada desafio. Como a execução do script **envolve restauração da base de dados `commerce`** de um teste para outro, recomenda-se esperar pela sua execução completa.

Para executar somente o teste de um desafio, execute o comando abaixo, substituindo N pelo númedo do desafio

```sh
./scripts/evaluate.sh desafioN
```

⚠️ Como na avaliação o banco de dados `commerce` é restaurado de um teste para outro, **se atente a fazer uso do banco restaurado na hora de fazer um desafio**. ⚠️


⚠️ Para quem não possui o MongoDB instalado e está utilizando o docker ⚠️

É necessário executar os testes locamente é necessário seguir os seguintes passos:
1. Acesse o terminal na raiz da pasta do projeto;
2. Crie um container com um volume apontando para a pasta do projeto `docker run -d --name=nomeDoContainer -v "$PWD:/app" -p 27017:27017 mongo`;
3. Com o container em execução, acesse o terminal do container `docker exec -it nomeDoContainer bash`;
4. No terminal do container acesse o diretório mapeado no volume (no exemplo acima `/app`);
5. E por fim execute o script de testes do projeto: `./scripts/evaluate.sh`.
Se por algum motivo a execução do container for finalizada, basta iniciá-lo novamente com o comando `docker start nomeDoContainer` e seguir a partir do passo 3.

---

### Linter

Para garantir a qualidade do código, vamos utilizar neste projeto o linter ESLint. Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível e de fácil manutenção! Para rodar o *linter* localmente no projeto, execute o comando abaixo: 

`npm run lint`

⚠ PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS. ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO! ⚠

Aqui encontram-se os requisitos do projeto. Em cada requisito você encontrara uma imagem de um protótipo de como sua aplicação deve ficar. Estilo da página não será avaliado.

---

# Requisitos do projeto


### 1 - Retorne a quantidade de documentos inseridos na coleção `produtos`.

- Para isso, escreva a query no arquivo `desafio1.js`

### 2 - Ordene a coleção `produtos` pela quantidade de lanches vendidos em ordem crescente e mostre apenas o nome e quantidade de lanches vendidos.

- Para isso, escreva a query no arquivo `desafio2.js`

### 3 - Retorne o lanche mais vendido e mostre apenas o nome e quantidade de lanches vendidos.

- Para isso, escreva a query no arquivo `desafio3.js`

### 4 - Retorne os lanches que tiveram vendas maiores que `50` e menores que `100`. Mostre apenas o nome e quantidade de lanches vendidos. Ordene por quantidade de lanches vendidos em ordem crescente.

- Para isso, escreva a query no arquivo `desafio4.js`

### 5 - Retorne o `nome`, as `curtidas` e `vendidos` dos lanches que tiveram quantidade de `curtidas` igual a `36` ou tenham a quantidade de vendas igual a `85`.

- Para isso, escreva a query no arquivo `desafio5.js`

### 6 - Retorne o `nome` e `curtidas` dos lanches que tiveram curtidas maiores que `10` e menores que `100`.

- Para isso, escreva a query no arquivo `desafio6.js`

### 7 - Retorne o `nome` e `vendidos` dos lanches que tenham sido `vendidos` uma quantidade diferente de `50` e que o campo `tags` não exista.

- Para isso, escreva a query no arquivo `desafio7.js`

### 8 - Delete os lanches que tenham menos de `50` `curtidas` e retorne o `nome` dos lanches que restaram no banco.

- Para isso, escreva a query no arquivo `desafio8.js`

### 9 - Retorne o `nome` de todos os lanches que possuam `calorias` abaixo de `500`.

- Para isso, escreva a query no arquivo `desafio9.js`.

### 10 - Retorne o `nome` de todos os lanches que tenham o percentual de `proteínas` maior ou igual a `30` e menor ou igual a `40`.

- Para isso, escreva a query no arquivo `desafio10.js`

### 11 - Retorne o `nome` do produto, a quantidade de `curtidas` e quantos itens foram `vendidos` dos produtos que não sejam iguais a `Big Mac` e `McChicken`.

- Para isso, escreva a query no arquivo `desafio11.js`

### 12 - Adicione `ketchup` aos `ingredientes` para todos os sanduíches menos o `McChicken`, garantindo que não haja duplicidade nos `ingredientes`.

Para isso, escreva no arquivo `desafio12.js` duas queries, **nesta ordem**:

1. Crie uma query que adicione `ketchup` aos `ingredientes` para todos os sanduíches menos o `McChicken`, garantindo que não haja duplicidade nos `ingredientes`.

2. Crie uma query que retorne o `nome` e `ingredientes` de todos os documentos.

### 13 - Inclua o campo `criadoPor` em todos os documentos, colocando `Ronald McDonald` no valor desse campo.

Para isso, escreva no arquivo `desafio13.js` duas queries, **nesta ordem**:

1. Crie uma query que adicione o campo `criadoPor` em todos os documentos, colocando `"Ronald McDonald"` no valor desse campo.

2. Crie uma query que retorne o `nome` e `criadoPor` de todos os produtos.

### 14 - Crie uma query que retorne todos os lanches que possuem *picles* em seus ingredientes e mostre apenas os `3` primeiros itens contidos no array `valoresNutricionais`.

Para isso, escreva no arquivo `desafio14.js` duas queries, **nesta ordem**:

1. Sua query deve retornar apenas os campos `nome`, `ingredientes` e `valoresNutricionais`.

> **Dica** : [explore a implementação](https://app.betrybe.com/course/back-end/introducao-ao-mongodb/updates-complexos-arrays/e58a3ec0-3a24-4d96-97f1-bfeec6d1b253/conteudos/bc2f5c46-bbeb-4fff-9d79-cebb2c00769b/operador-push/6943fddb-86aa-498c-b675-429487b9bcf3?use_case=side_bar) do `$slice`

### 15 - Adicione o campo `avaliacao` em todos os documentos da coleção e efetue alterações nesse campo.

Para isso, escreva no arquivo `desafio15.js` quatro queries, **nesta ordem**:

1. Crie uma query que inclua o campo `avaliacao` do tipo `NumberInt` e com o valor `0` em todos os documentos da coleção.

2. Crie uma query que incremente o valor do campo `avaliacao` em `5` em todos os sanduíches de carne do tipo `bovino`. Dica: utilize como filtro o campo `tags`.

3. Crie uma query que incremente o valor do campo `avaliacao` em `3` em todos os sanduíches de `ave`.

4. Crie uma query que retorne o `nome` e `avaliacao` de todos os sanduíches.

### 16 - Adicione o campo `ultimaModificacao` com a data corrente somente no sanduíche `Big Mac`.

Para isso, escreva no arquivo `desafio16.js` duas queries, **nesta ordem**:

1. Crie uma query que inclua o campo `ultimaModificacao` somente ao sanduíche `Big Mac`.

2. Crie uma query que atribua a data corrente ao campo `ultimaModificacao` no sanduíche `Big Mac`. Para a data corrente faça uso do tipo `Date`.

3. Crie uma query que retorne o `nome` de todos os documentos em que o campo `ultimaModificacao` existe.

### 17 - Retorne a quantidade total de produtos em uma nova coleção chamada `resumoProdutos`.

- Para isso, escreva no arquivo `desafio17.js` duas queries, **nesta ordem**:

1. Crie uma query que insira na coleção "resumoProdutos" um documento com os campos: "franquia":"McDonalds" e "totalProdutos". O valor de `totalProdutos` deve ser a quantidade de produtos registrados na coleção `produtos`.

2. Em uma segunda query, retorne a "franquia" e o totalProdutos do primeiro documento presente na coleção resumoProdutos em que a "franquia" seja McDonalds.

### 18 - Inclua `bacon` no final da lista de `ingredientes` dos sanduíches `Big Mac` e `Quarteirão com Queijo`.

Para isso, escreva no arquivo `desafio18.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a inclusão de `bacon` no final da lista de `ingredientes` dos sanduíches `Big Mac` e `Quarteirão com Queijo`.

2. Crie uma query que retorne o `nome` e `ingredientes` de todos os documentos.

### 19 - Remova o item `cebola` de todos os sanduíches.

Para isso, escreva no arquivo `desafio19.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a remoção do item `cebola` em todos os sanduíches.

2. Crie uma query que retorne o `nome` e `ingredientes` de todos os documentos.

### 20 - Remova o **primeiro** `ingrediente` do sanduíche `Quarteirão com Queijo`.

Para isso, escreva no arquivo `desafio20.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a remoção do **primeiro** `ingrediente` no sanduíche `Quarteirão com Queijo`.

2. Crie uma query que retorne o `nome` e `ingredientes` de todos os documentos.

### 21 - Remova o **último** `ingrediente` do sanduíche `Cheddar McMelt`.

Para isso, escreva no arquivo `desafio21.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a remoção do **último** `ingrediente` no sanduíche `Cheddar McMelt`.

2. Crie uma query que retorne o `nome` e `ingredientes` de todos os documentos.

### 22 - Adicione a quantidade de vendas dos sanduíches por dia da semana.

Para isso, escreva no arquivo `desafio22.js` quatro queries, **nesta ordem**:

1. Crie uma query que inclua um campo `vendasPorDia` em todos os sanduíches. O valor deste campo deverá ser um _array_ com sete posições. Cada uma delas representará um dia da semana, e cada posição iniciará em `0`. O _array_ deve se parecer como abaixo:
   ```json
   "vendasPorDia": [0, 0, 0, 0, 0, 0, 0]
   ```

- O primeiro item desse _array_ representa as vendas no **domingo**, o segundo item representa as vendas na **segunda-feira**, e assim até chegar ao último item, que representa as vendas no **sábado**.

2. Crie uma query que incremente as vendas de `Big Mac` às **quartas-feiras** em `60`.

3. Crie uma query que incremente as vendas de todos os sanduíches de carne do tipo `bovino` aos **sábados** em `120`.

4. Crie uma query que retorne o `nome` e `vendasPorDia` de todos os documentos.

### 23 - Insira os elementos `combo` e `tasty` no _array_ `tags` de todos os sanduíches e aproveite para deixar os elementos em ordem alfabética ascendente.

Para isso, escreva no arquivo `desafio23.js` duas queries, **nesta ordem**:

1. Crie uma query que faça tanto a inserção dos elementos `combo` e `tasty` no _array_ `tags` de todos os sanduíches quanto a ordenação dos elementos de `tags` em ordem alfabética ascendente.

2. Crie uma query que retorne o `nome` e `tags` de todos os documentos.

### 24 - Ordene em todos os documentos os elementos do _array_ `valoresNutricionais` pelo campo `percentual` de forma descendente.

Para isso, escreva no arquivo `desafio24.js` duas queries, **nesta ordem**:

1. Crie uma query que faça em todos os documentos a ordenação dos elementos do _array_ `valoresNutricionais` pelo campo `percentual` de forma descendente. Dica: mesmo sem adicionar nenhum novo elemento, para essa operação é necessário utilizar também o modificador `$each`.

2. Crie uma query que retorne o `nome` e `valoresNutricionais` de todos os documentos.

### 25 - Adicione o elemento `muito sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior ou igual a `40`.

Para isso, escreva no arquivo `desafio25.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a adição do elemento `muito sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior ou igual a `40`.

2. Crie uma query que retorne o `nome` e `tags` de todos os documentos.

### 26 - Adicione o elemento `contém sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior do que `20` e menor do que `40`.

Para isso, escreva no arquivo `desafio26.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a adição do elemento `contém sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior do que `20` e menor do que `40`.

2. Crie uma query que retorne o `nome` e `tags` de todos os documentos.

### 27 - Conte quantos produtos contêm `Mc` no nome, sem considerar letras maiúsculas ou minúsculas.

- Para isso, escreva a query no arquivo `desafio27.js`

### 28 - Conte quantos produtos têm `4` ingredientes.

- Para isso, escreva a query no arquivo `desafio28.js`

### 29 - Renomeie o campo `descricao` para `descricaoSite` em todos os documentos.

Para isso, escreva no arquivo `desafio29.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a renomeação do campo `descricao` para `descricaoSite` em todos os documentos.

2. Crie uma query que retorne o `nome`, `descricao` e `descricaoSite` de todos os documentos.

### 30 - Remova o campo `curtidas` do item `Big Mac`.

Para isso, escreva no arquivo `desafio30.js` duas queries, **nesta ordem**:

1. Crie uma query que faça a remoção do campo `curtidas` do item `Big Mac`.

2. Crie uma query que retorne o `nome` e `curtidas` de todos os documentos.

### 31 - Retorne o `nome` dos sanduíches em que o número de `curtidas` é maior que o número de sanduíches `vendidos`.

- Para isso, escreva a query no arquivo `desafio31.js`

### 32 - Retorne o `nome` e a quantidade de vendas (`vendidos`) dos sanduíches em que o número de vendas é múltiplo de `5`.

- Para isso, escreva a query no arquivo `desafio32.js`

---

# Depois de terminar o desenvolvimento (OPCIONAL)

Para sinalizar que o seu projeto está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-00`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

# Revisando um pull request

Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

\#VQV 🚀

---

# Avisos Finais

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

Link: [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](http://schimmel.biz)

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?

---
