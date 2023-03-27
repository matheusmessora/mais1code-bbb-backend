const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const a = 1
  const b = 2
  const soma = a + b
  res.json({ sum: soma})
});

module.exports = router;