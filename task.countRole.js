var taskCountRole =
{
    run: function(name)
    {
        console.log(name);
        var creep = Game.creeps[name];
        console.log(creep);
        var role = creep.memory.role;
        switch(role)
        {
            case 'miner':
                Memory.roleCounter.miners.push(creep);
                break;
            case 'harvester':
                Memory.roleCounter.harvesters.push(creep);
                break;
            case 'builder':
                Memory.roleCounter.builders.push(creep);
                break;
            case 'upgrader':
                Memory.roleCounter.upgraders.push(creep);
                break;
            case 'fighter':
                Memory.roleCounter.fighters.push(creep);
                break;
            case 'traveler':
                Memory.roleCounter.travelers.push(creep);
                break;
                
        }
    }
}

module.exports = taskCountRole;