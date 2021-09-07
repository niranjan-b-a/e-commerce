const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishSchema = new Schema({
    items: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: false,
    },
    totalQty: {
        type: Number,
        default: 0,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Wish', wishSchema);