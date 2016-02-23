var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Tournament = require('../models/tournament');

//FIXME this is returning static data for now

/* GET home page. */
router.get('/', function(req, res, next) {
  var name= req.param("name");
  res.json({message: "test"});
});

router.get('/tournaments', function(req, res, next) {
  Tournament.find(function(err, tournaments)
  {
    if (err) {
      return res.send(err);
    }else
      res.json(tournaments);
  })
});

router.post('/tournaments', function(req, res, next) {
  var tournament = new Tournament();
  tournament.tournamentId = new mongoose.Types.ObjectId();;
  tournament.name = req.body.name;

  tournament.save(function(err) {
    if (err){
      res.send(err);
    }else{
      res.json({ message: 'Tournament created!' });
    }
  });
});

router.get('/tournaments/:id', function(req, res, next) {
  Tournament.findById(req.params.id, function(err, tournament) {
    if (err){
      res.send(err);
    }else{
      res.json(tournament);
    }
  });
});

router.get('/players', function(req, res, next) {

});

router.get('/players/:userName', function(req, res, next) {

});

module.exports = router;
