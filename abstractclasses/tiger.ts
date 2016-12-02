import { Animal } from './animal';

export /*abstract*/ class Tiger extends Animal{

    public walk() : void {
       console.log('Tiger is walking');
    }

    public runFast() : void {
        console.log('Tiger is running fast');
    }
}