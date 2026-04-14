var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


let x = 0;
var mainTimer = setInterval(animate, 1000/60);
function animate()
{
ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.beginPath();
ctx.arc(x+= 10, 400, 40, 0, 2 * Math.PI);
ctx.fillStyle = "purple";
ctx.fill();
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.stroke();

//Update the Canvas
x+= 10
}
animate;