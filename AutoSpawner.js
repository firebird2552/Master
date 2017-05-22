var AutoSpawner =
{
    run: function(roomName)
    {
        var spawners = [];
        var thisRoom = Game.rooms[roomName];
        var spawners = thisRoom.find(FIND_MY_SPAWNS);
        console.log(spawners);
        if(spawners.length !== 0)
        {
            var spawn = spawners[0]
            // console.log(spawn);
            var sources = spawn.room.find(FIND_SOURCES);
                
                var harvesters = Memory.roleCounter.harvesters.length;
                var miners = Memory.roleCounter.miners.length;
                var upgraders = Memory.roleCounter.upgraders.length;
                var builders = Memory.roleCounter.builders.length;
                var fighters = Memory.roleCounter.fighters.length;
                var hostiles = spawn.room.find(FIND_HOSTILE_CREEPS);
                var droppedEnergy = spawn.room.find(FIND_DROPPED_RESOURCES);
                var totalDroppedEnergy = 0;
                var controllerLevel = spawn.room.controller.level;
                
                var constructionsSites = spawn.room.find(FIND_MY_CONSTRUCTION_SITES);
                //console.log("Construction Sites: " + constructionsSites.length);
                var repairSites = spawn.room.find(FIND_STRUCTURES, {
                    filter: function(structure)
                    {
                        return structure.hits < structure.hitsMax / 3;
                    }
                });
                
                
                /**********************************************/
                /* Calculates the number of harvesters needed */
                for(counter = 0, numberOfPiles = droppedEnergy.length; counter < numberOfPiles; counter++)
                {
                    //console.log(droppedEnergy[counter].amount);
                    totalDroppedEnergy += droppedEnergy[counter].amount;
                }
                var harvesterCarryCapacity = 0;
                for(counter = 0; counter < Memory.roleCounter.harvesters.length; counter += 1)
                {
                    if(Memory.roleCounter.harvesters[counter] !== undefined)
                    {
                        harvesterCarryCapacity += Memory.roleCounter.harvesters[counter].carryCapacity;
                    }
                }
                
                console.log('Total dropped energy: ' + totalDroppedEnergy);
                var harvestersNeeded = (totalDroppedEnergy / harvesterCarryCapacity);
                if(harvestersNeeded < sources.length)
                {
                    harvestersNeeded = sources.length;
                }
                /* END */
                
                /*********************************************/
                /* Calculates the number of builders needed */
                var buildersNeeded = (constructionsSites.length+repairSites.length)/50;
                /* End*/
                
                /*******************************************/
                /* Calculates the number of miners needed */
                        spawn.memory.Sources = undefined;
                if(spawn.memory.Sources === undefined || spawn.memory.Sources === 0)
                {
                    console.log("entered calculate miners needed");
                    var Sources = thisRoom.find(FIND_SOURCES);
                    var sourceArray = "";
                    for(currentSource = 0, numberOfSources = sources.length; currentSource < numberOfSources; currentSource += 1)
                    {
                        if(spawn.memory.Sources === undefined)
                        {
                            spawn.memory.Sources = 0;
                        }
                        else if(spawn.memory.Sources === 0 || spawn.memory.Sources[currentSource].minersNeeded === undefined)
                        {
                            var sourceX = Sources[currentSource].pos.x;
                            var sourceY = Sources[currentSource].pos.y;
                            
                            var terrain = spawn.room.lookForAtArea(LOOK_TERRAIN, sourceY - 1, sourceX - 1, sourceY + 1, sourceX + 1, true);
                            for(counter = 0; counter < terrain.length; counter += 1)
                            {
                                var walkable = 0;
                                console.log(terrain[counter].terrain);
                            
                                if(terrain[counter].terrain != "wall")
                                {
                                    walkable += 1;
                                    
                                }
                            }
                            sourceArray += {"minersNeeded": walkable};
                        }
                    }
                    console.log(JSON.stringify(sourceArray));
                    spawn.memory.Sources = sourceArray;
                }
                console.log(JSON.stringify(spawn.memory.Sources.minersNeeded));
                minersNeeded = spawn.memory.minersNeeded;
                /* END*/
                        
                /***************************************/
                /* display information in the console */
                console.log('------------------');
                console.log('Harvesters: ' + harvesters + '/' + harvestersNeeded);
                console.log('Miners: ' + miners + '/' + minersNeeded);
                console.log('Upgraders: ' + upgraders + '/' + controllerLevel);
                console.log('Builders: ' + builders + '/' + buildersNeeded);
                console.log('Fighter: ' + fighters + '/' + hostiles.length);
                console.log('------------------');
                console.log('Spawn Energy: ' + spawn.energy);
                // console.log('Construction Sites: ' + constructionsSites.length);
                // console.log('Repairs Needed: ' + repairSites.length);
                console.log('------------------');
                /* END*/
                
                
            if(!spawn.spawning)
            {

                
                if(fighters < hostiles.length)
                {
                    var spawnFighter = require('spawn.fighter');
                    spawnFighter.run(spawn);
                }
                else if(miners < spawn.memory.minersNeeded && !(miners >= sources.length && harvesters === 0))
                {
                    var spawnMiner = require('spawn.miner');
                    spawnMiner.run(spawn);
                }
                else if(harvesters < harvestersNeeded)
                {
                    var spawnCollector = require('spawn.collector');
                    spawnCollector.run(spawn);
                }
                else if(upgraders < controllerLevel) 
                {
                    var spawnUpgrader = require('spawn.upgrader');
                    spawnUpgrader.run(spawn);
                }
                else if(builders < buildersNeeded) 
                {
                    var spawnBuilder = require('spawn.builder');
                    spawnBuilder.run(spawn);
                }
            }
        }
    }
}

module.exports = AutoSpawner;