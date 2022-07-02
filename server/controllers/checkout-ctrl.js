require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SK_KEY);

checkout = async (req, res) => {
  const product = await stripe.products.create({
    name: req.body.book.name
  });
  const price = await stripe.prices.create({
    unit_amount: req.body.book.price * 100,
    currency: 'hkd',
    product: product.id
  });

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: price.id,
        quantity: 1
      }
    ],
    mode: 'payment',
    success_url: `${req.headers.origin}/result`,
    cancel_url: `${req.headers.origin}`
  });

  res.json({ url: session.url });
};

module.exports = {
  checkout
};
