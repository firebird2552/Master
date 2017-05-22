var taskMine = 
{
    /** @param {Creep} creep **/
    run: function(creep)
    {
        var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');
        var sources = creep.room.find(FIND_SOURCES);
        var spawn = Game.spawns.Spawn1;
        var spawnMemory = Game.spawns.Spawn1.memory;
        
        if(creep.memory.assignedSource === undefined)
        {
            console.log('attempting to assign: ' + creep.name + ' to a source');
            for(currentSource = 0; currentSource < sources.length; currentSource += 1)
            {
                var assignedMiners = 0;
                for(currentMiner = 0; currentMiner < miners.length; currentMiner += 1)
                {
                    if(miners[currentMiner].memory.assignedSource === currentSource)
                    {
                        assignedMiners += 1;
                    }
                }
                console.log('attempting to assign: ' + creep.name + ' to Source: ' + currentSource);
                if(currentSource === 0)
                {
                    if(assignedMiners < spawn.memory.SourceOneMinersNeeded)
                    {
                        creep.memory.assignedSource = currentSource;
                        spawn.memory.SourceOneAssignedMiners += 1;
                        console.log(creep.name + " was assigned to " + currentSource);
                        
                    }
                    else
                    {
                        console.log('Could not assign: ' + creep.name + ' to source because source is full');
                    }
                }
                else if(currentSource === 1)
                {
                    if(assignedMiners < spawn.memory.SourceTwoMinersNeeded)
                    {
                        creep.memory.assignedSource = currentSource;
                        spawn.memory.SourceTwoAssignedMiners += 1;
                        console.log(creep.name + " was assigned to " + currentSource);
                        
                    }
                    else
                    {
                        console.log("Miners assigned to source one: " + spawn.memory.SourceOneAssignedMiners + '/' + spawn.memory.SourceOneMinersNeeded);
                        console.log("Miners assigned to source two: " + spawn.memory.SourceTwoAssignedMiners + '/' + spawn.memory.SourceTwoMinersNeeded);
                        console.log('Could not assign: ' + creep.name + ' to source because source is full');
                    }
                }
                else
                {
                    console.log("Failed to assign a source to " + creep.name);
                }
            }
        }
        
        var target = sources[creep.memory.assignedSource];
        var result = creep.harvest(target);
        
        if(result !== OK)
        {
            creep.moveTo(target);
        }
        
    }
}

module.exports = taskMine;