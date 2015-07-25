import {Person} from "../Person";

export class PersonController {
    private person: Person;

    constructor() {
        this.person = new Person("stacy gay");
    }

    public getHello(): string {
        return this.person.getHello();
    }
}