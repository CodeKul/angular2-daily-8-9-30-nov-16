export class Device {

    private id : Number;
    private power : Number;

    public powerUp(power : Number) : void {
        this.power = power;
    }

    public set mani (mani : String){
        this.mani = mani;
    }

    public get mani(){
        return this.mani;
    }
}