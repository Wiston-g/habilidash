"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HabilitySchema = void 0;
const mongoose_1 = require("mongoose");
exports.HabilitySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 55,
    },
    usersArray: {
        type: Array,
        required: true,
    },
    creaedAt: {
        type: Date,
        default: Date.now,
    },
});
//# sourceMappingURL=hability.schemas.js.map