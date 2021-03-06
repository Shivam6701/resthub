// FileName: index.js
//Import express
let express = require('express')
//Import Body parser
let bodyParser = require('body-parser');
//Import Mongoose
let mongoose = require('mongoose');
//Initialize the app
let app=express();
//Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/resthub',{
    useNewUrlParser: true
});
//Import routes
let apiRoutes = require("./api-routes")
var db= mongoose.connection;
//Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

//setup server port
var port =process.env.PORT || 8080;

//Send message for default URL
app.get('/',(reeq, res) => res.send('Hello World with Express and nodemon'));
//Use Api routes in the APP
app.use('/api',apiRoutes)
//Launch app to listen to specific port
app.listen(port, function(){
    console.log("Running RestHub on port "+port);
});


