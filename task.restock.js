var taskRestock =
{
    /** @param {Creep} creep **/
    run: function(creep)
    {
        var spawn = creep.pos.findClosestByRange(FIND_MY_SPAWNS);
        creep.moveTo(spawn);
        var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var sources = Game.spawns.Spawn1.room.find(FIND_SOURCES);
        
        
        var targets = creep.room.find(FIND_STRUCTURES, 
            {
                    filter: (structure) => 
                    {
                        return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                            structure.energy === structure.energyCapacity && creep.room.findPath;
                    }
            });
            
        if( targets.length > 0 && miners.length >= sources.length && harvesters.length >= sources.length)
        {
            var target = creep.pos.findClosestByRange(targets);
            
            //console.log("target is: " + targets[0].name);
            
            var result = creep.withdraw(target, RESOURCE_ENERGY)
            if(result === ERR_NOT_IN_RANGE)
            {
                // Debug code
                // console.log("Withdraw failed moving to target");
                
                // Checks if the unit is near the target if not moves toward the target.
                if(!creep.pos.isNearTo(target))
                {
                    var taskMove = require('task.move');
                    taskMove.run(creep, target);
                }
            }
            else
            {
                console.log(result);
            }
        }
        else
        {
            var flag = creep.room.find(FIND_FLAGS);
            
            if(flag.length !== 0)
            {
                var taskMove = require('task.move');
                    taskMove.run(creep, flag[0]);
            }
        }
    }
}

module.exports = taskRestock;