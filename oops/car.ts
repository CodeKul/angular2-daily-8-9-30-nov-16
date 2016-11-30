export class Car {
    private wheels : number = 10;

    public constructor(wheels : number) {
        this.wheels = wheels;
    }
    private increaseSpeed() : void {
        this.wheels++;
                console.log('Increasing Speed - '+this.wheels);
    }

    public applyBreaks() : void {
        this.wheels--;
        console.log('Applying Breaks - '+this.wheels);
    }

    whatsThis(){
                console.log('Whats this');
    }
 }