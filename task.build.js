var taskMove = require('task.move');

var taskBuild =
{
    /** @param {Creep} creep **/
    run: function(creep, buildingTargets)
    {
        if(buildingTargets.length) 
        {
            var target = creep.pos.findClosestByRange(buildingTargets);
            if(creep.build(target) == ERR_NOT_IN_RANGE)
            {
                taskMove.run(creep, target);
            }
        }
    }
};

module.exports = taskBuild;