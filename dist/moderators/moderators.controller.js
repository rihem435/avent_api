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
exports.ModeratorsController = void 0;
const common_1 = require("@nestjs/common");
const moderators_service_1 = require("./moderators.service");
const create_moderator_dto_1 = require("./dto/create-moderator.dto");
const update_moderator_dto_1 = require("./dto/update-moderator.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let ModeratorsController = class ModeratorsController {
    constructor(moderatorsService) {
        this.moderatorsService = moderatorsService;
    }
    create(createModeratorDto, file) {
        createModeratorDto.user_profile_photo = file.filename;
        return this.moderatorsService.createModerator(createModeratorDto);
    }
    findAll() {
        return this.moderatorsService.getAllModerator();
    }
    findOne(id) {
        return this.moderatorsService.getModerator(id);
    }
    update(id, updateModeratorDto) {
        return this.moderatorsService.updateModerator(id, updateModeratorDto);
    }
    remove(id) {
        return this.moderatorsService.deleteModrator(id);
    }
};
exports.ModeratorsController = ModeratorsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './upload/users',
            filename: (_request, file, callback) => callback(null, `${new Date().getTime()}-${file.originalname}`),
        }),
    })),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_moderator_dto_1.CreateModeratorDto, Object]),
    __metadata("design:returntype", void 0)
], ModeratorsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ModeratorsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ModeratorsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_moderator_dto_1.UpdateModeratorDto]),
    __metadata("design:returntype", void 0)
], ModeratorsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ModeratorsController.prototype, "remove", null);
exports.ModeratorsController = ModeratorsController = __decorate([
    (0, common_1.Controller)('moderators'),
    __metadata("design:paramtypes", [moderators_service_1.ModeratorsService])
], ModeratorsController);
//# sourceMappingURL=moderators.controller.js.map