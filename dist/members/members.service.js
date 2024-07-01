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
exports.MembersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let MembersService = class MembersService {
    constructor(MemberModel) {
        this.MemberModel = MemberModel;
    }
    async createMember(createMemberDto) {
        console.log(`data============================`);
        const newMember = await new this.MemberModel(createMemberDto);
        return newMember.save();
    }
    async updateMember(MemberId, updateMemberDto) {
        const existingMember = await this.MemberModel.findByIdAndUpdate(MemberId, updateMemberDto, { new: true });
        console.log(`update user---------------------------${existingMember}`);
        if (!existingMember) {
            throw new common_1.NotFoundException('Member #${MemberId} not found');
        }
        console.log(`update user-222--------------------------${existingMember}`);
        return existingMember;
    }
    async getAllMember() {
        const MemberData = await this.MemberModel.find({ role: "Members" });
        if (!MemberData || MemberData.length == 0) {
            throw new common_1.NotFoundException('Members data not found!');
        }
        return MemberData;
    }
    async getMember(MemberId) {
        const existingMember = await this.MemberModel.findById(MemberId).exec();
        if (!existingMember) {
            throw new common_1.NotFoundException(`Member #${MemberId} not found`);
        }
        return existingMember;
    }
    async deleteMember(MemberId) {
        const deleteMember = await this.MemberModel.findByIdAndDelete(MemberId);
        if (!deleteMember) {
            throw new common_1.NotFoundException('Member #${UserId} not found');
        }
        return deleteMember;
    }
    async findUserByComment(comments) {
        const userByComment = await this.MemberModel.find({ comments });
        return userByComment;
    }
};
exports.MembersService = MembersService;
exports.MembersService = MembersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('users')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MembersService);
//# sourceMappingURL=members.service.js.map