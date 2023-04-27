import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class CounterService {
    counter = 11;

    public getCounter() : number {
        return this.counter;
    }

    public hit() : number {
        this.counter++
        return this.counter;
    }
}