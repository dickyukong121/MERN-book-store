const Book = require('../models/book-model');

getBooks = async (req, res) => {
  await Book.find({})
    .skip(req.params.skipNumber)
    .limit(20)
    .then((books, err) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!books.length) {
        return res
          .status(404)
          .json({ success: false, error: `Book not found` });
      }
      return res.status(200).json({ success: true, data: books });
    })
    .catch(err => console.log(err));
};

saveBooks = async (req, res) => {
  Book.find({}).then((books, err) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!books.length) {
      //Create a random booklist
      const categoryArray = ['Fiction', 'Comics', 'Dictionary'];
      const booklist = Array.from({ length: 200 }, (v, i) => i).reduce(
        (previousList, number) => {
          return [
            ...previousList,
            {
              name: `Book ${number + 1}`,
              category:
                categoryArray[Math.floor(Math.random() * categoryArray.length)],
              price: Math.floor(Math.random() * 100) + 1
            }
          ];
        },
        []
      );
      Book.insertMany(booklist)
        .then(function () {
          console.log('Book inserted');
        })
        .catch(function (err) {
          console.log(err);
        });
    } else {
      console.log('Books already existed');
    }
  });
};

module.exports = {
  getBooks,
  saveBooks
};
