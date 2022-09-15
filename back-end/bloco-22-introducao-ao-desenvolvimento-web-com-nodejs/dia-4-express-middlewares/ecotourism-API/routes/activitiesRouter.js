const express = require('express');
const validateAuth = require('../middlewares/validateAuth');
const validateDate = require('../middlewares/validateDate');
const validateDescription = require('../middlewares/validateDescription');
const validateDifficulty = require('../middlewares/validateDifficulty');
const validateName = require('../middlewares/validateName');
const validatePrice = require('../middlewares/validatePrice');
const validateRating = require('../middlewares/validateRating');

const activitiesRouter = express.Router();

activitiesRouter.post('/',
  validateAuth,
  validateName,
  validatePrice,
  validateDescription,
  validateDate,
  validateRating,
  validateDifficulty,
  (req, res) => {
    res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = activitiesRouter;