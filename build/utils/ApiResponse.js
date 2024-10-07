"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
class ApiResponse {
    constructor(statusCode, message, success, data) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data || {};
        this.success = success;
    }
}
exports.ApiResponse = ApiResponse;
