var spawnBuilder =
{
    run: function(spawn)
    {
        var spawned = false;
        var newName = '';
        newName = spawn.createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'builder'});
        if(typeof newName === 'string')
        {
            console.log('Spawning new MageBuilder: ' + newName);
            spawned = true;
        }
        else
        {
            newName = spawn.createCreep([WORK, CARRY, MOVE], undefined, {role: 'builder'});
            if(typeof newName === 'string')
            {
                console.log('Spawning new builder: ' + newName);
                spawned = true;
            }
            else
            {
                console.log('Not enough energy to spawn builder!');
            }
        }
        if(spawned)
        {
            var taskCountRole = require('task.countRole');
            taskCountRole.run(newName);
        }
    }
}

module.exports = spawnBuilder;