var express = require('express');
var router = express.Router();

var date = new Date();

/* GET portifolio page. */
router.get('/', function(req, res, next) {
  var path = '/portfolio/expense-allocation-metrics';
  console.log('*******path**************');
  console.log(path);
  res.locals.path = '/portfolio/';
  res.render('portfolio/expenseallocation', { title: 'Takunda Mudarikwa - Full-stack Web Developer | Portfolio - Gasco Portal', year: date.getFullYear()});
});

module.exports = router;
