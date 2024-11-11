const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Place an order
router.post('/', async (req, res) => {
    const { userId, items, total } = req.body;
    try {
        const newOrder = new Order({ user: userId, items, total });
        await newOrder.save();
        res.json({ message: 'Order placed successfully' });
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;