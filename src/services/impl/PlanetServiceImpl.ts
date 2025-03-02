import PlanetService from "../PlanetService";
import IPlanetDto from "../../dto/IPlanetDto";
import {Planet as P} from "../../models/Planet";
import {doc2DtoPlanet} from "../../utils/doc2Dto";

export default class PlanetServiceImpl implements PlanetService {
    async addPlanet(newPlanet: IPlanetDto): Promise<boolean> {
        if (newPlanet.id == null) {
            return false;
        }
        const planet = new P(newPlanet)
        await planet.save()
        return true;
    }

    async getAllPlanets(): Promise<IPlanetDto[]> {
        const allPlanet =await P.find();
        return allPlanet.map(planet => doc2DtoPlanet(planet));
    }

    async getPlanetsById(idSearch: number): Promise<IPlanetDto> {
        const planet = await P.findOne({id: idSearch});
        if (!planet) {
            throw new Error("Not find planet");
        }
        return doc2DtoPlanet(planet);
    }
}