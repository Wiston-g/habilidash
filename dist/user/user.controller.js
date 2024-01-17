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
exports.UserController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const user_create_dto_1 = require("./dto/user-create.dto");
const user_service_1 = require("./user.service");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async registerUser(res, createUserDTO) {
        const user = await this.userService.createUser(createUserDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'User Successfully Created',
            user: user,
        });
    }
    async getUsers(res) {
        const users = await this.userService.findAllUsers();
        let dataObject;
        const userData = [];
        users.forEach((user) => {
            dataObject = {
                id: user._id,
                name: user.name,
                linkURL: user.linkURL,
                habilities: user.habilitiesArray,
            };
            userData.push(dataObject);
        });
        return res.status(common_1.HttpStatus.OK).json({
            message: 'User List',
            user: userData,
        });
    }
    async getUser(res, id) {
        const user = await this.userService.findOneUser(id);
        const dataObject = {
            id: user._id,
            name: user.name,
            linkURL: user.linkURL,
            habilities: user.habilitiesArray,
        };
        if (!user)
            throw new common_1.NotFoundException('User Does Not Exists');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'User Find',
            user: dataObject,
        });
    }
    async deleteUser(res, id) {
        const user = await this.userService.deleteUser(id);
        if (!user)
            throw new common_1.NotFoundException('User Does Not Exists');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'User Deleted Success',
            user: user,
        });
    }
    async UpdateUser(id, createUserDTO, res) {
        const user = await this.userService.updateUser(id, createUserDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'User Successfully Updated',
            user: user,
        });
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_create_dto_1.CreateUserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "registerUser", null);
__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_create_dto_1.CreateUserDTO, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "UpdateUser", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('user'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map