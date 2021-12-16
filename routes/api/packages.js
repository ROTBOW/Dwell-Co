/*

This is the api route for packages that will be in the price-list page

*/
const express = require('express');
const router = express.Router();
const Package = require('../../models/Package');


//get all packages
router.get('/', (req, res) => {
    Package.find()
        .then(packages => res.json(packages))
        .catch(err => res.status(400).json("error: " + err))
})

//create a package
router.post('/', (req, res) => {
    const newPackage = new Package({
        title: req.body.title,
        price: req.body.price,
        desc: req.body.desc
    })

    newPackage.save().then(package => res.json(package))
})

//update a package
router.patch('/:packageId', (req, res) => {
    Package.findById(req.params.packageId)
        .then(package1 => {
            if (req.body.title) package1.title = req.body.title
            if (req.body.price) package1.price = req.body.price
            if (req.body.desc) package1.desc = req.body.desc
            package1.save().then(package1 => res.json(package1))
        })
        .catch(err => res.status(404).json({noPackageFound: 'No packages were found with that ID'}))
})

//delete a package
router.delete('/:packageid', (req, res) => {
    /* im going to leave this "unloaded" till users are ready
    
   Package.findById(req.params.packageId)
    .then(package1 => {
        package1.delete()
            .then(() => res.status(204))
    })
    .catch(err => res.status(404).json({noPackageFound: 'No package were found with that ID'})
    */
})
module.exports = router;