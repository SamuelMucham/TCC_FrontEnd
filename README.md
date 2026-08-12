Documentação do Frontend Web

Nome do Sistema

Assistência Técnica Forja

Objetivo

O Frontend Web da Assistência Técnica Forja foi desenvolvido para oferecer uma interface moderna, intuitiva e responsiva, permitindo que os usuários consultem produtos, peças, realizem compras e acessem informações da assistência técnica de forma rápida e organizada.

Tecnologias Utilizadas
Next.js
React
TypeScript
Tailwind CSS
HTML5
CSS3
JavaScript
LocalStorage
Telas

1. Página Inicial (Home)
Objetivo
Apresentar a página principal do sistema, exibindo os produtos em destaque e facilitando a navegação.
Funcionalidades
Banner principal;
Barra de pesquisa;
Menu de navegação;
Produtos em destaque;
Categorias de produtos;
Acesso ao carrinho;
Acesso ao login;
Rodapé com informações da empresa.

2. Tela de Login
Objetivo
Permitir que o usuário realize sua autenticação no sistema.
Funcionalidades
Login com e-mail e senha;
Cadastro de novos usuários;
Validação dos campos;
Redirecionamento para a página inicial após o login.

3. Página de Produtos
Objetivo
Exibir todos os produtos disponíveis para venda.
Funcionalidades
Listagem de produtos;
Pesquisa por nome;
Visualização de preço;
Exibição de descrição;
Adição ao carrinho.

4. Página de Peças
Objetivo
Apresentar as peças disponíveis para manutenção e venda.
Funcionalidades
Listagem de peças;
Organização por categoria;
Visualização de informações do produto;
Adição ao carrinho.

5. Carrinho de Compras
Objetivo
Permitir que o usuário visualize e gerencie os produtos adicionados ao carrinho.
Funcionalidades
Listagem dos produtos;
Alteração da quantidade;
Remoção de itens;
Cálculo automático do valor total;
Botão para finalizar a compra.

6. Página de Pagamento
Objetivo
Permitir que o usuário conclua a compra.
Funcionalidades
Pagamento via PIX;
Exibição do QR Code;
Confirmação do pagamento;
Finalização do pedido.
Navegação

O sistema utiliza o App Router do Next.js, proporcionando uma navegação rápida entre as páginas.

## Estrutura das Rotas
Estrutura das Rotas
Home
│
├── Login
│
├── Produtos
│
├── Peças
│
├── Carrinho
│
└── Pagamento

## Fluxo do Usuário
Fluxo do Usuário
O usuário acessa a página inicial.
Pode pesquisar produtos utilizando a barra de busca.
Escolhe um produto ou peça.
Adiciona o item ao carrinho.
Visualiza os produtos selecionados no carrinho.
Finaliza a compra acessando a página de pagamento.
Após a confirmação do pagamento, o pedido é concluído.
## Estrutura do Projeto
frontend/
│
├── app/
├── components/
│   ├── Busca.tsx
│   ├── page.tsx
│   ├── login/
│   ├── produtos/
│   ├── pecas/
│   ├── carrinho/
│   ├── pagamento/
│   └── layout.tsx
│
├── public/
│
│
└── package.json
Recursos Utilizados
Pesquisa de Produtos

O sistema possui uma barra de pesquisa que permite localizar produtos e peças rapidamente.
Carrinho de Compras
O carrinho permite adicionar, remover e alterar a quantidade de produtos antes da finalização da compra.
Armazenamento Local
O navegador utiliza o LocalStorage para armazenar temporariamente os produtos adicionados ao carrinho, garantindo que as informações permaneçam disponíveis durante a navegação.
Interface Responsiva
O frontend foi desenvolvido com Tailwind CSS, permitindo que o sistema seja utilizado em computadores, tablets e smartphones, adaptando automaticamente o layout para diferentes tamanhos de tela.

Benefícios do Frontend
Interface moderna e intuitiva;
Navegação rápida e organizada;
Sistema responsivo para diferentes dispositivos;
Pesquisa eficiente de produtos;
Catálogo organizado por categorias;
Carrinho de compras integrado;
Processo de compra simples e prático;
Melhor experiência para o usuário.