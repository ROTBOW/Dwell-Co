const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PersonSchema = new Schema(
    { 
        name: {
            type: String,
            required: true,
        },
        imgs: {
            type: String,
            required: false,
        },
        textBlock: {
            type: String,
            required: false
        }

    }
)

module.exports = Person = mongoose.model('Person', PersonSchema)