const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(cors({
origin: [
    'http://localhost:3000',
    'https://gdso.netlify.app/',
    'https://gdso.netlify.app',
    'https://gdso-ofj4q6vde-marwa-sayed12s-projects.vercel.app/',
     'https://gdso-ofj4q6vde-marwa-sayed12s-projects.vercel.app'
  ]
}));
app.use(express.json());

// Create Checkout Session (One-time donation)
app.post('/create-checkout-session', async (req, res) => {
  try {

    const { amount, currency = 'usd', success_url, cancel_url } = req.body;

    console.log("Amount received:", amount);
    console.log("Stripe key exists:", !!process.env.STRIPE_SECRET_KEY);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: "Charity Donation",
              description: "Thank you for supporting our mission."
            },
            unit_amount: amount * 100,  // convert to cents
          },
          quantity: 1
        }
      ],
      success_url,
      cancel_url,
    });

    res.json({ id: session.id });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
