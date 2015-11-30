var alert = alert;

function warningMaker(obstacle, alert){
    return function(){
        alert('Beware! There have been ' + obstacle + ' sightings in the Cove today!')
    };
}

module.exports = warningMaker;
