var roleBuilder = {
    
    /** @param {Creep} creep **/
    run: function(creep) 
    {
            // console.log('** role.builder **');
        
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');
        if(creep.memory.building)
        {
            if(creep.carry.energy === 0)
            {
                creep.memory.building = false;
            }
        }
        if(creep.carry.energy !== creep.carryCapacity && !creep.memory.building) 
	    {
            // console.log('** role.builder => task.restock **');
            creep.memory.building = false;
            var taskRestock = require('task.restock');
            taskRestock.run(creep);
	    }
	    else if(!creep.memory.building && creep.carry.energy === creep.carryCapacity) 
	    {
	        creep.memory.building = true;
	        creep.say('building');
	    }
	    else if(creep.memory.building) 
	    {
	        var priorityBuildingTargets = creep.room.find(FIND_CONSTRUCTION_SITES, {
	            filter: function(structure)
	            {
	                return !(structure.structureType == STRUCTURE_ROAD);
	            }
	        });
	        var buildingTargets = creep.room.find(FIND_CONSTRUCTION_SITES, {
	            	            filter: function(structure)
	            {
	                return structure.structureType == STRUCTURE_ROAD
	            }
	        });
	        var priorityRepairTargets = creep.room.find(FIND_STRUCTURES, {
	            filter: function(structure)
	            {
	                return(structure.structureType === STRUCTURE_ROAD) && 
	                structure.hits < structure.hitsMax/3; 
	            }
	        });
	        var repairTargets = creep.room.find(FIND_STRUCTURES,  
	        {
	            filter: function(object)
	            {
	                return object.hits < object.hitsMax/3;
	            }
	        });
	        
	        
	         //  console.log("Priority building targets: " + priorityBuildingTargets.length);
	       if(priorityBuildingTargets.length > 0)
	       {
            // console.log('** role.builder => task.build **');
	           var taskBuild = require('task.build');
	           taskBuild.run(creep, priorityBuildingTargets);
	       }
	       else if(priorityRepairTargets.length > 0)
	       {
            // console.log('** role.builder => task.repair **');
               var repairTarget = creep.memory.repairTarget;
               
              // console.log("Repair target: " + repairTarget);
               if(repairTarget > priorityRepairTargets.length || repairTarget === undefined || typeof repairTarget !== Number)
               {
                   repairTarget = 0
               }
	           var taskRepair = require('task.repair');
	           taskRepair.run(creep, priorityRepairTargets[repairTarget]);
	           
                creep.memory.repairTarget = repairTarget += 1;
	       }
           else if(buildingTargets.length > 0)
           {
            // console.log('** role.builder => task.build **');
               var taskBuild = require('task.build');
               taskBuild.run(creep, buildingTargets);
           }
	       else if(repairTargets.length > 0) 
           {
            // console.log('** role.builder => task.repair => Repair Targets: ' + repairTargets.length + ' **');
            // console.log('** role.builder => task.repair => Repair Target: ' + creep.memory.repairTarget + ' **');
               var repairTarget = creep.memory.repairTarget;
               if(repairTarget > repairTargets.length || repairTarget === undefined)
               {
                   repairTarget = 0
               }
               var taskRepair = require('task.repair');
               taskRepair.run(creep, repairTargets[repairTarget]);
               
               repairTarget += 1;
               creep.memory.repairTarget = repairTarget;
           }
	    }
            // console.log('** /role.builder **');
	}
};

module.exports = roleBuilder;