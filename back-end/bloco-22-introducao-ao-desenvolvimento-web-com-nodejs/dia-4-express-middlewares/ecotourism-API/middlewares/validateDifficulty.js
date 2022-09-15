module.exports = (req, res, next) => {
  const difficultyLevels = ['Fácil', 'Médio', 'Difícil'];
  const { difficulty } = req.body.description;
  if (!difficultyLevels.some((level) => level === difficulty)) {
    res.status(400).json({
      message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\''})
  } next();
};