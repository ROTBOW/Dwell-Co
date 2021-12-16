/*

This is the api route for orders in the database

*/

const express = require('express');
const router = express.Router();
const Order = require('../../models/Order');
const validateOrderInput = require('../../validation/order')


// get all orders
router.get('/', (req, res) => {
    Order.find()
        .then(orders => res.json(orders))
        .catch(err => res.status(400).json('Error: ' + err))
})


//create new order
router.post('/', (req, res) => {
    const { errors, isValid } = validateOrderInput(req.body)

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newOrder = new Order({
        buyerName: req.body.buyerName,
        buyerEmail: req.body.buyerEmail,
        eventDate: req.body.eventDate,
        location: req.body.location,
        budget: req.body.budget,
        survey: req.body.survey,
        package: req.body.package
    });

    newOrder.save().then(event => res.json(event))
})

// might add update/delete routes later, right now worried about secruity



module.exports = router;