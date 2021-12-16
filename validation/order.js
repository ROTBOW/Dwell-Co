/*
this will validate all orders before they are send to the database
*/

const Validator = require("validator");
const validText = require("./validText")

module.exports = function validateOrderInput(data) {
    let errors = {};

    data.buyerName = validText(data.buyerName) ? data.buyerName : '';
    data.buyerEmail = validText(data.buyerEmail) ? data.buyerEmail : '';
    data.location = validText(data.location) ? data.location : '';
    data.survey = validText(data.survey) ? data.survey : '';

    if (Validator.isEmpty(data.buyerName) || !data.buyerName) {
        errors.buyerName = 'Buyer name field is required'
    }


    if (!Validator.isEmail(data.buyerEmail) || !data.buyerEmail) {
        errors.buyerEmail = 'Buyer email field is required'
    }

    if (Validator.isEmpty(data.eventDate) || !data.eventDate) {
        errors.eventDate = 'Event Date field is required'
    }

    if (data.eventDate) {
        let eventDate = data.eventDate;
        if (typeof eventDate === 'string') {
            eventDate = Date.parse(data.eventDate);
        }
        let now = new Date();
        now.setHours(now.getHours() - 7);
        if (eventDate < now) {
            errors.eventDate = 'Event Date must be in the future'
        }
    }

    if (Validator.isEmpty(data.budget) || !data.budget) {
        errors.budget = 'Budget field is required'
    }
    if (!Number(data.budget)) {
        errors.budget = 'Budget is Invalid'
    }

    if (Validator.isEmpty(data.survey) || !data.survey) {
        errors.survey = 'Survey field is required'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };
}