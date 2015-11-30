var alert = alert;

function warningMaker(obstacle, alert){
    var count = 0;

    return function(number, location){
        count += 1;

        alert("Beware! There have been " +
        obstacle + " sightings in the Cove today!\n" +
        number + " have been spotted at the " +
        location + "!" + " This is alert #" +
        count + " today for " + obstacle + " danger.");
    };
}

module.exports = warningMaker;
