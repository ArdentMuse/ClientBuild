import {Factory} from "decorators/Factory";

@Factory
export class Person {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }

    public sayHello() {
        console.log(this.getHello());
    }

    public getHello(): string {
        return "Hello " + this.name;
    }
}