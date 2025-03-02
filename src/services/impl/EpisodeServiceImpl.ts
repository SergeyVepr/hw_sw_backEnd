import EpisodeService from "../EpisodeService";
import {IStarWarsEpisode, StarWarsEpisode as sw} from "../../models/StarWarsEpisode";
import IEpisodeDto from "../../dto/IEpisodeDto";
import {doc2DtoEpisode} from "../../utils/doc2Dto";

export default class EpisodeServiceImpl implements EpisodeService {
    async addFilm(newEpisode: IStarWarsEpisode): Promise<boolean> {
        if (newEpisode.id == null) {
            return false;
        }
        const episode = new sw(newEpisode);
        await episode.save();
        return true;
    }

    async getAllFilms(): Promise<IEpisodeDto[]> {
        const result = await sw.find();
        return result.map(doc => doc2DtoEpisode(doc));
    }

    async getFilmById(idSearch: number): Promise<IEpisodeDto> {
        const episode = await sw.findOne({id: idSearch});
        if (!episode) {
            throw new Error(`No episode with id ${idSearch} found.`);
        }

        return doc2DtoEpisode(episode)
    }
}