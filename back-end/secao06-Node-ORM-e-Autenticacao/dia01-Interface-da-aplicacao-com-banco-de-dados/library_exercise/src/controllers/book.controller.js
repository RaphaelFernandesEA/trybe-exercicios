const BookService = require('../services/book.service');

const getAll = async (_req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await BookService.getById(id);
    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const registerBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  try {
    const registeredBook = await BookService.registerBook({ title, author, pageQuantity })
    return res.status(201).json(registeredBook);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;

  try {
    const updatedBook = await BookService.updateBook(id, { title, author, pageQuantity });
    return res.status(200).json({ message: "Book updated!"});
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const removedBook = await BookService.deleteBook(id);
    return res.status(200).json({ message: "Livro deletado" });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Algo deu errado" })
  }

}

module.exports = {
  getAll,
  getById,
  registerBook,
  updateBook,
  deleteBook,
};