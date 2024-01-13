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
exports.HabilityController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const hability_service_1 = require("./hability.service");
const create_hability_dto_1 = require("./dto/create-hability.dto");
const update_hability_dto_1 = require("./dto/update-hability.dto");
const swagger_1 = require("@nestjs/swagger");
let HabilityController = class HabilityController {
    constructor(habilityService) {
        this.habilityService = habilityService;
    }
    create(createHabilityDto) {
        return this.habilityService.create(createHabilityDto);
    }
    findAll() {
        return this.habilityService.findAll();
    }
    findOne(id) {
        return this.habilityService.findOne(id);
    }
    update(id, updateHabilityDto) {
        return this.habilityService.update(id, updateHabilityDto);
    }
    remove(id) {
        return this.habilityService.remove(id);
    }
};
exports.HabilityController = HabilityController;
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_hability_dto_1.CreateHabilityDto]),
    __metadata("design:returntype", void 0)
], HabilityController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HabilityController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HabilityController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_hability_dto_1.UpdateHabilityDto]),
    __metadata("design:returntype", void 0)
], HabilityController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HabilityController.prototype, "remove", null);
exports.HabilityController = HabilityController = __decorate([
    (0, swagger_1.ApiTags)('hability'),
    (0, common_1.Controller)('hability'),
    __metadata("design:paramtypes", [hability_service_1.HabilityService])
], HabilityController);
//# sourceMappingURL=hability.controller.js.map