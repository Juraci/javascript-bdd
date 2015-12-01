describe('sharksWithLasers', function (){
    var makeTargetAssigner = require('../../lib/sharksWithLasers/sharksWithLasers.js');
    var alert;

    var listOfSharks = ["Sea Pain", "Great Wheezy",
        "DJ Chewie", "Lil' Bitey",
        "Finmaster Flex", "Swim Khalifa",
        "Ice Teeth", "The Notorious J.A.W."];

    var listOfTargets = ["icicle bat", "snow yeti",
        "killer penguin", "frost tiger",
        "polar bear", "iceberg",
        "blue witch", "wooly mammoth"];

    beforeEach(function (){
        alert = jasmine.createSpy('alert');
    });

    it('should alert a given message for a given shark', function (){
        var getTargetFor = makeTargetAssigner(listOfSharks, listOfTargets, alert);
        getTargetFor("Ice Teeth");
        expect(alert).toHaveBeenCalledWith("What up, Ice Teeth!\n" +
                                           "There've been blue witch sightings in our hood!\n" +
                                           "Time for a swim-by lasering, homie!");
    });
});
