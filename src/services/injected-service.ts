import { ContainerModule, interfaces } from 'inversify';

import { CounterService } from "./counter.service";
import { PetClientPrivate } from "./pets-client-private.service";
import { PetClient } from "./pets-client.service";

export const containerService =  new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind) => {
    bind<CounterService>(CounterService).toSelf();
    bind<PetClient>(PetClient).toSelf();
    bind<PetClientPrivate>(PetClientPrivate).toSelf();
});