class vehicle{
    name:string;

    constructor(name:string){
        this.name=name;
    }
    getname():string{
        return this.name;
    }
}
class car extends vehicle{

    model:string

    constructor(model:string,name:string){
        super(name);
        this.model=model;
    }

    getnamemodel():string{
        return this.model + this.name;
    }
}

class Truck extends vehicle{

    constructor(name:string){
        super(name);
    }
}
var mycar = new car("sports model","bmw")
console.log(mycar.getnamemodel);

var truck = new car("tata truck","bmw")
console.log(truck.getname());

