import mongoose, { Schema, Document } from 'mongoose';

export interface IStarWarsEpisode extends Document {
    characters: number[];
    created: string;
    director: string;
    edited: string;
    episode_id: number;
    id: number;
    opening_crawl: string;
    planets: number[];
    producer: string;
    release_date: string;
    species: number[];
    starships: number[];
    title: string;
    vehicles: number[];
}

const StarWarsEpisodeSchema = new Schema<IStarWarsEpisode>({
    characters: { type: [Number], required: true },
    created: { type: String, required: true },
    director: { type: String, required: true },
    edited: { type: String, required: true },
    episode_id: { type: Number, required: true },
    id: { type: Number, required: true, unique: [true, "Duplicate ID"] },
    opening_crawl: { type: String, required: true },
    planets: { type: [Number], required: true },
    producer: { type: String, required: true },
    release_date: { type: String, required: true },
    species: { type: [Number], required: true },
    starships: { type: [Number], required: true },
    title: { type: String, required: true },
    vehicles: { type: [Number], required: true }
});

export const StarWarsEpisode = mongoose.model<IStarWarsEpisode>('StarWarsEpisode', StarWarsEpisodeSchema);