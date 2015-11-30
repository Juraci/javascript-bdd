describe('warningMaker', function (){
    var warningMaker = require('../../lib/warningMaker/warningMaker.js');
    var alert;

    it('returns a warning message for a given obstacle', function (){
        alert = jasmine.createSpy('alert');
        var ufoWarning = warningMaker('ufo', alert);
        ufoWarning(1, 'lake');
        ufoWarning(3, 'forest');
        expect(alert).toHaveBeenCalledWith("Beware! There have been ufo sightings in the Cove today!" +
                                           "\n" + "3 have been spotted at the forest!" +
                                           " This is alert #2 today for ufo danger.");
    });
});
