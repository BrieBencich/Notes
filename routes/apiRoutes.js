const store = require("../Develop/db/store");
const { read } = require("../Develop/db/store");

const router = require('express').Router(); 
cost store = require('../Develop/db/store'); 


router.get('/notes', (req, res) => { 
    store
    .getNotes()
    .then((notes) => { 
        return res.json(notes);
    })
    .catch((err) => res.status(500).json(err)); 
}); 

router.post('/notes', (req, res) => { 
    store 
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err)); 

}); 

module.exports = router; 

