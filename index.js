var robot = require("robotjs");

var screenSize = robot.getScreenSize();

var old = {};

var current = robot.getMousePos();

setInterval(function()
{
    var x = Math.floor((Math.random() * screenSize.width) + 1);
    var y = Math.floor((Math.random() * screenSize.height) + 1);
    
    current = robot.getMousePos();
    
    if (old.x === current.x && old.y === current.y)
    {
        robot.moveMouseSmooth(x, y);
        current = robot.getMousePos();
    }

    old.x = current.x;
    old.y = current.y;
    console.log(old.x);

}, 30000);
