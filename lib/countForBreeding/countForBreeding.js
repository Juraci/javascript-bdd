var noCalvesYet = require('./noCalvesYet.js');

Object.prototype.noCalvesYet = noCalvesYet;

var countForBreeding = function () {
    var numToBreed = 0;
    for (var i = 0; i < this.length; i++){
        if (this[i].noCalvesYet()) { numToBreed++; }
    }
    return numToBreed;
};

module.exports = countForBreeding;
