const express = require('express');
const db = require('./db');
const utils = require('./utils');
const multer = require('multer');
const upload = multer({ dest: 'images/' })

const router = express.Router();

router.get('/movie/:id', (request, response) => {
    const id = request.params.id;
    const statement = `select id, title, year, rating, shortDescription, directors, writers, stars, storyline, thumbnail from  Movie where id = ${id}`;
    const connection = db.connect();
    connection.query(statement, (error, movies) => {
        connection.end();
        response.send(utils.createResponse(error, movies[0]));
    });
});

router.get('/movie', (request, response) => {
    const statement = `select id, title, year, rating, shortDescription, directors, writers, stars, storyline, thumbnail  from  Movie`;
    const connection = db.connect();
    connection.query(statement, (error, movies) => {
        connection.end();
        response.send(utils.createResponse(error, movies));
    });
});

router.delete('/movie/:id', (request, response) => {
    const id = request.params.id;
    const statement = `delete from  Movie where id = ${id}`;
    const connection = db.connect();
    connection.query(statement, (error, movies) => {
        connection.end();
        response.send(utils.createResponse(error, movies));
    });
});

// for uploading an image
router.post('/movie', upload.single('thumbnail'), (request, response) => {
    const title = request.body.title;
    const year = request.body.year;
    const rating = request.body.rating;
    const shortDescription = request.body.shortDescription;
    const directors = request.body.directors;
    const writers = request.body.writers;
    const stars = request.body.stars;
    const storyline = request.body.storyline;
    const thumbnail = request.file.filename;
    
    // console.log(`uploaded file: ${request.file.filename}`);
    const statement = `insert into Movie
        (title, year, rating, shortDescription, directors, writers, stars, storyline, thumbnail) values 
        ('${title}', ${year}, ${rating}, '${shortDescription}', '${directors}', '${writers}', '${stars}', '${storyline}', '${thumbnail}')`;

    console.log(statement);
    const connection = db.connect();
    connection.query(statement, (error, movies) => {
        connection.end();
        response.send(utils.createResponse(error, movies));
    });
});

module.exports = router;
