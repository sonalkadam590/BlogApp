const express = require('express');
const bodyParser = require('body-parser');

const moviesRouter = require('./movie');
const usersRouter = require('./user');
const blogRouter = require('./blog');
const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// no route is required for any file in the images directory
app.use(express.static('images'));


app.use(usersRouter);
app.use(moviesRouter);
app.use(blogRouter);

app.listen(3000, '0.0.0.0', () => {
    console.log(`Server started on port 3000`);
});