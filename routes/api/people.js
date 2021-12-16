/*

This is the api route for people that will be in the thank you page

*/
const express = require('express');
const router = express.Router();
const Person = require('../../models/Person');
// const validatePersonInput = require('../../validation/')


//get all people
router.get('/', (req, res) => {
    Person.find()
        .then(people => res.json(people))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.post('/', (req, res) => {
    const newPerson = new Person({
        name: req.body.name,
        img: req.body.img,
        textBlock: req.body.textBlock
    });

    newPerson.save().then(person => res.json(person))
})

router.patch('/:personId', (req, res) => {
    Person.findById(req.params.personId)
        .then(person => {
            if (req.body.name) person.name = req.body.name
            if (req.body.img) person.img = req.body.img
            if (req.body.textBlock) person.textBlock = req.body.textBlock
            person.save().then(person => res.json(person))
        })
        .catch(err => res.status(404).json({noPeopleFound: 'No people were found with that ID'}))
})

router.delete('/:personId', (req, res) => {
    Person.findById(req.params.personId)
        .then(person => {
            person.delete()
            .then(() => res.status(204).json({SUCCESS: 'the person was deleted'}))
        })
        .catch(err => res.status(404).json({noPeopleFound: 'no person with that ID'}))
})

module.exports = router;