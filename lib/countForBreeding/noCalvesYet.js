var noCalvesYet =  function (){
    return (this.type === 'cow' && this.hadCalf === null) ? true : false;
};

module.exports = noCalvesYet;
