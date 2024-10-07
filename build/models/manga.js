"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mangas = void 0;
const mongoose_1 = require("mongoose");
const MangaSchema = new mongoose_1.Schema({
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
}, { strict: false });
exports.Mangas = (0, mongoose_1.model)("manga", MangaSchema);
