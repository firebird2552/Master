//Defend room
var roleFighter =
{
    /** @param {Creep} creep **/
    run:function(creep)
    {
        /*var buildingTargets = creep.room.find(FIND_HOSTILE_STRUCTURES, 
        {
            filter: (structure) => 
            {
                return (structure.structureType == STRUCTURE_WALL);
            }
        });
        
        console.log('hostile buildings: ' + buildingTargets);
        if(buildingTargets !== null)
        {
            
            console.log('Target location: ' + buildingTargets.pos)
            var attackResult = creep.attack(buildingTargets);
            if(attackResult === ERR_NOT_IN_RANGE)
            {
                console.log('moving');
                creep.moveTo(buildingTargets);
            }
            else
            {
                console.log('Attack Succesful');
            }
        }
        else
        {*/
            var targets = creep.room.find(Game.FIND_HOSTILE_CREEPS);
            if(targets.length > 0)
            {
                if(creep.attack(targets[0]) == ERR_NOT_IN_RANGE)
                {
                    creep.moveTo(targets[0]);
                }
            }
           /* else
            {
                var exits = creep.room.find(FIND_EXIT_BOTTOM);
                if(exits.length > 0)
                {
                    creep.moveTo(exits[2]);
                }
            }
        }*/
    }
}



module.exports = roleFighter;