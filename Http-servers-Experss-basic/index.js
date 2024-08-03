const express = require ("express");


const app = express();

app.use(express.json());


let patients = [{name:"John", kidneys:[{healthy:false},{healthy:true}]}];

// function sum (n,m){
//     n = parseInt(n);
//     m = parseInt(m);

//     return n+m;
// }

app.get("/",function(req,res){

//    const n = req.query.n;
//    const m = req.query.m;
//  const ans  = sum(n,m);

const johnKidneys = patients[0].kidneys;
const numberOfKidneys = johnKidneys.length;
let healthyKidneys = 0;
for (let i = 0 ;i<numberOfKidneys;i++){
    if(johnKidneys[i].healthy){
        healthyKidneys++;
    }
}
 const unhealthyKidneys = numberOfKidneys-healthyKidneys; 

     res.json({
    //     numberOfKidneys,
    //     healthyKidneys,
    //     unhealthyKidneys,
       });
})

app.post("/addKidney",function(req,res){
    
    const isHealthy = req.body.isHealthy;

    if (isHealthy) {

    patients[0].kidneys.push({
        healthy:true
    })}
    else{
        patients[0].kidneys.push({
            healthy:false
        })
    }

    res.status(400).json({           // the dev can send any status code like this 
        msg:"DONE!"
    })
})

app.listen(3000);