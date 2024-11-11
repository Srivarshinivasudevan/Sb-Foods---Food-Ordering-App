const express = require('express');
const Food = require('../models/Food');
const router = express.Router();

// Get all foods
router.get('/', async (req, res) => {
    try {
        const foods = await Food.find();
        res.json(foods);
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;