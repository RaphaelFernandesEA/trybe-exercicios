const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();

  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
};

const registerBook = async ({ title, author, pageQuantity }) => {
  const registeredBook = await Book.create({ title, author, pageQuantity });

  return registeredBook;
};

const updateBook = async (id, { title, author, pageQuantity }) => {
  const updatedBook = await Book.update({ title, author, pageQuantity }, { where: { id }});

  return updatedBook;
}

const deleteBook = async (id) => {
  const deletedBook = await Book.destroy({ where: { id } });
};

module.exports = {
  getAll,
  getById,
  registerBook,
  updateBook,
  deleteBook
};
