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
exports.AuthentificationController = void 0;
const common_1 = require("@nestjs/common");
const authentification_service_1 = require("./authentification.service");
const login_dto_1 = require("./dto/login.dto");
const create_user_dto_1 = require("../users/dto/create-user.dto");
const accessToken_guard_1 = require("./guards/accessToken.guard");
const refrechToken_guard_1 = require("./guards/refrechToken.guard");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const update_user_dto_1 = require("../users/dto/update-user.dto");
let AuthentificationController = class AuthentificationController {
    constructor(authentificationService) {
        this.authentificationService = authentificationService;
    }
    signup(createUserDto, file) {
        createUserDto.user_profile_photo = file.filename;
        return this.authentificationService.signUp(createUserDto);
    }
    signin(data) {
        return this.authentificationService.signIn(data);
    }
    logout(req) {
        this.authentificationService.logOut(req.user['sub']);
    }
    async newPassword(updateUserDto, id) {
        await this.authentificationService.updatePassword(id, updateUserDto);
    }
    refreshTokens(req) {
        const userId = req.user['sub'];
        const refrechToken = req.user['refereshToken'];
        return this.authentificationService.refeshTokens(userId, refrechToken);
    }
};
exports.AuthentificationController = AuthentificationController;
__decorate([
    (0, common_1.Post)('signup'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './upload/users',
            filename: (_request, file, callback) => callback(null, `${new Date().getTime()}-${file.originalname}`),
        }),
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", void 0)
], AuthentificationController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('signin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.CreateAuthentificationDto]),
    __metadata("design:returntype", void 0)
], AuthentificationController.prototype, "signin", null);
__decorate([
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Get)('logout'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthentificationController.prototype, "logout", null);
__decorate([
    (0, common_1.UseGuards)(accessToken_guard_1.AccessTokenGuard),
    (0, common_1.Patch)("updatepassword/:id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_dto_1.UpdateUserDto, String]),
    __metadata("design:returntype", Promise)
], AuthentificationController.prototype, "newPassword", null);
__decorate([
    (0, common_1.UseGuards)(refrechToken_guard_1.RefreshTokenGuard),
    (0, common_1.Get)('refresh'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthentificationController.prototype, "refreshTokens", null);
exports.AuthentificationController = AuthentificationController = __decorate([
    (0, common_1.Controller)('authentification'),
    __metadata("design:paramtypes", [authentification_service_1.AuthentificationService])
], AuthentificationController);
//# sourceMappingURL=authentification.controller.js.map