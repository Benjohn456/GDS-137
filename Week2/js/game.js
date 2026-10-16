var canvas;
var context;
var player;
var timer;
var interval = 1000/60; //60 fps

canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");

// the paddle
player = new gameObject(200,canvas.height/2,30,150,'#ff00f2') // new not New
player.vx = 0; 
player.vy = 0;


timer = setInterval(animate, interval);

function animate(){
        context.clearRect(0, 0, canvas.width, canvas.height);
        player.drawRect();

}