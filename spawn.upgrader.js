var spawnUpgrader = 
{
    run: function(spawn)
    {
        var spawned = false;
        var newName = '';
        newName = spawn.createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'upgrader'});
        if(typeof newName === 'string')
        {
            console.log('Spawning new MegaUpgrader: ' + newName);
            spawned = true;
        }
        else
        {
            newName = spawn.createCreep([WORK, CARRY, MOVE], undefined, {role: 'upgrader'});
            if(typeof newName === 'string')
            {
                console.log('Spawning new upgrader: ' + newName);
                spawned = true;
            }
            else
            {
                console.log('Not enough energy to spawn upgrader!');
            }
        }
        if(spawned)
        {
            var taskCountRole = require('task.countRole');
            taskCountRole.run(newName);
        }
    }
}

module.exports = spawnUpgrader;