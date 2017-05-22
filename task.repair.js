var taskRepair ={
    run: function(creep, repairTarget)
    {
        if(repairTarget !== undefined)
        {
            var result = creep.repair(repairTarget);
            
            if(result === ERR_NOT_IN_RANGE)
            {
                //console.log('Number of repair targets: ' + repairTargets.length);
    	        if(!creep.pos.isNearTo(repairTarget))
    	        {
    	            var taskMove = require('task.move');
                    taskMove.run(creep, repairTarget);    
    	        }
            }
            else if(result === OK)
            {
                creep.memory.repairTarget = repairTarget;
            }
            else if(result === ERR_INVALID_TARGET)
            {
                console.log('** role.builder => task.repair => Invalid Target: ' + repairTarget + ' **');
                
            }
            else
            {
                console.log('found unknown reuslt in task.repair: ' + result);
            }
        }
    }
}
module.exports = taskRepair;