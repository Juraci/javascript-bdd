describe('noCalvesYet', function (){
    var noCalvesYet = require('../../lib/countForBreeding/noCalvesYet.js');

    beforeEach(function (){
        Object.prototype.noCalvesYet = noCalvesYet;
    });

    it('returns true when the type is Cow and also hadCalf property is null', function (){
       var cowWithoutCalves = { type: 'cow', hadCalf: null };
       expect(cowWithoutCalves.noCalvesYet()).toBe(true);
    });

    it('returns true when the type is Cow and also hadCalf property is null', function (){
       var cowWithCalves = { type: 'cow', hadCalf: 'someOne' };
       expect(cowWithCalves.noCalvesYet()).toBe(false);
    });
});
