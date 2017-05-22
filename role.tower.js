var roleTower =
{
    /** @param {Structure} structure **/
    run: function(structure)
    {
        // console.log('** role.tower **');
        var hostiles = structure.room.find(FIND_HOSTILE_CREEPS)
        if(hostiles.length > 0)
        {
            var target = structure.pos.findClosestByRange(hostiles);
            if(target !== undefined && structure.carry !== 0)
            {
                structure.attack(target);
            }
        }
        else
        {
            /*var taskRepair = require('task.repair');
            taskRepair.run(structure)*/
            var repairTargets = structure.room.find(FIND_STRUCTURES, {
                filter: (repairStrucutre) =>
                {
                    return (repairStrucutre.structureType == STRUCTURE_WALL || repairStrucutre.structureType == STRUCTURE_ROAD)
                    && repairStrucutre.hits < repairStrucutre.hitsMax/3;
                }
            })
            // console.log("Repair targets: " + repairTargets.length);
            
            if(repairTargets.length !== 0 )
            {
               
                    if(structure.energy > structure.energyCapacity/2)
                    {
                        var target = 0;
                        for(repairCounter = 0, targets = repairTargets.length; repairCounter < targets; repairCounter += 1)
                        {
                            
                           if(repairTargets[repairCounter].hits < repairTargets[target].hits)
                           {
                               
                               target = repairCounter;
                           }
                        }
                        
                        var result = structure.repair(repairTargets[target]);
                        }
            }
        }
    }
}

module.exports = roleTower;