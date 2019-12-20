// model for city

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
const City = new Schema({
    name: {
        type: String
    },
    lng: {
        type: Number
    },
    lat: {
        type: Number
    },
}, {
    collection: 'Cities'
});

module.exports = mongoose.model('City', City);