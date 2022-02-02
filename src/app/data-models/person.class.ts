class Person {
    name: string = 'No Name';

    constructor(_name: string){
        console.log('Constructing Person');
    }

    // * The Person is born!
    sayHello() {
        return 'Hello world!  My name is: ' + this.name;
    }
}