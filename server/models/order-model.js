const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Book = require('./book-model')

const Order = new Schema(
  {
    customerName: { type: String, required: true },
    phone: { type: String, required: true },
    book: {
      name: { type: String, required: true },
      category: { type: String, required: true },
      price: { type: Number, required: true }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('orders', Order);
