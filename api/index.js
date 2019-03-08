const express = require('express');
const moviesDB = require('../movies/moviesModel');

const app = express();
app.use(express.json());

app.get('', (req, res, next) => {
    moviesDB.getAll().then(result => {
        res.status(200).json(result)
    })
})
app.post('', (req, res, next) => {
    moviesDB.insert(req.body).then(result => {
        res.status(201).json(result)
    })
})
app.get('/:id', (req, res, next) => {
    moviesDB.getMovie(req.params.id).then(result => {
        res.status(200).json(result);
    })
})
app.delete('/:id', (req, res, next) => {
    moviesDB.remove(req.params.id).then(result => {
        if (!result < 1) {
            res.status(201).json({message: "deleted"})
        }
    })
})




module.exports = app;