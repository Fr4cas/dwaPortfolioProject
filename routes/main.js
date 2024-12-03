// Create router
const express = require("express");
const router = express.Router();

// defined data
var appData = {appName: "Vocabulary App"}

// Routes
router.get('/', function(req, res) {
    res.render('index.ejs', appData)
});

router.get('/about', function(req, res) {
res.render('about.ejs', appData)
})

router.get('/learn', function(req, res) {
    res.render('learn.ejs', appData)
})

// Search Page
router.get('/search', function(req, res) {
    res.render('search.ejs', appData)
})

router.get('/search_result', function (req, res) {
     // TODO: search in the database
    res.send(req.query);
});

router.get('/list', function(req, res) {
    let sqlquery = "SELECT * FROM words"; // query database to get all the books
    // execute sql query
    db.query(sqlquery, (err, result) => {
    if (err) {
        res.redirect('./'); 
    }
    res.send(result)
    });
});

// Export the Router
module.exports = router;