import { Generics } from './generics/generics';
import { Bike } from './interfaces/bike';
import { Human } from './interfaces/human';
import { Animal } from './abstractclasses/animal';
import { Tiger } from './abstractclasses/tiger';
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

    public abstractClasses() : void {

       // let animal : Animal = new Animal();
        // animal.walk();

        let abc : Animal = new Tiger();
        abc.walk();
        abc.age();
       // animalTiger.runFast();

       let tiger : Tiger = new Tiger();
       tiger.runFast();
       tiger.walk();
       tiger.age();
    }

    public interfaces() : void {

        let human : Human = new Human();
        human.eat();
        human.locate();

        let bike : Bike = new Bike();
        bike.accelerate();
        bike.locate();
    }

    public generics() : void {

        //STL =Standarad Templating Lib
        let anyString : Generics<String> = new Generics<String>(); 
        anyString.assignType('Android');
        console.log('String type - '+anyString.getAnyType());

        let anyInt : Generics<Number> = new Generics<Number>();
        anyInt.assignType();
        console.log('Number type - '+anyInt.getAnyType());
    }
}