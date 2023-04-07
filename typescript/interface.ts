interface Paint{

    drawpoint():void;

}
interface Paint2d{

    draw2dimage():void;
}

class Circle implements Paint,Paint2d{
    draw2dimage(): void {
        console.log("drawing ")
    }
}

new Cir = new Circle();
cir.drawpoint();
cir