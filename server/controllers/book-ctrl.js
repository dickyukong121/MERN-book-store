const Book = require('../models/book-model');

getBooks = async (req, res) => {
  await Book.find({}, (err, books) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!books.length) {
      return res.status(404).json({ success: false, error: `Book not found` });
    }
    return res.status(200).json({ success: true, data: books });
  }).catch(err => console.log(err));
};

module.exports = {
  getBooks
};
