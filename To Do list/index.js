const express=require('express');
const port=8000;

const app=express();


// To set which view engine we are going to use
app.set('view engine','ejs');
app.set('views','./views');


// To access the static file like js ,css or images file we include that folder name ASSETS
app.use(express.static('assets'));

// To send the url to the other file which is present in routes folder
app.use('/',require('./routes/index'));

// to access the database we include the databases file
const db=require('./config/Database');
const Todo=require('./models/database_schema');

// for the encoding the data which comes from the user side in the form of form data
app.use(express.urlencoded());



// if the server not getting the port and face any failure in startup then this function will be called
app.listen(port,function(err){
    if(err)
    {
        console.log("SERVER FOUND AN ERROR");
    }
    console.log("SERVER RUN SUCCESSFULLy");
});