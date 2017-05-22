var spawnCollector =
{
    run: function(spawn)
    {
        var spawned = false;
        var newName = '';
        newName = spawn.createCreep([CARRY,CARRY,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'harvester'});
        if(typeof newName === 'string')
        {
            console.log('Spawning new UltraHarvester: ' + newName);
            spawned = true;
        }
        else
        {
            console.log('Unable to construct UltraHarvester. Attempting to create MegaHarvester');
            newName = spawn.createCreep([CARRY,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'harvester'});
            if(typeof newName === 'string')
            {
                console.log('Spawning new MegaHarvester: ' + newName);
                spawned = true;
            }
            else
            {
                console.log('Unable to construct MegaHarvester. Attempting to create Harvester');
                newName = spawn.createCreep([CARRY,CARRY,MOVE,MOVE], undefined, {role: 'harvester'});
                if(typeof newName === 'string')
                {
                    console.log('Spawning new Harvester: ' + newName);
                    spawned = true;
                }
                else
                {
                    console.log('Unable to construct Harvester. Attempting to create MiniHarvester');
                    newName = spawn.createCreep([CARRY,CARRY,MOVE], undefined, {role: 'harvester'});
                    if(typeof newName === 'string')
                    {
                        console.log('Spawning new MiniHarvester: ' + newName);
                        spawned = true;
                    }
                    else
                    {
                        console.log('Unable to construct MiniHarvester. Attempting to create TinyHarvester');
                        newName = spawn.createCreep([CARRY,MOVE], undefined, {role: 'harvester'});
                        if(typeof newName === 'string')
                        {
                            console.log('Spawning new TinyHarvester: ' + newName);
                            spawned = true;
                        }
                        else
                        {  
                            console.log('Not enough energy to spawn any harvester! Another attempt will be made next tick.');
                        }
                    }
                } 
            }
        }
        if(spawned)
        {
            var taskCountRole = require('task.countRole');
            taskCountRole.run(newName);
        }
    }
}

module.exports = spawnCollector;