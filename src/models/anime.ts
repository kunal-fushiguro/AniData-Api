import { Schema, model } from "mongoose";

const AnimeSchema = new Schema({
  anime_id: { type: Number },
  Name: { type: String },
  ["English name"]: { type: String },
  ["Other name"]: { type: String },
  Score: { type: Number },
  Genres: { type: String },
  Synopsis: { type: String },
  Type: { type: String },
  Episodes: { type: Number },
  Aired: { type: String },
  Premiered: { type: String },
  Status: { type: String },
  Producers: { type: String },
  Licensors: { type: String },
  Studios: { type: String },
  Source: { type: String },
  Duration: { type: String },
  Rating: { type: String },
  Rank: { type: Number },
  Popularity: { type: Number },
  Favorites: { type: Number },
  ["Scored By"]: { type: Number },
  Members: { type: Number },
  ["Image URL"]: { type: String },
});

export const Animes = model("Animes", AnimeSchema);
