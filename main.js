let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

const drawSize = 1;
const offset = 10;
ctx.fillStyle = "FF0000";

for (let i = 0; i < 50; i++) {
    for (let u = 0; u < 50; u++) {
        ctx.fillRect(u*offset, i*offset, drawSize, drawSize);
    }
}