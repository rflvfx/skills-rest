const express = require('express');
const app = express();
app.use(express.json());

let users = [{ id: 1, nome: 'Rafael' }];

app.get('/users', (req, res) => res.json(users));
app.get('/users/:id', (req, res) => {
  const u = users.find(x => x.id == req.params.id);
  u ? res.json(u) : res.status(404).json({ erro: 'nao encontrado' });
});
app.post('/users', (req, res) => {
  const user = { id: users.length + 1, ...req.body };
  users.push(user);
  res.status(201).json(user);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API REST em http://localhost:${PORT}`));
