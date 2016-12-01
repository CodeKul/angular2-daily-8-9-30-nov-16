import { Mobile } from './inheritance/mobile';
import { Device } from './inheritance/device';
import { Car, My } from './oops/car';
export class Starter {

    public intro(): void {

        var i: number = 10;

        let car: Car = new Car(4); // birth -> computer memory 
        car.applyBreaks();
        car.whatsThis();

        let m: My = new My();
    }

    public inheritance(): void {

        let device: Device = new Device();

        device.setMani = 'India';
        console.log('mani is '+device.getMani);

        let mobile: Mobile = new Mobile();
    }
}