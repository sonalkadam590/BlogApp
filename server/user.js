const express = require('express');
const db = require('./db');
const utils = require('./utils');
const multer = require('multer');
const upload = multer({ dest: 'images/' })

const router = express.Router();

router.post('/user/login', (request, response) => {
    const email = request.body.email;
    const password = request.body.password;

    const statement = `select id, fullName, email from user where email ='${email}' and password = '${password}'`;
    const connection = db.connect();
    connection.query(statement, (error, users) => {
        connection.end();

        const result = {};
        if (error) {
            result['status'] = 'error';
            result['error'] = error;
        } else {
            if (users.length == 0) {
                // user doesnot exist
                result['status'] = 'error';
                result['error'] = 'invalid email or password';
            } else {
                // user exists
                result['status'] = 'success';
                result['data'] = users[0];
            }
        }
        
       // response.send(result);
       response.send(utils.createResponse(error, result));
    });
});

router.post('/user/register', (request, response) => {
    const fullName = request.body.fullName;
    const email = request.body.email;
    const password = request.body.password;
    const phone_no = request.body.phone_no;
    const address = request.body.address;    

    const statement = `insert into user
        (fullName, email, password,phone_no, address ) values
        ('${fullName}','${email}','${password}','${phone_no}','${address}')`;
    const connection = db.connect();
    connection.query(statement, (error, result) => {
        connection.end();
        response.send(utils.createResponse(error, result));
    });
});




router.post("/user/addblog",upload.single('blog_image'),(request,response)=>
{
    console.log("inside server route ");
    console.log(request.file.blog_image);
    console.log(request.body.blog_category);
    var title=request.body.title;
    var contents=request.body.contents;
    var blog_category=request.body.blog_category;
    var blog_image=request.file.filename;
    var blog_type=request.body.blog_type;
    console.log(blog_type);
   
    if(blog_category==='public_blog')
    {
    const queryText=`insert into blogs(title,contents,file_name,is_public,is_shared,cat_id)values('${title}','${contents}','${blog_image}','true','false',${blog_type})`;
    
    const connection = db.connect();
    connection.query(queryText,(err,result)=>{
       /* if(err==null)
        {
            response.send(JSON.stringify(result));
        }
        else{
            response.send(JSON.stringify(err.message));
        }
        */
       connection.end();
       response.send(utils.createResponse(err, result));


    });
    }
    if(blog_category==='shared_blog')
    {
    const queryText1=`insert into blogs(title,contents,file_name,is_public,is_shared,cat_id)values('${title}','${contents}','${blog_image}','false','true',${blog_type})`;
    
    const connection = db.connect();
    connection.query(queryText1,(err,result)=>{
       /* if(err==null)
        {
            response.send(JSON.stringify(result));
        }
        else{
            response.send(JSON.stringify(err.message));
        }
        */
       connection.end();
       response.send(utils.createResponse(err, result));


    });
    }






});


module.exports = router;









