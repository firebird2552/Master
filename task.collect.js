var taskCollect = 
{
    /** @param {Creep} creep **/
    run: function(creep)
    {
        // Find all the piles of energy in the room
        // Determine the number of energy piles
        var energyPiles = creep.room.find(FIND_DROPPED_RESOURCES);
        
        // check if the harvester can pickup the energy
        if(creep.pickup(energyPiles[0]) === ERR_NOT_IN_RANGE)
        {
            // console.log('here');
            // move the harvester toward the current pile
            creep.moveTo(energyPiles[0]);
        }
    }
}

module.exports = taskCollect;

