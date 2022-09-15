module.exports = (req, res, next) => {
  const { description } = req.body;
  const { createdAt, rating, difficulty } = description;
  if (!description) {
    res.status(400).json({ message: 'O campo description é obrigatório' });
  } else if (!createdAt) {
    res.status(400).json({ message: 'O campo createdAt é obrigatório' });
  } else if (!rating) {
    res.status(400).json({ message: 'O campo rating é obrigatório' });
  } else if (!difficulty) {
    res.status(400).json({ message: 'O campo difficulty é obrigatório' });
  }
  next();
};