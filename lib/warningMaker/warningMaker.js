var alert = alert;

function warningMaker(obstacle, alert){
    return function(number, location){
        alert("Beware! There have been " + obstacle + " sightings in the Cove today!\n" + number + " have been spotted at the " + location + "!");
    };
}

module.exports = warningMaker;
