import { GpsListener } from './gpslistener';
export class Bike implements GpsListener{

    public accelerate() : void {
    }

    public applyBrakes() : void {
    }

    public locate() : void {
        console.log('Bike is on road');
    }
}