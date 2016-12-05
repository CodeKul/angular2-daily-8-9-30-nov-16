import { GpsListener } from './gpslistener';
export class Human implements GpsListener{

    public eat() : void {
    }

    public walk() : void {
    }

    public locate() : void {
        console.log('Human is in Home');
    }
}