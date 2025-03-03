import {Body, Controller, Get, Param, Post, Res} from "routing-controllers";
import {Response} from "express";
import PlanetServiceImpl from "../services/impl/PlanetServiceImpl";
import PlanetService from "../services/PlanetService";
import {IPlanet} from "../models/Planet";


@Controller()
export class PlanetController {
    planetService: PlanetService = new PlanetServiceImpl();

    @Post('/v1/planets')
    async addPlanet(@Body() newPlanet: IPlanet, @Res() res: Response) {
        const result: Response = await this.planetService.addPlanet(newPlanet)
            .then((b) => res.status(200).json({result}))
            .catch(err =>  res.status(409).send(err.message));

        return result;

    }

    @Get('/v1/planets')
    async getAllPlanets(@Res() res: Response) {
        return await this.planetService.getAllPlanets();
    }

    @Get('/v1/planets/:id')
    async getPlanetById(@Res() res: Response, @Param('id') id: number) {
        return await this.planetService.getPlanetsById(id);
    }
}

