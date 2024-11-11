const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' }
});

module.exports = mongoose.model('Food', foodSchema);