export class Person {
    name: string = 'No Name';

    constructor(_name: string){
        this.name = _name;
        console.log('Constructing Person');
    }

    public static async build(_name: string) {
        const tmpPerson = new Person(_name);
        tmpPerson.name = 'modified in build';
        return tmpPerson;
    }

    // * The Person is born!
    changeSelf() {
        this.name = "SELF NAME";
    }
}