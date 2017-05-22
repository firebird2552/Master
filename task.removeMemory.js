var taskRemoveMemory = 
{
    run: function(name)
    {
        console.log('** task.removeMemory **');
        if(Game.creeps.length === 0)
        {
            Memory.roleCounter = new Object;
            Memory.roleCounter.miners = [];
            Memory.roleCounter.harvesters = [];
            Memory.roleCounter.builders = [];
            Memory.roleCounter.upgraders = [];
            Memory.roleCounter.fighters = [];
            Memory.roleCounter.travelers = [];
        }
        for(counter = 0;counter < Memory.roleCounter.miners.length; counter += 1)
        {
            var miner = Memory.roleCounter.miners[counter];
            var name = miner.name;
            if(miner === null || !Game.creeps[name])
            {
                Memory.roleCounter.miners.splice(counter - 1, 1);
                counter -= 1;
            }
        }
        for(counter = 0; counter < Memory.roleCounter.harvesters.length; counter += 1)
        {
            var harvester = Memory.roleCounter.harvesters[counter];
            var name = harvester.name;
            if(harvester === null || !Game.creeps[name])
            {
                Memory.roleCounter.harvesters.splice(counter - 1, 1);
                counter -= 1;
            }
                
        }
        for(counter = 0; counter < Memory.roleCounter.builders.length; counter += 1)
        {
            var builder = Memory.roleCounter.builders[counter];
            var name = builder.name;
            if(builder === null || !Game.creeps[name])
            {
                Memory.roleCounter.builders.splice(counter - 1, 1);
                counter = 0;
            }
        }
        for(counter = 0; counter < Memory.roleCounter.upgraders.length; counter += 1)
        {
            var upgrader = Memory.roleCounter.upgraders[counter];
            var name = upgrader.name;
            if(upgrader === null || !Game.creeps[name])
            {
                Memory.roleCounter.upgraders.splice(counter - 1, 1);
                counter = 0;
            }
        }
        for(counter = 0;counter < Memory.roleCounter.fighters.length; counter += 1)
        {
            var fighter = Memory.roleCounter.fighters[counter];
            var name = fighter.name;
            if(fighter === null || !Game.creeps[name])
            {
                Memory.roleCounter.fighters.splice(counter - 1, 1);
                counter = 0;
            }
        }
        for(counter = 0;counter < Memory.roleCounter.travelers.length; counter += 1)
        {
            var traveler = Memory.roleCounter.travelers[counter];
            var name = traveler.name;
            if(traveler === null || !Game.creeps[name])
            {
                Memory.roleCounter.travelers.splice(counter - 1, 1);
                counter = 0;
            }
        }
        console.log('** End task.removeMemory **');
    }
}

module.exports = taskRemoveMemory;