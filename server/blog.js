const express = require('express');
const db = require('./db');
const utils = require('./utils');


const router = express.Router();



router.get('/blogs', (request, response) => {
    const statement = `select id, title, contents , file_name from blogs `;
    const connection = db.connect();
    connection.query(statement, (error, blogs) => {
        connection.end();
        response.send(utils.createResponse(error, blogs));
    });
});


router.get('/blogs/cat', (request, response) => {
    const statement = `select id, cat_name from category `;
    const connection = db.connect();
    connection.query(statement, (error, blogs) => {
        connection.end();
        response.send(utils.createResponse(error, blogs));
    });
});

router.put("/:id",(request,response)=>{
    var blog_id=request.params.id;
    const statement = "update title, contents from blogs where id="+blog_id;
    const connection = db.connect();
    connection.query(statement, (error, blogs) => {
        connection.end();
        response.send(utils.createResponse(error, blogs));
    });

});

module.exports = router;