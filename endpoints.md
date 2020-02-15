# REST Endpoint Conventions

```
GET    /users          -> list all
GET    /users/:id      -> fetch one
POST   /users          -> create
PUT    /users/:id      -> full update
PATCH  /users/:id      -> partial update
DELETE /users/:id      -> remove
```

- Use nouns, not verbs, in paths
- Version the API: /v1/users
- Return consistent error shapes: { error: { code, message } }
