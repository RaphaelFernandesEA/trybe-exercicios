const express = require('express');
const generateToken = require('../utils/generateToken');

const signupRouter = express.Router();

signupRouter.post('/', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if (!email) {
    res.status(401).json({ message: 'Email ausente!' });
  } else if (!password) {
    res.status(401).json({ message: 'Password ausente!' });
  } else if (!firstName) {
    res.status(401).json({ message: 'Nome ausente!' });
  } else if (!phone) {
    res.status(401).json({ message: 'Telefone ausente!' });
  } 
  const token = generateToken();
  res.status(200).json({ token });
});

module.exports = signupRouter;