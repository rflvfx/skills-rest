<div align="center">
<img src="https://cdn.simpleicons.org/nodedotjs" height="70"/>

# skills-rest

**API REST com Express** — CRUD de usuários em memória, convenções HTTP e middleware.

</div>

## 📋 Sobre

Projeto de referência para APIs RESTful: convenções de recursos, verbos HTTP corretos, paginação e middleware reutilizável.

## 🚀 Quick start

```bash
npm install
npm start
```

## 📡 Endpoints

- `GET /users` — lista usuários (paginado)
- `GET /users/:id` — busca um usuário
- `POST /users` — cria usuário
- `DELETE /users/:id` — remove usuário

## 📂 Conteúdo

- `routes/users.js` — CRUD completo
- `middleware.js` — logger + error handler
- `pagination.js` — paginação por offset
- `endpoints.md` — convenções REST

## 🧠 Tópicos cobertos

`REST` `HTTP semantics` `idempotency` `HATEOAS` `pagination` `versioning` `status codes`
