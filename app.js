const myCanvas = document.getElementById('my-canvas');
const ctx = myCanvas.getContext('2d');

const point = {
    x: 300,
    y: 300
};

// ESEMPIO 1

// for (let i = 0; i < 100; i++) {
//     point.x += 1;
//     ctx.fillStyle = 'red';
//     ctx.fillRect(point.x, point.y, 2, 2);
// };

// setInterval(() => {

//     const randomX = (Math.random()*4)-2;
//     const randomY = (Math.random()*4)-2;

//     ctx.fillStyle = 'red';
//     ctx.fillRect(point.x, point.y, 2, 2);
//     point.x += randomX;
//     point.y += randomY;
// }, 1);

// ESEMPIO 2


// for (let i = 0; i < 1000; i++) {

//     const point = Point.generateRandom(myCanvas.width, myCanvas.height);

//     setInterval(() => {

//         point.draw(ctx);
//         point.changePosition();

//     }, 50);

// };

// ESEMPIO 3

// const pointsArray = [];

// for (let i = 0; i < 10000; i++) {
//     const newPoint = Point.generateRandom(myCanvas.width, myCanvas.height);
//     pointsArray.push(newPoint);
// };

// console.log(pointsArray);

// setInterval(() => {

//     for (let i = 0; i < pointsArray.length; i++) {
//         const point = pointsArray[i];
//         point.draw(ctx);
//         point.changePosition();
//     };

// }, 50);

// ESEMPIO 4 


// let previousTime;

let newGeneration = Generation.generateRandom(40, myCanvas.width, myCanvas.height);

function step(timestamp){

    // if(previousTime){
    //     console.log(1000/(timestamp-previousTime));
    // };
    // previousTime = timestamp;

    newGeneration.draw(ctx);

    if(newGeneration.isDead()){
        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
        newGeneration = Generation.generateRandom(100, myCanvas.width, myCanvas.height);
    };

    window.requestAnimationFrame(step);
};

window.requestAnimationFrame(step);


// ESEMPIO  CON LA CLASSE GENERATION

// const newGeneration = new Generation();


// for (let i = 0; i < newGeneration.length; i++) {
//     const newPoint = Point.generateRandom(myCanvas.clientWidth, myCanvas.height);
//     newGeneration.addPoint(newPoint);
// };

console.log(newGeneration);



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