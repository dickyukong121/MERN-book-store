const express = require('express');

const BookCtrl = require('../controllers/book-ctrl');

const bookRouter = express.Router();

bookRouter.get('/:skipNumber', BookCtrl.getBooks);

module.exports = bookRouter;
