const express = require('express');

const CheckoutCtrl = require('../controllers/checkout-ctrl');

const checkoutRouter = express.Router();

checkoutRouter.post('/create-checkout-session', CheckoutCtrl.checkout);

module.exports = checkoutRouter;
