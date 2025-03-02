import IPlanetDto from "../dto/IPlanetDto";

export default interface PlanetService {
    addPlanet(newPlanet: IPlanetDto): Promise<boolean>;

    getAllPlanets(): Promise<IPlanetDto[]>;

    getPlanetsById(id: number): Promise<IPlanetDto>;
}