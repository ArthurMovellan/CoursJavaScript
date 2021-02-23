const Point = require('./exoPoint');

class Circle{
    constructor(x,y,r){
        this.center = new Point(x,y);
        this.radius = r;
    }

    toString(){
        console.log("Circle center : [" + this.center.x + " ; " + this.center.y + "], radius = " + this.radius);
    }

    area(){
        return Math.PI * Math.pow(this.radius,2);
    }

    constainsPoint(x,y){
        let dist = Math.sqrt(Math.pow((x-this.center.x),2)+Math.pow((y-this.center.y),2));
        if (dist>this.radius){
            return false;
        }else{
            return true;
        }
    }
}

c = new Circle(0,0,5);
c.toString();
console.log(c.area());
console.log(c.constainsPoint(10,2));
console.log(c.constainsPoint(1,3));


