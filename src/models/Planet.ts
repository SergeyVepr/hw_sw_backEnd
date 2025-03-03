import mongoose, { Schema, Document } from 'mongoose';

export interface IPlanet extends Document {
    climate: string;
    created: string;
    diameter: string;
    edited: string;
    gravity: string;
    id: number;
    name: string;
    orbital_period: string;
    population: string;
    rotation_period: string;
    surface_water: string;
    terrain: string;
}

const PlanetSchema = new Schema<IPlanet>({
    climate: { type: String, required: true },
    created: { type: String, required: true },
    diameter: { type: String, required: true },
    edited: { type: String, required: true },
    gravity: { type: String, required: true },
    id: { type: Number, required: true, unique: [true, "Duplicate ID"] },
    name: { type: String, required: true },
    orbital_period: { type: String, required: true },
    population: { type: String, required: true },
    rotation_period: { type: String, required: true },
    surface_water: { type: String, required: true },
    terrain: { type: String, required: true }
});

export const Planet = mongoose.model<IPlanet>('Planet', PlanetSchema);