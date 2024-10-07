"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEV = exports.PORT = exports.MONGODB_URL = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
_a = process.env, exports.MONGODB_URL = _a.MONGODB_URL, exports.PORT = _a.PORT, exports.DEV = _a.DEV;
