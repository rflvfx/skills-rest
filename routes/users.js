const express = require("express");
const router = express.Router();
const store = { users: [], seq: 1 };

router.get("/", (req, res) => res.json(store.users));
router.get("/:id", (req, res) => {
  const u = store.users.find((x) => x.id === +req.params.id);
  u ? res.json(u) : res.status(404).json({ error: { message: "not found" } });
});
router.post("/", (req, res) => {
  const u = { id: store.seq++, ...req.body };
  store.users.push(u);
  res.status(201).json(u);
});
router.delete("/:id", (req, res) => {
  store.users = store.users.filter((x) => x.id !== +req.params.id);
  res.status(204).end();
});
module.exports = router;
