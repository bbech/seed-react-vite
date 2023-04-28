import { Container } from 'inversify';
import { CounterService } from "./services/counter.service";
import { PetClient } from "./services/pets-client.service";
import { PetClientPrivate } from './services/pets-client-private.service';

export const injectContainer = () => {
    const container = new Container();
    container.bind(CounterService).toSelf();
    container.bind(PetClient).toSelf();
    container.bind(PetClientPrivate).toSelf();
    return container;
}