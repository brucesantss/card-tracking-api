# Case: Otimização do Sistema de Entrega de Cartões do Banco Futuro

## 📌 **Contexto**
O **Banco Futuro** está enfrentando problemas com **atrasos na entrega de cartões físicos** para seus clientes. O sistema atual depende de **planilhas e e-mails manuais** para rastrear o status das entregas, o que resulta em:

- **📌 Erros humanos:** Dados inconsistentes e duplicados.
- **⏳ Atrasos:** Clientes recebem cartões fora do prazo prometido (**média de 10 dias**, quando o prometido é **5 dias**).
- **🔍 Falta de visibilidade:** Gerentes e clientes **não têm acesso em tempo real** ao status (ex.: "Em produção", "Em trânsito", "Entregue").

A empresa decidiu **modernizar o processo** com uma **REST API** para gerenciar o ciclo de vida dos cartões, permitindo **rastreamento em tempo real** e **integração com uma transportadora**.

---

## 🎯 **Objetivo**
Desenvolver uma **API simples em Node.js com TypeScript** para:

✅ **Cadastrar pedidos de cartões**  
✅ **Atualizar o status de entrega**  
✅ **Consultar o status por ID**  

O **case será resolvido em ~15-20 minutos**, com foco em corrigir **erros comuns**, como **validação falha e falta de tipagem**.

---

## 📜 **Requisitos do Case**

### 🛠 **Funcionalidades**
1️⃣ **Criar Pedido de Cartão**  
   - **Endpoint:** `POST /cards`  
   - **Dados:** `clientId`, `cardType` (ex.: "Crédito", "Débito"), `status` (inicial **"Em produção"**).

2️⃣ **Atualizar Status**  
   - **Endpoint:** `PATCH /cards/:id/status`  
   - **Dados:** `status` (ex.: **"Em trânsito"**, **"Entregue"**).

3️⃣ **Consultar Status**  
   - **Endpoint:** `GET /cards/:id`  

---

### 🏗 **Estrutura de Dados**
```typescript
type Card = {
  id: string;
  clientId: string;
  cardType: "Crédito" | "Débito";
  status: "Em produção" | "Em trânsito" | "Entregue";
};

### 🚨 **Desafios a Resolver**
    - ❌ **Erro 1:** Validação ausente
Pedidos com dados inválidos (ex.: clientId vazio) estavam sendo aceitos.

    - ❌ **Erro 2:** Falta de tipagem
Código inicial sem TypeScript causava erros de runtime.

    - ❌ **Erro 3:** Respostas inconsistentes
Status HTTP errados ou respostas sem formato definido.

