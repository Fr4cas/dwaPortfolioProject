var express = require('express')
var ejs = require('ejs')
var mysql = require('mysql2')

// Create the App
const app = express()
const port = 8000

// Templating Engine
app.set('view engine', 'ejs');

// Set up css

// Load the Router
const mainRoutes = require("./routes/main");
app.use('/', mainRoutes);

// Start the web app listening
app.listen(port, () => console.log(`Education app listening on port ${port}!`))