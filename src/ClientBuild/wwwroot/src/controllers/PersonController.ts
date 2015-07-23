import {Person} from "../Person";

export class PersonController {
    private person: Person;

    constructor() {
        this.person = new Person("stacy");
    }
}