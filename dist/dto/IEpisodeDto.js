"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IEpisodeDto {
    constructor(characters, created, director, edited, episode_id, id, opening_crawl, planets, producer, release_date, species, starships, title, vehicles) {
        this.characters = characters;
        this.created = created;
        this.director = director;
        this.edited = edited;
        this.episode_id = episode_id;
        this.id = id;
        this.opening_crawl = opening_crawl;
        this.planets = planets;
        this.producer = producer;
        this.release_date = release_date;
        this.species = species;
        this.starships = starships;
        this.title = title;
        this.vehicles = vehicles;
    }
}
exports.default = IEpisodeDto;
