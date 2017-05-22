var spawnMiner =
{
    run: function(spawn)
    {
        var spawned = false;
        var newName = ''; 
        if(spawn.canCreateCreep([WORK,WORK,WORK,WORK,MOVE], undefined) === OK)
        {
            newName = spawn.createCreep([WORK,WORK,WORK,WORK,MOVE], undefined, {role: 'miner'});
            console.log('Spawning new MegaMiner: ' + newName);
            spawned = true;
        }
        else
        {
            console.log("Failed to create MegaMiner needed 450 energy, attempting to create miner");
            if(spawn.canCreateCreep([WORK,WORK,MOVE], undefined) === OK)
            {
                newName = spawn.createCreep([WORK,WORK,MOVE], undefined, {role: 'miner'});
                console.log('Spawning new Miner: ' + newName);
                spawned = true;
            }
            else
            {
                console.log("Failed to create Miner, attempting to create MiniMiner");
            
                if(spawn.canCreateCreep([WORK,MOVE], undefined) === OK)
                {
                    newName = spawn.createCreep([WORK,MOVE], undefined, {role: 'miner'});
                    console.log('Spawning new MiniMiner: ' + newName);
                    spawned = true;
                }
                else
                {
                    console.log("Failed to spawn a miner")
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
module.exports = spawnMiner;