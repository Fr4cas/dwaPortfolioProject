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

// Learning Pages
router.get('/learn', function(req, res) {
    res.render('learn.ejs', appData)
})

router.get('/learned', function(req, res) {
    let sqlquery = "SELECT * FROM words"; // query database to get all the books
    // execute sql query
    db.query(sqlquery, (err, result) => {
    if (err) {
        res.redirect('./'); 
    }
    let newData = Object.assign({}, appData, {learnedWords:result});
        console.log(newData)
        res.render("learned.ejs", newData)
    });
});

// Search pages
router.get('/search', function(req, res) {
    res.render('search.ejs', appData)
})

router.get('/search_result', function (req, res) {
     // TODO: search in the database
    res.send(req.query);
});

// Add words page
router.get('/addword', function(req, res) {
    res.render('addword.ejs', appData)
})

router.post('/wordadded', function (req,res) {
    // saving data in database
    let sqlquery = "INSERT INTO words (word, meaning, example_sentence, difficulty_level, category) VALUES (?,?,?,?,?)";

    // execute sql query
    let newrecord = [
        req.body.word, 
        req.body.meaning, 
        req.body.example, 
        req.body.difficulty, 
        req.body.category];

    db.query(sqlquery, newrecord, (err, result) => {
        if (err) {
            return console.error(err.message);
        }
        else {
            res.send(' This word has been added to the database, word: ' + req.body.word + ' meaning: '+ req.body.meaning + ' example: ' + req.body.example + ' difficulty: ' + req.body.difficulty + ' category:' + req.body.category);
        }
    });
    console.log(req.body)
}); 

// Quiz page
router.get('/quiz', function(req, res) {
    res.render('quiz.ejs', appData)
})

// Export the Router
module.exports = router;