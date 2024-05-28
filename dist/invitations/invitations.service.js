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
exports.InvitationsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let InvitationsService = class InvitationsService {
    constructor(InvitationModel, UserModel, EventModel) {
        this.InvitationModel = InvitationModel;
        this.UserModel = UserModel;
        this.EventModel = EventModel;
    }
    async createInvitation(createInvitationDto) {
        const newInvitation = await new this.InvitationModel(createInvitationDto);
        await this.UserModel.findByIdAndUpdate(createInvitationDto.user_id, { $push: { invitations: newInvitation } });
        await this.EventModel.findByIdAndUpdate(createInvitationDto.event_id, { $push: { invitations: newInvitation } });
        return newInvitation.save();
    }
    async updateInvitation(InvitationId, updateInvitationDto) {
        const existingInvitation = await this.InvitationModel.findByIdAndUpdate(InvitationId, updateInvitationDto, { new: true });
        if (!existingInvitation) {
            throw new common_1.NotFoundException('Invitation #${InvitationId} not found');
        }
        return existingInvitation;
    }
    async getAllInvitation() {
        const InvitationData = await this.InvitationModel.find();
        if (!InvitationData || InvitationData.length == 0) {
            throw new common_1.NotFoundException('Invitation data not found!');
        }
        return InvitationData;
    }
    async getInvitation(InvitationId) {
        const existingInvitation = await this.InvitationModel.findById(InvitationId).exec();
        if (!existingInvitation) {
            throw new common_1.NotFoundException(`Invitation #${InvitationId} not found`);
        }
        return existingInvitation;
    }
    async deleteInvitation(InvitationId) {
        const deleteInvitation = await this.InvitationModel.findByIdAndDelete(InvitationId);
        if (!deleteInvitation) {
            throw new common_1.NotFoundException('Invitation #${InvitationId} not found');
        }
        return deleteInvitation;
    }
};
exports.InvitationsService = InvitationsService;
exports.InvitationsService = InvitationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('invitations')),
    __param(1, (0, mongoose_1.InjectModel)('users')),
    __param(2, (0, mongoose_1.InjectModel)('events')),
    __metadata("design:paramtypes", [mongoose_2.Model, mongoose_2.Model, mongoose_2.Model])
], InvitationsService);
//# sourceMappingURL=invitations.service.js.map