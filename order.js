const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [{ food: { type: mongoose.Schema.Types.ObjectId, ref: 'Food' }, quantity: { type: Number, required: true } }],
    total: { type: Number, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);