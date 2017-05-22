var taskConstructRoads = 
{
    run: function(creep)
    {
        // console.log("Entered task.constructRoads");
        var constructionsSites = creep.room.find(FIND_CONSTRUCTION_SITES);
        // console.log("Construction sites: " + constructionsSites.length + "/" + MAX_CONSTRUCTION_SITES);
        // console.log("Build Road: " + creep.room.memory.buildRoad);
        if(constructionsSites.length < MAX_CONSTRUCTION_SITES && creep.room.memory.buildRoad)
        {
            // console.log("able to build road");
            creep.room.createConstructionSite(creep.pos, STRUCTURE_ROAD);
        }
        else
        {
            // console.log("not able to build road");
        }
    }
}
module.exports = taskConstructRoads;