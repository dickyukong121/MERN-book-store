const Order = require('../models/order-model');

saveOrder = async (req, res) => {
  let order = new Order(req.body);
  order
    .save()
    .then(() => {
      res.status(200).json({ order: 'order successfully' });
    })
    .catch(err => {
      res.status(400).send('order failed');
    });
};

module.exports = {
  saveOrder
};
