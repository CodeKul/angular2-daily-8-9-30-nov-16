import { Device } from './device';
export class Mobile /* is a device*/ extends Device {

    private isTouchScreen : Boolean;
    private chargerType : String;

    public constructor() {
        super(); // constructor of parent
        console.log('From Mobile');
    }

    public plugCharger() : String {
        return this.chargerType = 'Plug';
    }
}