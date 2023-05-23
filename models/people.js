const mongoose = require('mongoose');


const PeopleSchema = new mongoose.Schema({
    name: String,
    location: String,
    company: String,
    email: String,
    phone: String,
    notes: String,
});

const People = mongoose.model('People', PeopleSchema)

module.exports = People