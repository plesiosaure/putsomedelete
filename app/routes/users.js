var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:prenom([a-z-]+)', function(req, res, next) {
  res.render('update-user' , {title: 'The ultimate form'});
});

router.put('/:prenom([a-z-]+)', function(req, res, next) {
  res.send('The new name is ' + req.body.firstname);
});

router.get('/:prenom([0-9]+)', function(req, res, next) {
  res.render('delete-user' , {title: 'The ultimate delete form'});
});

router.delete('/:prenom([0-9]+)', function(req, res, next) {
  res.send('No more user with id  ' + req.params.prenom);
});

module.exports = router;
