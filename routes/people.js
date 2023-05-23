const express = require('express')
const People = require('../models/people')
const peopleRouter = express.Router()
const {
    
getPeople,
getPerson,
createPeople,
deletePeople,
updatePeople
} = require('../controllers/peopleController')


// get all people
peopleRouter.get('/', getPeople)

//get one person

peopleRouter.get('/:id',getPerson)

//POST new person

peopleRouter.post('/', createPeople)

//DELETE person

peopleRouter.delete('/:id', deletePeople)

//UPDATE person
peopleRouter.patch('/:id',updatePeople)

 
module.exports = peopleRouter