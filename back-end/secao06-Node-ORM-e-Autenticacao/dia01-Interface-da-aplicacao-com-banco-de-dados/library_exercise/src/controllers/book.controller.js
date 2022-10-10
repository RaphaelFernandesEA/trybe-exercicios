const BookService = require('../services/book.service');

const getAll = async (_req, res) => {
  try {
    const books = await BookService.getAll();
    return res(200).jsson(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await BookService.getById(id);
    return res(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAll,
  getById,
};