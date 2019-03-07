const express = require('express');
const moviesDB = require('../movies/moviesModel');

const app = express();
app.use(express.json());

app.get('', (req, res, next) => {
    moviesDB.getAll().then(result => {
        res.status(200).json(result)
    })
})




module.exports = app;