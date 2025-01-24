const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.moveTo(300, 150);

ctx.lineTo(180, 510);
ctx.lineTo(490, 285);
ctx.lineTo(110, 285);
ctx.lineTo(420, 510);
ctx.lineTo(300,150);
ctx.moveTo(500, 350);

ctx.arc(300, 350, 200, 0, 2 * Math.PI);

ctx.stroke();
