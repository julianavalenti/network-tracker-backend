const mongoose = require('mongoose');


const EventsSchema = new mongoose.Schema({
    title: String,
    location: String,
    company: String,
    date: Date,
    notes: String,
});

module.exports = mongoose.model("Events", EventsSchema);