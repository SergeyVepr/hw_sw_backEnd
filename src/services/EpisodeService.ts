import {IStarWarsEpisode} from "../models/StarWarsEpisode";
import IEpisodeDto from "../dto/IEpisodeDto";

export default interface EpisodeService {
    addFilm(newEpisode: IStarWarsEpisode): Promise<boolean>;

    getAllFilms(): Promise<IEpisodeDto[]>;

    getFilmById(id: number): Promise<IEpisodeDto>;
}