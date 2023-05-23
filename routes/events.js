const express = require('express');
const Events = require('../models/events');
const router = express.Router();
const {
  getEvents,
  getEvent,
  createEvents,
  deleteEvents,
  updateEvents,
} = require('../controllers/eventsController');

// get all events
router.get('/', getEvents);

// get one event
router.get('/:id', getEvent);

// POST new event
router.post('/', createEvents);

// DELETE event
router.delete('/:id', deleteEvents);

// UPDATE event
router.patch('/:id', updateEvents);

module.exports = router;
