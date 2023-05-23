const express = require('express');
const Events = require('../models/events');
const eventsRouter = express.Router();
const {
  getEvents,
  getEvent,
  createEvents,
  deleteEvents,
  updateEvents,
} = require('../controllers/eventsController');

// get all events
eventsRouter.get('/', getEvents);

// get one event
eventsRouter.get('/:id', getEvent);

// POST new event
eventsRouter.post('/', createEvents);

// DELETE event
eventsRouter.delete('/:id', deleteEvents);

// UPDATE event
eventsRouter.patch('/:id', updateEvents);

module.exports = eventsRouter;
