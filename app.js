const myCanvas = document.getElementById('my-canvas');
const ctx = myCanvas.getContext('2d');


const point = {
    x: 300,
    y: 300
};


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

for (let i = 0; i < 100; i++) {

    ctx.fillRect(originX, originY, width, heigth);
    ctx.fillStyle = 'rgba('+ 
        Math.floor(Math.random()*256) + ',' + 
        Math.floor(Math.random()*256) + ',' + 
        Math.floor(Math.random()*256) + ',' +
        Math.random() + ')';

};
