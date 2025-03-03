import {IStarWarsEpisode} from "../models/StarWarsEpisode";
import IEpisodeDto from "../dto/IEpisodeDto";
import {ICharacter} from "../models/Character";
import IPeopleDto from "../dto/IPeopleDto";
import {IPlanet} from "../models/Planet";
import IPlanetDto from "../dto/IPlanetDto";

export function doc2DtoEpisode(doc: IStarWarsEpisode): IEpisodeDto {
    return new IEpisodeDto(
        doc.characters,
        doc.created,
        doc.director,
        doc.edited,
        doc.episode_id,
        doc.id,
        doc.opening_crawl,
        doc.planets,
        doc.producer,
        doc.release_date,
        doc.species,
        doc.starships,
        doc.title,
        doc.vehicles
    );
}

export function doc2DtoPeople(doc: ICharacter): IPeopleDto {
    return new IPeopleDto(
        doc.birth_year,
        doc.created,
        doc.edited,
        doc.eye_color,
        doc.gender,
        doc.hair_color,
        doc.height,
        doc.homeworld,
        doc.id,
        doc.image,
        doc.mass,
        doc.name,
        doc.skin_color,
    );
}

export function doc2DtoPlanet(doc: IPlanet): IPlanetDto {
    return new IPlanetDto(
        doc.climate,
        doc.created,
        doc.diameter,
        doc.edited,
        doc.gravity,
        doc.id,
        doc.name,
        doc.orbital_period,
        doc.population,
        doc.rotation_period,
        doc.surface_water,
        doc.terrain,
    );
}
