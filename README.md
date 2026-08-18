# 🛒 Frontend Web — Assistência Técnica Forja

> **Interface Web Moderna e Responsiva** desenvolvida como requisito para o Trabalho de Conclusão de Curso (TCC). Prover uma experiência de usuário fluida para catálogo de eletrônicos, gerenciamento de carrinho e checkout via PIX.

---

## 📌 **Visão Geral**

* **Projeto:** Frontend Web E-Commerce Assistência Técnica Forja
* **Objetivo:** Prover uma interface intuitiva para navegação entre produtos e peças de reposição, cadastro/autenticação de clientes e fluxo de checkout ágil.
* **Público-Alvo:** Clientes finais e consumidores da assistência técnica.

---

## 🛠️ **Tecnologias Utilizadas**

* **Core Framework:** Next.js (App Router)
* **Biblioteca UI:** React
* **Linguagem:** TypeScript
* **Estilização:** Tailwind CSS
* **Persistência Local:** LocalStorage API
* **Comunicação REST:** Fetch API (Integração com Backend Node.js)

---

## 🏗️ **Estrutura do Projeto**

```text
frontend/
├── app/
│   ├── layout.tsx         # Layout global (Header e Footer persistentes)
│   ├── page.tsx           # Página Inicial (Home)
│   ├── login/             # Autenticação de Usuários
│   │   └── page.tsx
│   ├── cadastro/          # Registro de Novos Usuários
│   │   └── page.tsx
│   ├── produtos/          # Catálogo Completo de Produtos
│   │   └── todos/
│   │       └── page.tsx
│   ├── pecas/             # Catálogo de Peças de Reposição
│   │   └── page.tsx
│   ├── carrinho/          # Gerenciamento do Carrinho
│   │   └── page.tsx
│   └── pagamento/         # Checkout e Gerador PIX
│       └── page.tsx
├── components/            # Componentes Reutilizáveis (Busca, Cards, Header, Footer)
└── public/                # Ativos Estáticos (Imagens de Produtos)



📋 Módulos e Telas da Aplicação

+-----------+------------------+-----------------------------------------------+------------------------------------------------------+
| Módulo    | Rota             | Descrição                                     | Integração Backend / Recursos                        |
+-----------+------------------+-----------------------------------------------+------------------------------------------------------+
| Home      | /                | Banner promocional, busca rápida e destaques  | Redirecionamento dinâmico e navegação principal      |
| Login     | /login           | Autenticação de conta cadastrada              | POST /login (Validação via bcrypt/JWT no servidor)   |
| Cadastro  | /cadastro        | Registro de novos clientes                    | POST /usuarios (Criação de usuário no MySQL)         |
| Produtos  | /produtos/todos  | Catálogo geral de produtos                    | GET /produtos (Filtros, ordenação e formatação BRL)  |
| Peças     | /pecas           | Listagem por categorias de manutenção         | GET /produtos (Filtro por categoria de peças)        |
| Carrinho  | /carrinho        | Gerenciamento de itens selecionados           | Persistência com LocalStorage e cálculo em tempo real|
| Pagamento | /pagamento       | Processamento do checkout                     | Integração de QR Code PIX e chave copia-e-cola       |
+-----------+------------------+-----------------------------------------------+------------------------------------------------------+


🔄 Fluxo de Navegação do Usuário

[ Página Inicial / Busca ] ──> [ Catálogo (Produtos / Peças) ]
                                            │
                                  (Adicionar ao Carrinho)
                                            ▼
[ Checkout / PIX ] <── (Finalizar) ── [ Carrinho (LocalStorage) ]


1.Navegação & Busca: O cliente pesquisa itens via barra de busca ou navega pelas categorias.

2.Seleção de Produtos: Visualização clara das fotos, especificações e preços formatados em moeda brasileira (R$ 0.000,00).

3.Persistência de Dados: Os itens adicionados são armazenados via LocalStorage, garantindo retenção dos dados na sessão.

4.Checkout Simplificado: Controle de quantidades no carrinho e redirecionamento direto para geração de cobrança PIX.

⚡ Destaques do Frontend
Formatação Nativa de Moeda: Utilização de Intl.NumberFormat('pt-BR') para exibição de preços no padrão BRL.

Fallback de Imagens: Tratamento dinâmico no evento onError das imagens para garantir a exibição de assets locais (public/images/) caso o link do banco não responda.

Design Responsivo: Construído com abordagem Mobile-First utilizando grid e flexbox com Tailwind CSS.


🚀 Como Executar o Projeto
Pré-requisitos
Node.js (v18+)

Backend AssistenciaTecnicaForja_Backend executando em http://localhost:8080


Passo a Passo
1. Instalar as dependências:

Bash
npm install


2. Iniciar o servidor de desenvolvimento:

Bash
npm run dev


3. Acessar a aplicação:
Abra o navegador e acesse http://localhost:3000.



