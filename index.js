var express = require('express')
var ejs = require('ejs')
var mysql = require('mysql2')

// Create the App
const app = express()
const port = 8000

// Templating Engine
app.set('view engine', 'ejs');

// Set up css
app.use(express.static(__dirname + '/public'));

// Define the database connection
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'vocabulary_app_user',
    password: 'qwertyuiop',
    database: 'vocabulary_app'
});

// Connect to the database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

// Load the Router
const mainRoutes = require("./routes/main");
app.use('/', mainRoutes);

// Start the web app listening
app.listen(port, () => console.log(`Education app listening on port ${port}!`))