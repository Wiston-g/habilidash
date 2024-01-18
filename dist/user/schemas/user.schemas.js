"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 55,
    },
    wallet: {
        type: String,
        required: true,
        unique: true,
        min: 42,
        max: 42,
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 55,
    },
    linkURL: {
        type: String,
        required: true,
        min: 2,
        max: 155,
    },
    habilitiesArray: {
        type: Array,
        required: true,
    },
    creaedAt: {
        type: Date,
        default: Date.now,
    },
});
//# sourceMappingURL=user.schemas.js.map