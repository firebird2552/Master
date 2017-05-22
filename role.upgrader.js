

var roleUpgrader = 
{

    /** @param {Creep} creep **/
    run: function(creep)
    {
        // console.log('** role.upgrader **');
        if(creep.memory.upgrading && creep.carry.energy === 0)
        {
            creep.memory.upgrading = false;
        }
        if(!creep.memory.upgrading && creep.carry.energy === creep.carryCapacity)
        {
            creep.memory.upgrading = true;
        }
        
        //upgrading
        if(creep.memory.upgrading)
        {
            var taskUpgrade = require('task.upgrade');
            taskUpgrade.run(creep);
        }
        else 
        {
            var taskRestock = require('task.restock');
            taskRestock.run(creep);
        }
	}
};

module.exports = roleUpgrader;