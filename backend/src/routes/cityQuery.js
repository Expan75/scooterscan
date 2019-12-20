const express = require('express');
const app = express();
const router = express.Router()

// Schema
const cityQuery = require('../models/cityQuery');

// Get all CityQueries
router.route('/').get(function (req, res) {
    const q = cityQuery.find({}, function (e, items) {
        if (e) {
            console.log(e);
        } else {
            res.json(items)
        }
    });
});

// get specific Query
router.route('/:id').get(function (req, res) {
    const q = cityQuery.getById(req.params.id, function (e, item) {
        res.json(item)
    });
});

// submit a query
router.route('/create').get(function (req, res) {
    const newCityQuery = new cityQuery(req.body);
    newCityQuery.save()
        .then(item => {
            res.json('Added')
        })
        .catch(e => {
            res.status(400).send('unable to save to DB')
        })
});

// update query
router.route('update/:id').put(function (req, res) {
    cityQuery.findById(req.params.id, function (e, item) {
        if (!item) {
            return next(new Error('Could not load document'))
        } else {
            item = req.body
            item.save()
                .then(item => {
                    res.json('cityQuery %s was updated' % item.id.toString())
                })
                .catch(e => {
                    res.status(400).send('Unable to update!')
                });
        }
    });
});

// delete 
router.route('/delete/:id').delete(function (req, res) {

});