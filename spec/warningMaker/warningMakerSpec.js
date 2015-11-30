describe('warningMaker', function (){
    var warningMaker = require('../../lib/warningMaker/warningMaker.js');
    var alert;

    it('returns a warning message for a given obstacle', function (){
        alert = jasmine.createSpy('alert');
        warningMaker('ufo', alert)(3, 'forest');
        expect(alert).toHaveBeenCalledWith("Beware! There have been ufo sightings in the Cove today!\n3 have been spotted at the forest!");
    });
});
