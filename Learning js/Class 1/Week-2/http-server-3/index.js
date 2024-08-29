const express = require('express');
const app = express();

var users = [{
    name: 'John',
    kidneys:[{
        healthy: false
    }] 
}]

app.use(express.json());

// Getting all the Kidneys
app.get('/', function(req, res){
   const johnkidneys = users[0].kidneys;
   const noOfKidneys = johnkidneys.length;
   let noOfHealthyKidneys = 0;
   for(let i=0; i<johnkidneys.length; i++){
       if(johnkidneys[i].healthy == true){
           noOfHealthyKidneys++;
       }
   }
   const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;
   res.json({
        noOfKidneys, 
        noOfHealthyKidneys,
        noOfUnhealthyKidneys
   })
   console.log(noOfKidneys + " " + noOfHealthyKidneys);
})

// Adding Healthy Kidney
app.post('/', function(req, res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({ 
        healthy: isHealthy
    });
    res.json({
        msg: "Kidney Added"
    })
})

// Updating all the healthy Kidneys
app.put('/', function(req, res){
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

// Removing all the unhealthy Kidneys
app.delete('/', function(req, res){
    if(checkUnhealthyKidneys()){
        const newKidneys = [];
        for(let i=0; i<users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                });
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
           msg : "Kidney Removed"
        });
    }
    else{
        res.status(411).json({
            msg : "No unhealthy Kidney"
        });
    }
})  

function  checkUnhealthyKidneys(){
    for(let i=0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy == false){
            return true;
        }
    }
    return false;
}

app.listen(3000);