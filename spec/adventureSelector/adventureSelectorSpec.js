describe('adventureSelector', function (){
    var adventureSelector = require('../../lib/adventureSelector/adventureSelector.js');
    var alert;

    beforeEach(function (){
        alert = jasmine.createSpy('alert');
    });

    it('returns "You selected the Vines of Doom!" when the user selects 1', function (){
        adventureSelector(1, alert)();
        expect(alert).toHaveBeenCalledWith("You selected the Vines of Doom!");
    });

    it('returns "Looks like you want the Lake of Despair! when the user selects 2', function (){
        adventureSelector(2, alert)();
        expect(alert).toHaveBeenCalledWith("Looks like you want the Lake of Despair!");
    });

    it('returns "The Caves of Catastrophe!" when the user selects 3', function (){
        adventureSelector(3, alert)();
        expect(alert).toHaveBeenCalledWith("The Caves of Catastrophe!");
    });
});
