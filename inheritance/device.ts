export class Device {

    private id : Number;
    private power : Number;
    private mani : String;

    public constructor(){
        console.log('From Device');
    }
    public powerUp(power : Number) : void {
        this.power = power;
    }

    public set setMani (mani : String){
        this.mani = mani;
    }

    public get getMani() {
        return this.mani;
    }
}