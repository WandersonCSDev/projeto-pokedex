const express = require('express'); //importa o express
const router = express.Router(); //Chama o Router de dentro do express


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


module.exports = router;