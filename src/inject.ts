import { Container } from 'inversify';
import { CounterService } from "./services/counter.service";
import { PetClient } from "./services/pets-client.service";

export const injectContainer = () => {
    const container = new Container();
    container.bind(CounterService).toSelf();
    container.bind(PetClient).toSelf();
    return container;
}