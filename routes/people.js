const express = require('express')
const People = require('../models/people')
const router = express.Router()
const {
    
getPeople,
getPerson,
createPeople,
deletePeople,
updatePeople
} = require('../controllers/peopleController')


// get all people
router.get('/', getPeople)

//get one person

router.get('/:id',getPerson)

//POST new person

router.post('/', createPeople)

//DELETE person

router.delete('/:id', deletePeople)

//UPDATE person
router.patch('/:id',updatePeople)

 
module.exports = router