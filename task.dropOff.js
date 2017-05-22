var taskDropOff =
{
    /** @param {Creep} creep **/
    run: function(creep)
    {
        var spawnTarget = creep.room.find(FIND_STRUCTURES, 
        {
            filter: (structure) => 
            {
                return structure.structureType == STRUCTURE_SPAWN &&
                structure.energy < structure.energyCapacity && creep.room.findPath;
            }
        });
        
        // console.log('Is spawn a target ' + spawnTarget.length);
        var targets = creep.room.find(FIND_STRUCTURES, 
        {
            filter: (structure) => 
            {
                return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_TOWER) &&
                structure.energy < structure.energyCapacity && creep.room.findPath;
            }
        });
        
        if(spawnTarget.length > 0)
        {
            target = spawnTarget[0];
            var result = creep.transfer(target, RESOURCE_ENERGY)

            if(result === ERR_NOT_IN_RANGE)
            {
                
                var taskMove = require('task.move');
                taskMove.run(creep, target);
            }
        }
        else
        {
            var targets = creep.room.find(FIND_STRUCTURES, 
            {
                filter: (structure) => 
                {
                    return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_TOWER) &&
                    structure.energy < structure.energyCapacity && creep.room.findPath;
                }
            });
            if(targets.length !== 0) 
            {
                var target = creep.pos.findClosestByRange(targets);
                
                
                var result = creep.transfer(target, RESOURCE_ENERGY)
    
                if(result === ERR_NOT_IN_RANGE)
                {
                    
                    var taskMove = require('task.move');
                    taskMove.run(creep, target);
                }
            }
        }
    }
}
module.exports = taskDropOff;