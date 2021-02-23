class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    getX(){
        return this.x;
    }

    setX(x){
        this.x = x;
    }

    getY(){
        return this.y;
    }

    setY(y){
        this.y = y;
    }

    toString(){
        console.log("x = " + this.x + " ; y = " + this.y);
    }

}

module.exports = Point;