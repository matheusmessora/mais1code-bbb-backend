const express = require('express');

const router = express.Router();

let usuarios = 0

router.get('/', (req, res) => {
  const a = 1
  const b = 2
  const soma = a + b
  usuarios++
  res.json({ sum: soma, usuarios: usuarios})
});

module.exports = router;