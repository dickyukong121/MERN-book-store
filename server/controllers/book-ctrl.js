const Book = require('../models/book-model');

getBooks = async (req, res) => {
  await Book.find({})
    .skip(req.params.skipNumber)
    .limit(20)
    .then(books => {
      if (!books.length) {
        return res
          .status(404)
          .json({ success: false, error: `Book not found` });
      }
      return res.status(200).json({ success: true, data: books });
    })
    .catch(err => {
      res.status(400).json({ success: false, error: err });
    });
};

saveBooks = async (req, res) => {
  Book.find({})
    .then(books => {
      if (!books.length) {
        //If no any booklist in db, insert a booklist
        Book.insertMany(req)
          .then(() => {
            console.log('Book inserted');
          })
          .catch(err => res.status(400).send('Book insert failed'));
      } else {
        console.log('Books already existed');
      }
    })
    .catch(err => {
      res.status(400).json({ success: false, error: err });
    });
};

module.exports = {
  getBooks,
  saveBooks
};
