describe('countCattle', function (){
    var countCattle = require('../../lib/countCattle/countCattle.js');
    var canyonCows;

    beforeEach(function (){
        canyonCows = [
            {name: "Bessie", type: "cow", hadCalf: "Burt"},
            {name: "Donald", type: "bull", hadCalf: null},
            {name: "Esther", type: "calf", hadCalf: null},
            {name: "Burt", type: "calf", hadCalf: null},
            {name: "Sarah", type: "cow", hadCalf: "Esther"},
            {name: "Samson", type: "bull", hadCalf: null},
            {name: "Delilah", type: "cow", hadCalf: null}

        ];
    });

    it('should return the amount of cattle for a given type', function (){
        Array.prototype.countCattle = countCattle;
        expect(canyonCows.countCattle('calf')).toBe(2);
    });
});
