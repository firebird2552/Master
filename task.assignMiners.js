/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('task.assignMiners');
 * mod.thing == 'a thing'; // true
 */
var = taskAssignMiners
{
    run:function(creep)
    {
        console.log("Entered AssingMiners");
        var spawn = Game.spawns[Room.find(FIND_MY_SPAWNS)]
        var sources = spawn.memory.sources;
        console.log(sources);
        for(currentSource = 0; currentSourcet < sources.length; currentSource++)
        {
            if()
            var neededCreeps = spawn.memory.Sources[currentSource].neededCreeps
            if(spawn.memory.Sources[currentSource].AssignedCreeps === "undefined" || spawn.memory.Sources[currentSource.incomingTransactions])
            {
                if(creep.memory.AssignedSource === "undefined")
                {
                
                }
                else
                {
                
                }
            }
        }
    }
}
module.exports = taskAssignMiners