// import the express module
const express=require('express');

// to set the url request we import router module
const router=express.Router();

// for url which function will be called is imported from this file
const FunctionCaller=require('../controllers/Functions');


// this is by default landing page
router.get('/',FunctionCaller.home);

// the url come from after the home page
router.use('/addtask',FunctionCaller.addtask);
router.use('/deletetask',FunctionCaller.deletetask);
router.use('/tasks',FunctionCaller.tasks);

// now we export these url  so from anywhere we can access these routes
module.exports= router;