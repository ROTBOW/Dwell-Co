const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const OrderSchema = new Schema(
    {
        buyerName: {
            type: String,
            required: true
        },
        buyerEmail: {
            type: String,
            required: true
        },
        eventDate: {
            type: Date,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        budget: {
            type: Number,
            required: true
        },
        data: {
            type: String,
            required: true
        }
    }
)

module.exports = Order = mongoose.model('Order', OrderSchema)