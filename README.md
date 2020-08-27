Estudo & Pratica 

## Principais tecnologias/ferramentas utilizadas

1. React
2. Hooks UseState, UseEffect, UseContext e UseReducer
3. Axios
4. Styled Components
5. Ant Design

## Escopo do projeto
Ecommerce dos jogos da Marvel, utilizando as APIs provida por eles. Dentro os diversos requisitos de um e-commerce, alguns são requisitos obrigatórios para realizarmos um MVP.

## MVP
### Requisitos de negócio:

Lista de Produtos (1)
UX/UI (2)
Cards que devem ter foto, nome e preço do produto (3)
Detalhe do Produto (4)
Adicionar produtos ao Carrinho (5)
Lista de produtos no Carrinho (6)
Remover produtos ao Carrinho (7)
Filtro de ordenação (8)
SEO (9)
HTML Semântico (10)

### Priorizados
Lista de Produtos
UX/UI
Cards que devem ter foto, nome e preço do produto
Adicionar produtos ao Carrinho 
Lista de produtos no Carrinho 
HTML Semântico


### Requisitos técnicos: 

Cadastro do usuário (1)
Login (2)
Produtos renderizados ao entrar no site (3)
Ordenação por Preço Maior ou Menor (4)
Input de pesquisa por nome (5)
Botão de adicionar produto ao carrinho (6)
Carrinho com nome , preço e quantidade de produtos e botão cancelar (7)
No carrinho deve haver a soma de todos os produtos (8)
Campo de calcular frete (9)

### Priorizados

Produtos renderizados ao entrar no site (3)
Botão de adicionar produto ao carrinho (6)
Carrinho com nome , preço e quantidade de produtos e botão cancelar (7)


## Tecnologias usadas e justificativas:

### React
Instalei o template do Create React App e para gerenciamento de estado, utilizei os Hooks UseState, UseContext e UseReducer, que são de fácil integração com outros gerenciadores de estado e menos complexos. 
 
### Framework de estilo AntDesign
Usei o Ant porque ele é o mais clean que conheço, simples de integrar e fácil de customizar;

### Integração com a API Rest da Marvel
- Usei a lib Axios para integração.

## Ciclo de vida dos componentes React. Quando e Como utilizá-los adequadamente:

Os ciclos de vida dos componentes React são funções que são invocadas em determinados momentod do ciclo de vida do componente.

São eles:
- ComponentDidMount que é executado assim que o site é renderizado, 
- ComponentDidUpdate que roda assim que o metodo sofre alguma alteração.
- ComponentDidUnMount que é invocado antes do componente ser desmontado. 
- Render que é invoca todas as vezes que o seu conteudo é alterado.

### Ciclo de vida com React Hooks

Com hooks a utilização dos métodos de ciclo de vida são mais intuitivos, por exemplo o UseEffects substitui os dois primeiros citados acima e inclusive foi o que utilizei nesse projeto para renderizar a resposta vinda da api assim que o site for montado.

## Como rodar a aplicação

Instale as dependências:
```
npm install
```

Execute a aplicação:
```
npm start 
```

## Licença

The [MIT License]() (MIT)
Copyright :copyright: 2020 - Raphael Melo
</div>
