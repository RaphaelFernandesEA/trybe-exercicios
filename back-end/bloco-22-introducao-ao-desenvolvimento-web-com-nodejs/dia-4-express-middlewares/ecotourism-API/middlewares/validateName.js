const validateName = (req, res, next) => {
  const { name } = req.body;

  if (name === undefined || name === '') {
      res.status(400).json({ message: 'O campo nome é obrigatório' });
    } else if (name.length <= 4) {
      res.status(400).json({ message: 'O campo name deve ter pelo menos 4 caracteres' });
    } 
      next();
};

module.exports = validateName;