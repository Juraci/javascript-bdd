describe('Greeter', function() {
    var Greeter = require('../../lib/greeter/Greeter.js');

    it('says hello', function (){
        greeter = new Greeter();
        expect(greeter.sayHello()).toMatch('hello');
    });
});
