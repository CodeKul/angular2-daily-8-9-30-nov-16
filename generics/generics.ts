export class Generics<U> {
    anyType : U;

    public assignType( anyType? : U) {
        console.log('Anytype is '+anyType);
        this.anyType = anyType;
    }

    public getAnyType() : U {
        return this.anyType;
    }
}