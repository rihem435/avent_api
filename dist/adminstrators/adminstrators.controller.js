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
exports.AdminstratorsController = void 0;
const common_1 = require("@nestjs/common");
const adminstrators_service_1 = require("./adminstrators.service");
const create_adminstrator_dto_1 = require("./dto/create-adminstrator.dto");
const update_adminstrator_dto_1 = require("./dto/update-adminstrator.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let AdminstratorsController = class AdminstratorsController {
    constructor(adminstratorsService) {
        this.adminstratorsService = adminstratorsService;
    }
    create(createAdminstratorDto, file) {
        createAdminstratorDto.user_profile_photo = file.filename;
        return this.adminstratorsService.createAdminstrator(createAdminstratorDto);
    }
    findAll() {
        return this.adminstratorsService.getAllAdminstrator();
    }
    findOne(id) {
        return this.adminstratorsService.getAdminstrator(id);
    }
    updateImagesGalleriesEvents(updateAdminstratorDto, id, file) {
        updateAdminstratorDto.user_profile_photo = file.filename;
        return this.adminstratorsService.updateAdminstrator(id, updateAdminstratorDto);
    }
    updateEvent(id, updateAdminstratorDto) {
        return this.adminstratorsService.updateAdminstrator(id, updateAdminstratorDto);
    }
    remove(id) {
        return this.adminstratorsService.deleteAdminstrator(id);
    }
};
exports.AdminstratorsController = AdminstratorsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './upload/users',
            filename: (_request, file, callback) => callback(null, `${new Date().getTime()}-${file.originalname}`),
        }),
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_adminstrator_dto_1.CreateAdminstratorDto, Object]),
    __metadata("design:returntype", void 0)
], AdminstratorsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminstratorsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminstratorsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './upload/users',
            filename: (_request, file, callback) => callback(null, `${new Date().getTime()}-${file.originalname}`),
        }),
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_adminstrator_dto_1.UpdateAdminstratorDto, String, Object]),
    __metadata("design:returntype", void 0)
], AdminstratorsController.prototype, "updateImagesGalleriesEvents", null);
__decorate([
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_adminstrator_dto_1.UpdateAdminstratorDto]),
    __metadata("design:returntype", void 0)
], AdminstratorsController.prototype, "updateEvent", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminstratorsController.prototype, "remove", null);
exports.AdminstratorsController = AdminstratorsController = __decorate([
    (0, common_1.Controller)('adminstrators'),
    __metadata("design:paramtypes", [adminstrators_service_1.AdminstratorsService])
], AdminstratorsController);
//# sourceMappingURL=adminstrators.controller.js.map