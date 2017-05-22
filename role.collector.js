var roleCollector = 
{
    /** @param {Creep} creep **/
    run: function(creep)
    {
        var taskCollect = require('task.collect');
        taskCollect.run(creep);
    }
}

module.exports = roleCollector;