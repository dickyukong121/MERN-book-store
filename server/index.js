const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bookRouter = require('./routes/book-router');
const orderRouter = require('./routes/order-router');
const checkoutRouter = require('./routes/checkout-router');
const BookCtrl = require('./controllers/book-ctrl');

const app = express();

require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

const apiPort = process.env.PORT || 4000;
const uri = process.env.DB_URI;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

app.use('/books', bookRouter);
app.use('/order', orderRouter);
app.use('/checkout', checkoutRouter);
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(e => console.error('Connection error', e.message));

const connection = mongoose.connection;

connection.once('open', function () {
  console.log('MongoDB database connection established successfully');
  BookCtrl.saveBooks();
});
