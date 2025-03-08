"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const StarWarsEpisode_1 = require("../../models/StarWarsEpisode");
const doc2Dto_1 = require("../../utils/doc2Dto");
class EpisodeServiceImpl {
    addFilm(newEpisode) {
        return __awaiter(this, void 0, void 0, function* () {
            if (newEpisode.id == null) {
                return false;
            }
            const episode = new StarWarsEpisode_1.StarWarsEpisode(newEpisode);
            yield episode.save();
            return true;
        });
    }
    getAllFilms() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield StarWarsEpisode_1.StarWarsEpisode.find();
            return result.map(doc => (0, doc2Dto_1.doc2DtoEpisode)(doc));
        });
    }
    getFilmById(idSearch) {
        return __awaiter(this, void 0, void 0, function* () {
            const episode = yield StarWarsEpisode_1.StarWarsEpisode.findOne({ id: idSearch });
            if (!episode) {
                throw new Error(`No episode with id ${idSearch} found.`);
            }
            return (0, doc2Dto_1.doc2DtoEpisode)(episode);
        });
    }
}
exports.default = EpisodeServiceImpl;
