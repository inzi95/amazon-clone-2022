const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors');

const stripe = require('stripe')('sk_test_51LTfYGIwXftLUkNiJf3nljzkaOlJDILXlPtPz8OKpptbGFhcxOSxgewZPvieZxvGzO5M4DLMQPIYoyJVLjgM3Dj900Uo6pzWYS');

// API

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get('/', (req, res) => res.status(200).send('Hello World'));

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('Payment Request Received', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    // OK = CReated
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen Command
exports.api = functions.https.onRequest(app);

