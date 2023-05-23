const express = require('express');
const peopleRouter = express.Router();
const People = require('../models/people');
const mongoose = require ('mongoose')

// PEOPLE INDEX ROUTE

const getPeople = async (req,res) => {
  const people = await People.find({})
  res.status(200).json(people)
}

// Get one person

const getPerson = async (req,res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'No person found'})
  }

  const person = await People.findById(id)

  if (!person) {
    return res.status(404).json({error: 'No person found'})
  }
  res.status(200).json(person)
}


// PEOPLE CREATE ROUTE

const createPeople = async (req,res) => {
  const {name,location,company,email,phone,notes} = req.body

  try {
const people = await People.create({name,location,company,email,phone,notes})
res.status(200).json(people)
  }catch  (error){
      res.status(400).json({error: error.message})
  } 

}


//PEOPLE DELETE ROUTE 
const deletePeople = async (req,res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'No person found'})
  }

  const person = await People.findOneAndDelete({_id: id})
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'No person found'})
  }

  res.status(200).json(person)


}

  // PEOPLE UPDATE ROUTE

  const updatePeople = async (req,res) => {
    const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'No person found'})
  }

  const person = await People.findOneAndUpdate({_id:id}, {
    ...req.body
  })

  if(!person){
    return res.status(404).json({error:'No person found'})
  }
  res.status(200).json(person)
}

module.exports = {
  getPeople,
  getPerson,
  createPeople,
  deletePeople,
  updatePeople,
  
}