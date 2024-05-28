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
exports.AdminstratorsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let AdminstratorsService = class AdminstratorsService {
    constructor(AdminstratorModel) {
        this.AdminstratorModel = AdminstratorModel;
    }
    async createAdminstrator(createAdminstratorDto) {
        const newAdminstrator = await new this.AdminstratorModel(createAdminstratorDto);
        return newAdminstrator.save();
    }
    async updateAdminstrator(AdminstratorId, updateAdminstratorDto) {
        const existingAdminstrator = await this.AdminstratorModel.findByIdAndUpdate(AdminstratorId, updateAdminstratorDto, { new: true });
        if (!existingAdminstrator) {
            throw new common_1.NotFoundException('Adminstrator #${AdminstratorId} not found');
        }
        return existingAdminstrator;
    }
    async getAllAdminstrator() {
        const AdminstratorData = await this.AdminstratorModel.find({ role: "Adminstrator" });
        if (!AdminstratorData || AdminstratorData.length == 0) {
            throw new common_1.NotFoundException('Adminstrator data not found!');
        }
        return AdminstratorData;
    }
    async getAdminstrator(AdminstratorId) {
        const existingAdminstrator = await this.AdminstratorModel.findById(AdminstratorId).exec();
        if (!existingAdminstrator) {
            throw new common_1.NotFoundException(`Adminstrator #${AdminstratorId} not found`);
        }
        return existingAdminstrator;
    }
    async deleteAdminstrator(AdminstratorId) {
        const deleteAdminstrator = await this.AdminstratorModel.findByIdAndDelete(AdminstratorId);
        if (!deleteAdminstrator) {
            throw new common_1.NotFoundException('User #${UserId} not found');
        }
        return deleteAdminstrator;
    }
};
exports.AdminstratorsService = AdminstratorsService;
exports.AdminstratorsService = AdminstratorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('users')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AdminstratorsService);
//# sourceMappingURL=adminstrators.service.js.map