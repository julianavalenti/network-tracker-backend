const express = require('express');
const eventsRouter = express.Router();
const Events = require('../models/events');
const mongoose = require ('mongoose')

// PEOPLE INDEX ROUTE

const getEvents = async (req,res) => {
  const events = await Events.find({})
  res.status(200).json(events)
}

// Get one person

const getEvent = async (req,res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'No event found'})
  }

  const event = await Events.findById(id)

  if (!event) {
    return res.status(404).json({error: 'No event found'})
  }
  res.status(200).json(event)
}


// PEOPLE CREATE ROUTE

const createEvents = async (req,res) => {
  const {title,location,company,date,notes} = req.body

  try {
const events = await Events.create({title,location,company,date,notes})
res.status(200).json(events)
  }catch  (error){
      res.status(400).json({error: error.message})
  } 

}


//PEOPLE DELETE ROUTE 
const deleteEvents = async (req,res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'No event found'})
  }

  const event = await Events.findOneAndDelete({ _id: id });

  if (!event) {
    return res.status(404).json({ error: 'No event found' });
  }

  res.status(200).json(event);
};

  // PEOPLE UPDATE ROUTE

  const updateEvents = async (req,res) => {
    const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'No event found'})
  }

  const event = await Events.findOneAndUpdate({_id:id}, {
    ...req.body
  })

  if(!event){
    return res.status(404).json({error:'No event found'})
  }
  res.status(200).json(event)
}

module.exports = {
  getEvents,
  getEvent,
  createEvents,
  deleteEvents,
  updateEvents,
  
}