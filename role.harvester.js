var roleHarvester = {


    /** @param {Creep} creep **/
    run: function(creep) 
    {
        // console.log('** role.harvester **');
        var taskConstructRoads = require('task.constructRoads');
        taskConstructRoads.run(creep);
        
        if(creep.carry.energy === 0)
        {
            // console.log('** Harvester collect **');
            var taskCollect = require('task.collect');
            taskCollect.run(creep);
        }
        else
        {
            // console.log('** Harvester return **');
           var taskDropOff = require('task.dropOff');
           taskDropOff.run(creep);
        }
    }
};

module.exports = roleHarvester;