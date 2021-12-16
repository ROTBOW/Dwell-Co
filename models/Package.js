const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PackageSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        desc: {
            type: String,
            required: false
        }
    }
)

module.exports = Package = mongoose.model('Package', PackageSchema)