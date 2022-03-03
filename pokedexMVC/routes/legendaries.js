const express = require('express');
const router = express.Router();
<<<<<<< HEAD

/* GET home page. */
router.get('/legend', function(req, res, next) {
    res.render('legendaries');
});

module.exports = router;
=======
const controller = require('../controllers/LegendariesController');

router.get('/', controller.index);


module.exports = router
>>>>>>> cdcf5ca43d92ed3d052466d7e29f9828e908c2e7
