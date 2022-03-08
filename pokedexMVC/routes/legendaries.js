const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/legend', function(req, res, next) {
    res.render('legendaries');
});

module.exports = router;
