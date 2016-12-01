import { Device } from './inheritance/device';
import { Car, My } from './oops/car';
var i : number = 10;

let car : Car = new Car(4); // birth -> computer memory 
car.applyBreaks();
car.whatsThis();

let m : My = new My();

let device : Device = new Device();

device.mani = 'India';
console.log(device.mani);

