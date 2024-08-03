const express = require("express");

const app = express();

app.use(express.json());

app.post("/health-input", function(req,res){

    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("you have " + kidneyLength + " Kidneys");
})

app.use(function(err,req,res,next){                     // global caches just to hide exception from end user
    res.status(500).json({
        msg: "locha hua server me"
    })
})

app.listen(3003);