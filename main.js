

//var RefillSpawn = require('RefillSpwan');

module.exports.loop = function () 
{
    console.log('Start of Tick');
    console.log('------------------');
    
    var roomCounter = 0;
    
    for(var name in Memory.creeps) 
    {
        if(!Game.creeps[name]) 
        {
            var taskRemoveMemory = require('task.removeMemory');
            taskRemoveMemory.run(name);
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
    
    for(var name in Game.rooms)
    {
        console.log(name);
        var RoomController = require('RoomController');
        RoomController.run(Game.rooms[name].name);
        roomCounter += 1;
    }
    
    
    console.log('total CPU used: ' + Game.cpu.getUsed());
    console.log('------------------');
    console.log('End of Tick');
    console.log('------------------');
}