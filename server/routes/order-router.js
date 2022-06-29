const express = require('express');

const OrderCtrl = require('../controllers/order-ctrl');

const orderRouter = express.Router();

orderRouter.post('/', OrderCtrl.saveOrder);

module.exports = orderRouter;
