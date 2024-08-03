
const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const port = 3000
app.use(bodyParser.json());


 app.get('/convo', (req, res) => {
  console.log ( req.headers)
  console.log(req.body)
   res.send({
    msg:"2+2=4",
    tomcat : "serveer"
   })
 })

// app.post('/post',(req, res)=>{
//     const data = req.body ;
//     console.log(data);
//     res.send(<html>
//         <head>
//           <title>POST Request Body</title>
//         </head>
//         <body>
//           <h1>POST Request Body</h1>
//           <p>Received body: ${JSON.stringify(postData)}</p>
//         </body>
//         </html>)
//})
 
app.listen(port)