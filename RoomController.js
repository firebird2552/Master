var RoomController =
{
    run: function(roomName)
    {
        var startingCpuUsed = Game.cpu.getUsed();
        var thisRoom = Game.rooms[roomName];
        var roomController = Game.rooms[roomName].controller;
        if(roomController.length !== 0)
        {
            console.log(thisRoom);
            if(Game.rooms[roomName].memory.info == null)
            {
                console.log("Creating room info memory");
                thisRoom.memory.info = "";
                var numSources = thisRoom.find(FIND_SOURCES);
                thisRoom.memory.info = numSources;
            }
            else
            {
                console.log("Room Info Memory exists!");
                var buildExtensions = thisRoom.find(FIND_CONSTRUCTION_SITES, {
                    filter: {
                        structureType: STRUCTURE_EXTENSION
                    }
                    });
                var extensions = thisRoom.find(FIND_STRUCTURES, {
                    filter: {
                        structureType: STRUCTURE_EXTENSION
                    }
                    });
                var requiredExtensions = [0, 5, 10, 20, 30, 40, 50, 60];
                // console.log("Extensions building: " + buildExtensions.length + " constructed " + extensions.length + "/" + requiredExtensions[roomController.level-1]);
                if( buildExtensions.length + extensions.length >= requiredExtensions[roomController.level - 1])
                {
                    thisRoom.memory.buildRoad = true;
                }
                else
                {
                    thisRoom.memory.buildRoad = false;
                }
                /*var sources = thisRoom.find(FIND_SOURCES);
                thisRoom.memory.sources = sources;
                console.log(thisRoom.memory.sources);
                for(i = 0; i < sources.length; i++)
                {
                    var source = sources[i];
                    console.log("Sources: " + source);
                    var walkableCounter = 0;
                    var terrain = thisRoom.lookForAtArea(LOOK_TERRAIN, source.pos.y-1, source.pos.x - 1, source.pos.y+1, source.pos.x+1, true);
                    for(a = 0; a<terrain.length; a++)
                    {
                        //console.log(terrain[a].terrain);
                        if(terrain[a].terrain != "wall")
                        {
                            walkableCounter += 1;
                        }
                    }
                    console.log("Walkable: " + walkableCounter);
                    thisRoom.memory.sources[i] = {"minersNeeded": walkableCounter};
                    console.log(JSON.stringify(thisRoom.memory.sources[i]));
                    console.log("Sources: " + JSON.stringify(sources));
                }*/
                
            }
            var autoSpawn = require('AutoSpawner');
            autoSpawn.run(roomName);
            
            var towers = roomController.room.find(FIND_MY_STRUCTURES, 
            {
                filter: (structure) => 
                {
                    return (structure.structureType == STRUCTURE_TOWER);
                }
            });
            
                for(currentTower = 0, numberOfTowers = towers.length; currentTower < numberOfTowers; currentTower += 1)
                {
                    var roleTower = require('role.tower');
                    roleTower.run(towers[currentTower]);
                }
                
            for(var name in Game.creeps) {
                var creep = Game.creeps[name];
                
                //console.log('creep ' + creep.name + 'in role ' + creep.memory.role + ': '  + Game.cpu.getUsed());
                
                var role = creep.memory.role;
                
                switch(role)
                {
                    case 'miner':
                        if(Memory.countCreeps)
                        {
                        
                            // console.log(Memory.roleCounter.miners.length);
                            var match = false;
                            for(counter = 0; counter < Memory.roleCounter.miners.length; counter += 1)
                            {
                                
                                // console.log('miner: ' + Memory.roleCounter.miners[counter].name);
                                if(name === Memory.roleCounter.miners[counter].name)
                                {
                                    match = true;
                                    break;
                                }
                            }
                            if(!match)
                            {
                                Memory.roleCounter.miners.push(creep);
                                // console.log(Memory.roleCounter.harvesters);
                                
                            }
                        }
                        var roleMiner = require('role.miner');
                        roleMiner.run(creep);
                        break;
                    case 'harvester':
                        if(Memory.countCreeps)
                        {
                            
                            // console.log(Memory.roleCounter.harvesters.length);
                            var match = false;
                            for(counter = 0; counter < Memory.roleCounter.harvesters.length; counter += 1)
                            {
                                
                                // console.log('harvester: ' + Memory.roleCounter.harvesters[counter].name);
                                if(name === Memory.roleCounter.harvesters[counter].name)
                                {
                                    match = true;
                                    break;
                                }
                            }
                            if(!match)
                            {
                                Memory.roleCounter.harvesters.push(creep);
                                // console.log(Memory.roleCounter.harvesters);
                                
                            }
                        }
                        var roleHarvester = require('role.harvester');
                        roleHarvester.run(creep);
                        break;
                case 'builder':
                    if(Memory.countCreeps)
                    {
                        
                        // console.log(Memory.roleCounter.harvesters.length);
                        var match = false;
                        for(var counter = 0; counter < Memory.roleCounter.builders.length; counter += 1)
                        {
                            if(name === Memory.roleCounter.builders[counter].name)
                            {
                                match = true;
                                break;
                            }
                        }
                        if(!match)
                        {
                            Memory.roleCounter.builders.push(creep);
                            // console.log(Memory.roleCounter.builders);
                            
                        }
                    }
                    var roleBuilder = require('role.builder');  
                    roleBuilder.run(creep);
                    break;
                case 'upgrader':
                    if(Memory.countCreeps)
                    {
                        var match = false;
                        for(counter = 0; counter < Memory.roleCounter.upgraders.length; counter += 1)
                        {
                            if(name === Memory.roleCounter.upgraders[counter].name)
                            {
                                match = true;
                                break;
                            }
                        }
                        if(!match)
                        {
                            Memory.roleCounter.upgraders.push(creep);
                        }
                    }
                    var roleUpgrader = require('role.upgrader');
                    roleUpgrader.run(creep);
                break;
                case 'fighter':
                    if(Memory.countCreeps)
                    {
                        var match = false;
                        for(counter = 0; counter < Memory.roleCounter.fighters.length; counter += 1)
                        {
                            if(name === Memory.roleCounter.fighters[counter].name)
                            {
                                match = true;
                                break;
                            }
                        }
                        if(!match)
                        {
                            Memory.roleCounter.fighters.push(creep);
                        }
                    }
                    var roleFighter = require('role.fighter');
                    roleFighter.run(creep);
                }
            }
            var endingCpuUsed = Game.cpu.getUsed();
            var cpuUsed = endingCpuUsed - startingCpuUsed
            console.log('Room ' + roomName + ' used ' + cpuUsed + ' of the CPU');
        }
    }
}

module.exports = RoomController;