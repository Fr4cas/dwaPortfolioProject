// Create router
const express = require("express");
const router = express.Router();

// Routes
router.get('/', function(req, res) {
    res.render('index.ejs')
});

router.get('/about', function(req, res) {
res.render('about.ejs')
})

router.get('/learn', function(req, res) {
    res.render('learn.ejs')
})

// Search Page
router.get('/search', function(req, res) {
    res.render('search.ejs')
})

router.get('/search_result', function (req, res) {
     // TODO: search in the database
    res.send(req.query);
});

// Export the Router
module.exports = router;