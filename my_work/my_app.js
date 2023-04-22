const myCanvas = document.getElementById('my-canvas');
const ctx = myCanvas.getContext('2d');


let numberOfCircles = 20;

let newGeneration = Generation.generateRandomCircles(numberOfCircles, myCanvas.width);
newGeneration.radius = 15;
let radius = newGeneration.radius;

function step(){

    newGeneration.draw(ctx);
    if(newGeneration.isDead()){
        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
        newGeneration = Generation.generateRandomCircles(numberOfCircles, myCanvas.width);
        newGeneration.radius = radius;
    };
    window.requestAnimationFrame(step);
};

window.requestAnimationFrame(step);









































// MIE PROVE

// let red = 250;
// let green = 20;
// let blue = 20;
// let alpha = 0;

// for (let i = 0; i < 300; i++) {

//     const point = {
//         x: (Math.random() * 800),
//         y: (Math.random() * 800)
//     };

//     // const red = Math.floor(Math.random() * 256);
//     // const green = Math.floor(Math.random() * 256);
//     // const blue = Math.floor(Math.random() * 256);

//     red += (Math.random() - Math.random()) * 4;
//     green += (Math.random() - Math.random()) * 4;
//     blue += (Math.random() - Math.random()) * 4;
//     alpha = Math.random();

//     point.color = `rgba(${red},${green},${blue},${alpha})`;
//     ctx.filter = 'blur(2px)';

//     setInterval(() => {
//         const randomX = (Math.random() - Math.random());
//         const randomY = (Math.random() - Math.random())+5;

//         if(point.x > 800) {
//             point.x = 0;
//         }

//         if(point.y > 800) {
//             point.y = 0;
//         }

//         if(point.x < 0) {
//             point.x += 799;
//         }

//         if(point.y < 0) {
//             point.y += 799;
//         }

//         ctx.fillStyle = point.color
//         ctx.fillRect(point.x, point.y, 8, 8);
//         point.x += randomX;
//         point.y += randomY;
//     }, 50);

// };

// setInterval(() => {
//     ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
//     ctx.fillRect(0, 0, 800, 800);
// }, 100);