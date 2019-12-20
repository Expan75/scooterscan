// model for city

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
const CityQuery = new Schema({
    city: {
        type: Schema.Types.ObjectId,
        ref: 'City'
    }
}, {
    collection: 'CityQueries',
    timestamps: true
});

module.exports = mongoose.model('CityQuery', CityQuery);