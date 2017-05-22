var taskUpgrade = {
    /** @param {Creep} creep **/
    run: function(creep)
    {
        var roomController = creep.room.find(FIND_STRUCTURES, 
        {
            filter: function(structure)
            {
                return structure.structureType === STRUCTURE_CONTROLLER;
            }
        });
        var result = creep.upgradeController(roomController[0]);
        if(result === ERR_NOT_IN_RANGE) 
        {
            
            var taskConstructRoads = require('task.constructRoads');
            taskConstructRoads.run(creep);
            var taskMove = require('task.move');
            taskMove.run(creep, roomController[0]);
        }
        
    }
};
module.exports = taskUpgrade;