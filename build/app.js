"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config/config");
const db_1 = require("./db/db");
const routes_1 = require("./routes/routes");
const express_rate_limit_1 = require("express-rate-limit");
const app = (0, express_1.default)();
const rate = (0, express_rate_limit_1.rateLimit)({
    windowMs: 1 * 60 * 1000, // 1 min
    limit: 60, // 60 rpm
    standardHeaders: "draft-7",
    legacyHeaders: false,
});
app.use((0, cors_1.default)({ origin: "*", credentials: true }));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(rate);
app.use("/api/v1", routes_1.routes);
app.listen(config_1.PORT || 5000, async () => {
    try {
        await (0, db_1.ConnectDb)();
        console.log("Server Started on PORT : ", config_1.PORT || 5000);
    }
    catch (error) {
        console.log("Connection Error : ", error.message);
        process.exit(1);
    }
});
