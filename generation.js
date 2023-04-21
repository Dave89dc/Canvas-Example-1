class Generation{

    constructor(pointsArray = [], lifeTime = 300){
        this.pointsArray = pointsArray;
        this.lifeTime = lifeTime;
    };

    addPoint(point){
        this.pointsArray.push(point);
    };

    isDead(){
        return this.lifeTime <= 0;
    };

    static generateRandom(numberOfPoints, canvasWidth, canvasHeight){
        const newGeneration = new Generation();
        for (let i = 0; i < numberOfPoints; i++) {
            const newPoint = Point.generateRandom(canvasWidth, canvasHeight);
            newGeneration.addPoint(newPoint)
        };
        return newGeneration;
    };

    draw(ctx){
        this.lifeTime--;
        if(!this.isDead()){
            for (let i = 0; i < this.pointsArray.length; i++) {
                const point = this.pointsArray[i];
                point.draw(ctx);
                point.changePosition();
            };
        };
    };

};