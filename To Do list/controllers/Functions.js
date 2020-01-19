const Todo=require('../models/database_schema');




// This function is responsiblee to show all the task present in database
module.exports.home=function(req,res){
    Todo.find({},(err,data)=>{
        if(err)
        {
            console.log("READ ERROR FOUND");
            return;
        }

        return res.render('Todo',{Data:data});

    });
}



// This function is responsible to add a new task in the database
module.exports.addtask=function(req,res){
    Todo.create(
        {
            task:req.query.task,
            tasktype:req.query.tasktype,
            taskdate:req.query.taskdate},
            
            function(err,data){

            if(err)
            {
                console.log("ERROR FOUND IN INSERT TIME");
                return res.redirect('back');
            }

            console.log("DATA SUCCESSFULLY INSERTED");

            return res.redirect('back');
    });
}


// This function is responsible to delete the task from the database
module.exports.deletetask=function(req,res){
    
    Todo.findByIdAndDelete(req.query.id,function(err){
        if(err)
        {
            console.log("FOUND ERROR IN DELETE");
            return;
        }
        return res.redirect('back');
    });
    
}



// this function is responsible to show the particular type of task on the basis of user requirement
module.exports.tasks=function(req,res){
    if(req.query.tasktype=="")
    {
        Todo.find({},(err,data)=>{
            if(err)
            {
                console.log("READ ERROR FOUND");
                return;
            }
            return res.render('Todo',{Data:data});
    
        });
    }
    else
    {
        Todo.find({tasktype:req.query.tasktype},(err,data)=>{
            if(err)
            {
                console.log("READ ERROR FOUND");
                return;
            }
            return res.render('Todo',{Data:data});
    
        });

    }
    
   
}