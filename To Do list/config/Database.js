const mongoose=require('mongoose');


// to check wheather we connected with the data base or make the setup with the database these are some operation
mongoose.connect('mongodb://localhost/mydatabase');

const db=mongoose.connection;


// if connection  not exist between database and the client this will throw an error
db.on('error',console.error.bind(console,"ERROR FOUND IN DATABASE"));


// if connection exist then this function will wake up
db.once('open',function(){
    console.log("DATABASE SUCCESSFULLY CONNECTED");
});