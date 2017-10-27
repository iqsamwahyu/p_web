var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.send("<h1> Belum disuruh sampe tahap post ke server sama ibu nya ya.. ✌  </h1>");
});




module.exports = router;
