"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserUpdateSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 55,
    },
    wallet: {
        type: String,
        required: true,
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
//# sourceMappingURL=user-update.schema.js.map