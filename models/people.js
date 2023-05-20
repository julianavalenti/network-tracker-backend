const mongoose = require('mongoose');


const PeopleSchema = new mongoose.Schema({
    name: String,
    location: String,
    company: String,
    email: String,
    phone: String,
    notes: String,
});

module.exports = mongoose.model("People", PeopleSchema);