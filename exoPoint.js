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

p = new Point (21,25);

console.log(p.getX());
p.setX(13);
console.log(p.getY());
p.setY(28);
p.toString();