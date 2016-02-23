var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    tournamentId: { type: String, required: true, unique: true },
    name: 'string',
    size: 'string',
    location: 'string',
    startDate: 'string',
    endDate: 'string',
    format: 'string',
    enviroment: 'string',
    players: "array"
    });
var Tournament = mongoose.model('Tournament', schema);

schema.static('findById', function (id, callback) {
    return this.find({ id: tournamentId }, callback);
});

module.exports = Tournament;