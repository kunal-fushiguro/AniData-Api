import { Schema, model } from "mongoose";

const GenresSchema = new Schema({}, { strict: false });

export const Genres = model("Gernes", GenresSchema);
