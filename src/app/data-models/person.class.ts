export class Person {
    name: string = 'No Name';

    constructor(_name: string){
        this.name = _name;
        console.log('Constructing Person');
    }

    // * The Person is born!
    sayHello() {
        return 'Hello world!  My name is: ' + this.name;
    }
}