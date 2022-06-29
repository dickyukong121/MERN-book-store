const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bookRouter = require('./routes/book-router');
const orderRouter = require('./routes/order-router');
const Book = require('./models/book-model');
const dummy = require('./data');
require('dotenv').config();

const app = express();
const apiPort = 4000;
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USERID}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.uvhxl.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .catch(e => console.error('Connection error', e.message));

const connection = mongoose.connection;
connection.once('open', function () {
  console.log('MongoDB database connection established successfully');
  Book.find({}, (err, books) => {
    if (err) {
      console.log(error);
    }
    if (!books.length) {
      Book.insertMany(dummy)
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
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

app.use('/books', bookRouter);
app.use('/order', orderRouter);
