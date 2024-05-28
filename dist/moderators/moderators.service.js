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
exports.ModeratorsService = void 0;
const common_1 = require("@nestjs/common");
const update_moderator_dto_1 = require("./dto/update-moderator.dto");
const mongoose_1 = require("@nestjs/mongoose");
const common_2 = require("@nestjs/common");
const mongoose_2 = require("mongoose");
let ModeratorsService = class ModeratorsService {
    constructor(ModeratorModel) {
        this.ModeratorModel = ModeratorModel;
    }
    async createModerator(CreateModeratorDto) {
        const newModerator = await new this.ModeratorModel(CreateModeratorDto);
        return newModerator.save();
    }
    async updateModerator(ModeratorId, updateModeratorDto) {
        const existingModerator = await this.ModeratorModel.findByIdAndUpdate(ModeratorId, update_moderator_dto_1.UpdateModeratorDto, { new: true });
        if (!existingModerator) {
            throw new common_2.NotFoundException('Moderator #${ModeratorId} not found');
        }
        return existingModerator;
    }
    async getAllModerator() {
        const ModeratorData = await this.ModeratorModel.find({ role: "Moderators" });
        if (!ModeratorData || ModeratorData.length == 0) {
            throw new common_2.NotFoundException('Moderator data not found!');
        }
        return ModeratorData;
    }
    async getModerator(ModeratorId) {
        const existingModerator = await this.ModeratorModel.findById(ModeratorId).exec();
        if (!existingModerator) {
            throw new common_2.NotFoundException(`Moderator #${ModeratorId} not found`);
        }
        return existingModerator;
    }
    async deleteModrator(ModeratorId) {
        const deleteModerator = await this.ModeratorModel.findByIdAndDelete(ModeratorId);
        if (!deleteModerator) {
            throw new common_2.NotFoundException('Moderator #${ModeratorId} not found');
        }
        return deleteModerator;
    }
};
exports.ModeratorsService = ModeratorsService;
exports.ModeratorsService = ModeratorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('users')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ModeratorsService);
//# sourceMappingURL=moderators.service.js.map