var express = require('express');
var router = express.Router();
var sess;
/* GET home page. */
router.get('/', function(req, res) {
	
  res.render('index', { title: 'Express' });
});
router.post('/chat', function(req, res) {
  var name = req.body.user;
  sess = req.session; 
  sess.user = name;
   res.send('session set');
});
router.get('/start', function(req, res) {
    if(!sess.user){
    	res.redirect('/');
    }
	console.log('session : '+sess.user);
	res.render('chatbox',{user:sess.user});
});
router.get('/group-chat', function(req, res) {
	res.render('groupchat',{user:sess.user});
});
router.get('/private-chat', function(req, res) {
	sess.user = '';
	
});

module.exports = router;
