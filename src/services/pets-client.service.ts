import { injectable } from "inversify";
import "reflect-metadata";
import { Pet, PetApi } from "@petapi/api";
import { configuration } from "../api-config";

@injectable()
export class PetClient {
    petApi = new PetApi(configuration);

    public getCounter() : Promise<Pet> {
        return this.petApi.getPetById(1).then(data => data.data);
    }
}