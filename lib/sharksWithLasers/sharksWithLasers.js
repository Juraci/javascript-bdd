var alert = alert;

function makeTargetAssigner(sharks, targets, alert) {
    return function (shark){
        for (var i = 0; i < sharks.length; i++) {
            if (sharks[i] === shark){
                alert("What up, " + shark + "!\n" +
                       "There've been " + targets[i] + " sightings in our hood!\n" +
                       "Time for a swim-by lasering, homie!");
            }
        }
    };
}

module.exports = makeTargetAssigner;
