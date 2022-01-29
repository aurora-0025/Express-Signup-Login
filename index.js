const express = require("express");
const app = express();
const router = require('./routes/router.js')
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

app.set('view engine', 'hbs');
app.engine('hbs', handlebars.engine({
layoutsDir: __dirname + '/views/layouts',
partialsDir: __dirname + '/views/partials/',
extname: 'hbs'
}));

//MIDDLEWARE
// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/',router) //middleware to call all routes


app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));