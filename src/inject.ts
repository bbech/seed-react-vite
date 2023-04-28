import { Container} from 'inversify';
import { containerService } from './services/injected-service';


export const injectContainer = () : Container => {
    containerInstance = new Container({ defaultScope: "Singleton"});
    containerInstance.load(containerService);
    return containerInstance;
}

export let containerInstance: undefined | Container;