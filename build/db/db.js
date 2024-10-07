"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectDb = ConnectDb;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../config/config");
async function ConnectDb() {
    try {
        await mongoose_1.default.connect(String(config_1.MONGODB_URL), { dbName: "Anidata-Api" });
        console.log("Database Connection ");
    }
    catch (error) {
        console.log("Error While Connectiong Database");
        process.exit(1);
    }
}
