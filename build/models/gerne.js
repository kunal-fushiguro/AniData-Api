"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Genres = void 0;
const mongoose_1 = require("mongoose");
const GenresSchema = new mongoose_1.Schema({}, { strict: false });
exports.Genres = (0, mongoose_1.model)("Gernes", GenresSchema);
