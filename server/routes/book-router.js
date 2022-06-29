const express = require('express');

const BookCtrl = require('../controllers/book-ctrl');

const bookRouter = express.Router();

bookRouter.get('/', BookCtrl.getBooks);

module.exports = bookRouter;
