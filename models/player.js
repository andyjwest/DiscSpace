var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    playerId: { type: String, required: true, unique: true },
    firstName: 'string',
    lastName: 'string',
    homeTown: 'string',
    gender: 'string'
});
var Player = mongoose.model('Player', schema);

module.exports = Player;