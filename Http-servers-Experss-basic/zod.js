const z = require("zod");
 const express = require("express");
const app = express();

//const schema = z.array(z.number());

const objSchema = z.object({
  email:z.string(),
  password:z.string(),
  country:z.literal("IN").or(z.literal("US")),

  kidneys:z.array(z.number())

})
f
app.use(express.json());

app.post("/health-zod",function(req,res){

    const item = req.body.item;
    const response = objSchema.safeParse(item);
    if(!response.success){
        res.status(411).send("galattttt input")
    }else{d
    res.status(200).send(
        response
    )}

});

app.listen(3004)