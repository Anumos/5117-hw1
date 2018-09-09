var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Number Formatter' });
});

router.post('/format-numbers', function(req, res, next) {
  var numbers = req.body.numbers;
  console.log(numbers);
  var nums = numbers.split(",");
  res.render('format-numbers', 
  	{  
  		list : nums,
  		title : "Numbers"
  	});
});

module.exports = router;
