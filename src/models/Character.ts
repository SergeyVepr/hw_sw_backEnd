import mongoose, { Schema, Document } from 'mongoose';

export interface ICharacter extends Document {
    birth_year: string;
    created: string;
    edited: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    homeworld: number;
    id: number;
    image: string;
    mass: string;
    name: string;
    skin_color: string;
}

const CharacterSchema = new Schema<ICharacter>({
    birth_year: { type: String, required: true },
    created: { type: String, required: true },
    edited: { type: String, required: true },
    eye_color: { type: String, required: true },
    gender: { type: String, required: true },
    hair_color: { type: String, required: true },
    height: { type: String, required: true },
    homeworld: { type: Number, required: true },
    id: { type: Number, required: true, unique: [true, "Duplicate ID"] },
    image: { type: String, required: true },
    mass: { type: String, required: true },
    name: { type: String, required: true },
    skin_color: { type: String, required: true }
});

export const Character = mongoose.model<ICharacter>('Character', CharacterSchema);