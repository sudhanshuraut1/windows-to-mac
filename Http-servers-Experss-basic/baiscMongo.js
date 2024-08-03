const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sudhanshuraut1:BVE57u9ni6zrscNl@cluster0.gt66pcx.mongodb.net/userappnew")

const User = mongoose.model('Users', { name: String , email : String , password : String});

const user = new User({ name: 'Sudh' , email : 'sudh@accelya.com' , password : '123' });

user.save() ; 