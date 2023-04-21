class Point{

    constructor(x, y, speedX, speedY, forceX, forceY, color){
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
        this.forceX = forceX;
        this.forceY = forceY;
    };

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 2, 2);
    };

    changePosition(){

        if(Math.random() > 0.9){
            this.forceY = (Math.random()*0.2)-0.1;
        };

        if(Math.random() > 0.9){
            this.forceX = (Math.random()*0.2)-0.1;
        };

        this.speedX += this.forceX;
        this.speedY += this.forceY;

        if(this.speedX > 1){
            this.speedX = 1;
        };

        if(this.speedX < -1){
            this.speedX = -1;
        };

        if(this.speedY > 1){
            this.speedY = 1;
        };

        if(this.speedY < -1){
            this.speedY = -1;
        };

        this.x += this.speedX;
        this.y += this.speedY;

    };

    static generateRandom(canvasWidth, canvasHeight){

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const randomColor = `rgb(${red},${green},${blue})`;
    const randomX = Math.random() * canvasWidth;
    const randomY = Math.random() * canvasHeight;

    const speedX = (Math.random() * 2)-1;
    const speedY = (Math.random() * 2)-1;

    const forceX = (Math.random() * 0.2) - 0.1;
    const forceY = (Math.random() * 0.2) - 0.1;

    const newPoint = new Point(randomX, randomY, speedX, speedY, forceX, forceY, randomColor);
    
    return newPoint;

    };

};