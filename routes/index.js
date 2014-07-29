var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/', function(req, res) {
// 	// res.send('text');
// 	// res.send(200);
// 	// res.render('index', {'title': 'faggots'});
// 	// res.send(200);
// 	// res.send({
// 	// 	users: ['Will', "Laura"]
// 	// });
// 	res.render('index', {
// 		title: 'My App!',
// 		age: 33
// 	});
// });

// router.get('/', function(req, res) {
// 	console.log(req.query);
// });

router.get('/users/:id', function(req, res) {
	console.log(req.params);
	res.send(200);
});

module.exports = router;
