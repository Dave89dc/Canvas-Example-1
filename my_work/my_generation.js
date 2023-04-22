class Generation{

    constructor(circleArray = [], lifeTime = 1000, radius = 10){

        this.circleArray = circleArray;
        this.lifeTime = lifeTime;
        this.radius = radius;

    };

    addCircle(newCircle){
        return this.circleArray.push(newCircle);
    };

    isDead(){
        return this.lifeTime <= 0;
    };

    static generateRandomCircles(numberOfPoints, canvasWidth){
        const newGeneration = new Generation();
        for (let i = 0; i < numberOfPoints; i++) {
            const newCircle = Circle.generateRandomCircle(canvasWidth);
            newGeneration.addCircle(newCircle); 
        };
        return newGeneration;
    };

    draw(ctx){
        this.lifeTime--;
        if(!this.isDead()){
            for (let i = 0; i < this.circleArray.length; i++) {
                const circle = this.circleArray[i];
                circle.draw(ctx, this.radius);
                circle.changePosition();
            };
        };
    };

};