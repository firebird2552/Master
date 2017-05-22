var RefillSpawn =
{
    run: function()
    {
        var spawn = Game.spawns.Spawn1;
    
        if(spawn.energy !==  spawn.carryCapacity)
        {
            var target = Game.spawns.Spawn1.room.find(FIND_STRUCTURES,
            {
                filter: (structure) => 
                {
                    return (structure.structureType == STRUCTURE_EXTENSION) &&
                    structure.energy === structure.energyCapacity;
                }
            });
    
            if(target.length > 0)
            {
                target[0].transferEnergy(spawn);
            }
        }
    }
}

module.exports = RefillSpawn;