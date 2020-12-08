const express = require('express');
const { getUserName } = require('../utils/users');
const router = express.Router();

router.post('/login', async (req, res, next) => {
  const { name, room } = req.body;
  const user = getUserName(name, room);
  if (user) return res.status(400).json('username taken!');
  return res.end();
});

module.exports = router;
