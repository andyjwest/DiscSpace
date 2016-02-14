var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var name= req.param("name");

  //TODO get the values from the DB based on what we wnat
  res.json({message: "test"});
});

router.get('/tournament', function(req, res, next) {
  //TODO get the values from the DB based on what we wnat
  res.json({tournament:
      [{name: "test"},
        {name:"anotherOne"}]
  });
});

router.get('/tournament/{tournament-id}', function(req, res, next) {
  //TODO get the values from the DB based on what we wnat
  res.json({message: "test"});
});

router.get('/player', function(req, res, next) {
  var name= req.param("name");

  //TODO get the values from the DB based on what we wnat
  res.json({message: "test"});
});


module.exports = router;
