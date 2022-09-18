const path = require('path');
const fs = require('fs');

//for creating unique ids
var uniqid = require('uniqid');

//routes 
module.exports = (app) => {
    // reads db.json and returns all saved notes as JSON
    app.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'));
    });    

    //POST /api/notes, create new notes 
    app.post('/api/notes', (req, res) => {
        let db = fs.readFileSync('db/db.json');
        db = JSON.parse(db);
        res.json(db);
        let userNote = {
            title: req.body.title,
            text: req.body.text,
            // creating unique ids
            id: uniqid(),
        };
        // push created note to db.json file
        db.push(userNote);
        fs.writeFileSync('db/db.json', JSON.stringify(db));
        res.json(db);
    });

    // DELETE /api/notes/:id delete note based on query parameter 
    app.delete('/api/notes/:id', (req, res) => {
        let db = JSON.parse(fs.readFileSync('db/db.json'));
        let deleteNotes = db.filter(item => item.id !== req.params.id);
        fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
        res.json(deleteNotes);
    })
};