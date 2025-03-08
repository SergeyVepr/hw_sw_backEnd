"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.doc2DtoEpisode = doc2DtoEpisode;
exports.doc2DtoPeople = doc2DtoPeople;
exports.doc2DtoPlanet = doc2DtoPlanet;
const IEpisodeDto_1 = __importDefault(require("../dto/IEpisodeDto"));
const IPeopleDto_1 = __importDefault(require("../dto/IPeopleDto"));
const IPlanetDto_1 = __importDefault(require("../dto/IPlanetDto"));
function doc2DtoEpisode(doc) {
    return new IEpisodeDto_1.default(doc.characters, doc.created, doc.director, doc.edited, doc.episode_id, doc.id, doc.opening_crawl, doc.planets, doc.producer, doc.release_date, doc.species, doc.starships, doc.title, doc.vehicles);
}
function doc2DtoPeople(doc) {
    return new IPeopleDto_1.default(doc.birth_year, doc.created, doc.edited, doc.eye_color, doc.gender, doc.hair_color, doc.height, doc.homeworld, doc.id, doc.image, doc.mass, doc.name, doc.skin_color);
}
function doc2DtoPlanet(doc) {
    return new IPlanetDto_1.default(doc.climate, doc.created, doc.diameter, doc.edited, doc.gravity, doc.id, doc.name, doc.orbital_period, doc.population, doc.rotation_period, doc.surface_water, doc.terrain);
}
