describe('warningMaker', function (){
    var warningMaker = require('../../lib/warningMaker/warningMaker.js');
    var alert;

    it('returns a warning message for a given obstacle', function (){
        alert = jasmine.createSpy('alert');
        warningMaker('ufo', alert)();
        expect(alert).toHaveBeenCalledWith('Beware! There have been ufo sightings in the Cove today!');
    });
});
