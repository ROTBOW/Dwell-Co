const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PersonSchema = new Schema(
    { 
        fname: {
            type: String,
            required: true,
        },
        lname: {
            type: String,
            required: false,
        },
        imgs: {
            type: String,
            required: false,
        },

    }
)

module.exports = Person = mongoose.model('Person', PersonSchema)