const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/legends', (req, res, next) => {
    res.render('legendaries');
})

module.exports = router;