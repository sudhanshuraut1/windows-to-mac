const express = require("express");

const app = express();

let numberOfReq = 0;

function totalReq(req,res,next){
     numberOfReq ++;
     console.log(numberOfReq);
     next();
}

app.use(totalReq);        // app.use is express.js function , wherever its written in the code it will call the middleware it is passed for each and every route/ request which comes after/below it

function kidneyMiddleware (req , res , next ){
    const kidneyId = req.query.kidneyId;
console.log("in kidneycheck");
    if ( req.kidneyId!=1 && kidneyId!=2){
        res.status(403).json({
            msg: "humans can have 1 or 2 kidneys"
        });
    }else{
        next();
    }
};

function userMiddleware(req,res,next){
const Name = req.headers.naam;
const password = req.headers.password;
console.log(Name);
console.log(password);
    console.log("in user check");
    if(Name !== "sudha" ||  password !== "parul"){
        res.status(403).json({
            msg: "galat tala / chabi"
        });
    }else{
        next();
    }
}


app.get("/health-checkup",userMiddleware,kidneyMiddleware, function(req,res){
      
    res.json({
       msg: "all good ok takatak"
    });

})

app.use(express.json());

app.post("/health-appUse",function(req,res){

    console.log(req.body);
    res.json({
        msg: "for app.use(express.json())"
    })
})


app.listen(3002);