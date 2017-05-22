var taskMove = 
{
    /** @param {Creep} creep **/
    run: function(creep, target)
    {
        //console.log('DEBUG - task.move: moving creep ' + creep.name + ' to target ' + target);
        if(!creep.pos.isNearTo(target))
        {
            creep.moveTo(target);
        }
    }
};

module.exports = taskMove;