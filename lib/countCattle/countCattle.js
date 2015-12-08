var countCattle = function (kind) {
    var nunKind = 0;
    for (var i = 0; i < this.length; i++) {
        if (this[i].type === kind) { nunKind += 1; }
    }
    return nunKind;
};

module.exports = countCattle;
