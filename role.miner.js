

var roleMiner = 
{
    /** @param {Creep} creep **/
    run: function(creep)
    {
        var taskMine = require('task.mine');
        taskMine.run(creep);
       
       /* var energyNodes = creep.room.find(FIND_SOURCES_ACTIVE);
        if(energyNodes.length !== 0)
        {
            energyNodes.inUse
        }*/
    }
}
module.exports = roleMiner;