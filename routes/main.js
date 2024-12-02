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

// Export the Router
module.exports = router;