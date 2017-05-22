var spawnFighter = 
{
    run: function(spawn)
    {
        var spawned = false;
        var newName = '';
        newName = spawn.createCreep([ATTACK, ATTACK, ATTACK, MOVE, MOVE, MOVE], undefined, {role: 'fighter'});
        if(typeof newName === 'string')
        {
            console.log('Spawning new Champion: ' + newName);
            spawned = true;
        }
        else
        {
            newName = spawn.createCreep([ATTACK,ATTACK,MOVE], undefined, {role: 'fighter'});
            if(typeof newName === 'string')
            {
                console.log('Spawning new fighter: ' + newName);
                spawned = true;
            }
            else
            {
                console.log('Not enough energy to spawn fighter!');
            }
        }
        if(spawned)
        {
            var taskCountRole = require('task.countRole');
            taskCountRole.run(newName);
        }
    }
}
module.exports = spawnFighter;