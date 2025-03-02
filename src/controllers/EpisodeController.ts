import {Body, Controller, Get, Param, Post, Res} from "routing-controllers";
import EpisodeServiceImpl from "../services/impl/EpisodeServiceImpl";
import {IStarWarsEpisode} from "../models/StarWarsEpisode";
import {Response} from "express";

@Controller()
export default class EpisodeController {
    episodeService: EpisodeServiceImpl = new EpisodeServiceImpl();

    @Post('/v1/films')
    async addFilm(@Body() newFilm: IStarWarsEpisode, @Res() res: Response) {
        return await this.episodeService.addFilm(newFilm)
            .catch(err => res.status(409).send(err.message));
    }

    @Get('/v1/films')
    async getAllFilms(@Res() res: Response) {
        return await this.episodeService.getAllFilms();
    }

    @Get('/v1/films/:id')
    async getFilmById(@Param('id') id: number,@Res() res: Response) {
        return await this.episodeService.getFilmById(id);
    }
}