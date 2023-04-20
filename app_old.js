const myCanvas = document.getElementById('my-canvas');

// La canvas ha due nature, una 2d e una 3d

const ctx = myCanvas.getContext('2d'); // ctx = context (contesto), 2d o webgl (3d = webgl)

// ctx.fillRect(20,20,50,60);

for (let i = 0; i < 150; i++) {
    const originX = Math.random() * 600;
    const originY = Math.random() * 600;
    const width = Math.random() * 100;
    const heigth = Math.random() * 100;

    // ctx.fillStyle = 'rgba(' + Math.floor(Math.random() * 256) + ',' +
    //                         Math.floor(Math.random() * 256) + ',' +
    //                         Math.floor(Math.random() * 256) + ',' +
    //                         Math.random() + ')';

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const alpha = Math.random();

    ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

    ctx.strokeStyle = 'blue';

    // ctx.fillRect(originX, originY, width, heigth);                        
    ctx.strokeRect(originX, originY, width, heigth);                        
};