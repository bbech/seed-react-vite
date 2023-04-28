import { injectable } from "inversify";
import "reflect-metadata";
import { Pet, PetApi } from "@publicApi/api";
import { axiosPublic, configuration } from "../api-config";

@injectable()
export class PetClient {
    petApi = new PetApi(configuration, undefined, axiosPublic);

    public getPet() : Promise<Pet> {
        return this.petApi.getPetById(1).then(data => data.data);
    }

    public getPetWithId(id: number) : Promise<Pet> {
        return this.petApi.getPetById(id).then(data => data.data);
    }

    public updatePet(pet :Pet) : Promise<Pet> {
        return this.petApi.updatePet(pet).then(data => data.data);
    }
}