const myCanvas = document.getElementById('my-canvas');
const ctx = myCanvas.getContext('2d');

// const point = {
//     x: 300,
//     y: 300
// };


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


// for (let i = 0; i < 100; i++) {

//     const point = {
//         x: 300,
//         y: 300
//     };

//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);

//     point.color = `rgb(${red},${green},${blue})`;

//     setInterval(() => {
//         const randomX = (Math.random() * 4)-2;
//         const randomY = (Math.random() * 4)-2;

//         ctx.fillStyle = point.color
//         ctx.fillRect(point.x, point.y, 2, 2);
//         point.x += randomX;
//         point.y += randomY;
//     }, 1);

// };

let red = 250;
let green = 20;
let blue = 50;
let alpha = 0;

for (let i = 0; i < 200; i++) {

    const point = {
        x: (Math.random() * 800),
        y: (Math.random() * 800)
    };

    // const red = Math.floor(Math.random() * 256);
    // const green = Math.floor(Math.random() * 256);
    // const blue = Math.floor(Math.random() * 256);

    red += (Math.random() - Math.random()) * 4;
    green += (Math.random() - Math.random()) * 4;
    blue += (Math.random() - Math.random()) * 4;
    alpha = Math.random();

    point.color = `rgba(${red},${green},${blue},${alpha})`;
    ctx.filter = 'blur(2px)';

    setInterval(() => {
        const randomX = (Math.random() - Math.random());
        const randomY = (Math.random() - Math.random())+5;

        if(point.x > 800) {
            point.x = 0;
        }

        if(point.y > 800) {
            point.y = 0;
        }

        if(point.x < 0) {
            point.x += 799;
        }

        if(point.y < 0) {
            point.y += 799;
        }

        ctx.fillStyle = point.color
        ctx.fillRect(point.x, point.y, 8, 8);
        point.x += randomX;
        point.y += randomY;
    }, 50);

};

setInterval(() => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, 800, 800);
}, 100);