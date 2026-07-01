# assistencia tecnica do forja API - Backend 

## 📋 Introdução
O **assistencia tecnica do forja** é um sistema completo de gerenciamento para assistências técnicas especializadas em aparelhos eletrônicos (smartphones, notebooks, tablets, etc.). O sistema resolve o problema de falta de controle de ordens de serviço, fluxo de reparos e comunicação interna entre gestores e técnicos.

- **Público-alvo:** Proprietários de assistências técnicas, gestores de serviços e técnicos de manutenção de eletrônicos.

---

## 🛠️ Tecnologias Utilizadas
- **Ambiente de Execução:** Node.js v20+
- **Linguagem:** TypeScript
- **Framework Web:** Express
- **ORM (Mapeamento de Banco):** Prisma ORM
- **Banco de Dados:** MySQL (via XAMPP/Local)
- **Autenticação e Segurança:** JWT (JSON Web Token) & BcryptJS
- **Documentação da API:** Swagger UI

---

## 📐 Arquitetura do Sistema
O sistema foi desenvolvido seguindo o padrão de arquitetura em camadas (**MSC - Model, Service, Controller**), garantindo a separação de responsabilidades:

- **Config:** Centraliza conexões com o banco de dados (Prisma) e especificações do Swagger.
- **Controllers:** Camada responsável por receber as requisições HTTP, capturar os parâmetros/body e devolver as respostas.
- **Services:** Camada de regras de negócio, validações de segurança e comunicação direta com o banco de dados através do Prisma.

---

## 📄 Documentação da API (Rotas)

A documentação interativa e completa da API está disponível via Swagger na rota `/api-docs`.

| Método | Rota       | Descrição                                         | Autenticação |
| :----- | :--------- | :------------------------------------------------ | :----------- |
| POST   | `/usuarios`| Cadastra um novo funcionário (GESTOR ou TECNICO)  | Nenhuma      |
| POST   | `/login`   | Realiza a autenticação e gera o Token JWT         | Nenhuma      |
| POST   | `/ordens`  | Abre uma nova OS de aparelho eletrônico           | Nenhuma      |
| GET    | `/ordens`  | Lista todas as ordens de serviço registradas      | Nenhuma      |

### Exemplos de Requisição:
- **POST /ordens (Criar OS de Eletrônico):**
  ```json
  {
    "clienteNome": "Carlos Henrique",
    "equipamento": "Samsung Galaxy S23",
    "defeito": "Tela quebrada e conector de carga ruim",
    "valor": 450.00
  }