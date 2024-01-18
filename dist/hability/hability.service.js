"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HabilityService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let HabilityService = class HabilityService {
    constructor(habilityModel) {
        this.habilityModel = habilityModel;
    }
    async create(createHabilityDto) {
        const newHability = new this.habilityModel(createHabilityDto);
        await newHability.save();
        return newHability;
    }
    async findAll() {
        return await this.habilityModel.find();
    }
    async findOne(id) {
        return await this.habilityModel.findById(id);
    }
    async update(id, updateHabilityDto) {
        return await this.habilityModel.findByIdAndUpdate(id, updateHabilityDto, {
            new: true,
        });
    }
    async remove(id) {
        return await this.habilityModel.findByIdAndDelete(id);
    }
};
exports.HabilityService = HabilityService;
exports.HabilityService = HabilityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Hability')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], HabilityService);
//# sourceMappingURL=hability.service.js.map