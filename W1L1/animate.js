var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


let x = 200;
var vx = 5;
let y = 400;
var vy = 5;

var mainTimer = setInterval(animate, 1000/60);
function animate()
{
ctx.clearRect(0, 0, canvas.width, canvas.height);

ctx.beginPath();
ctx.arc(x, y, 40, 0, 2 * Math.PI);
ctx.fillStyle = "purple";
ctx.fill();
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.stroke();

//Update the Canvas
x+= vx

if (x + 40 > canvas.width)
{
vx = -vx;
}

if (x - 40 < 0)
{
    vx = vx * -1;
}
y+= vy

if (y + 40 > canvas.height)
{
vy = -vy;
}

if (y - 40 < 0)
{
    vy = vy * -1;
}

}
animate;
