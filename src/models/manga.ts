import { Types, Schema, model } from "mongoose";

const MangaSchema = new Schema(
  {
    // Title: { type: String },
    // Rank: { type: Number },
    // Type: { type: String },
    // Volumes: { type: String },
    // Published: { type: String },
    // Members: { type: String },
    // page_url: { type: String },
    // image_url: { type: String },
    // Score: { type: Number },
    // id: { type: Number },
  },
  { strict: false }
);

export const Mangas = model("manga", MangaSchema);
