class Circle{

    constructor(x, y = 0, speedY, forceX, color){

        this.x = x;
        this.y = y;
        this.speedY = speedY;
        this.forceX = forceX;
        this.color = color;

    };

    draw(ctx, radius){

        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);

    };

    changePosition(){

        if(Math.random() > 0.9){
            this.forceX = (Math.random()*2)-1;
        };

        this.speedX += this.forceX;
        this.speedY += (Math.random()*2)-1;

        if(this.speedY > 2){
            this.speedY = 2;
        };

        if(this.speedY < 0){
            this.speedY = 0.5;
        };

        this.x += this.forceX;
        this.y += this.speedY;

    };

    static generateRandomCircle(canvasWidth){

        const color = `rgb(150, 0, 20)`;

        const randomX = Math.random()*canvasWidth;
        const Y = 0;

        const speedY = (Math.random()*2)-1;

        const forceX = Math.random();
        
        const newCircle = new Circle(randomX, Y, speedY, forceX, color);

        return newCircle;

    };

};