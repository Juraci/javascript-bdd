describe('countForBreeding', function (){
    var countForBreeding = require('../../lib/countForBreeding/countForBreeding.js');
    var forestCows;

    beforeEach(function (){
        Array.prototype.countForBreeding = countForBreeding;
        forestCows = [
            {name: "Legolas", type: "calf", hadCalf: null},
            {name: "Gimli", type: "bull", hadCalf: null},
            {name: "Arwen", type: "cow", hadCalf: null},
            {name: "Galadriel", type: "cow", hadCalf: null},
            {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
        ];
    });

    it('should return the amount of cows available to breed', function (){
        expect(forestCows.countForBreeding()).toBe(2);
    });
});
