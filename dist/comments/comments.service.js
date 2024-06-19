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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CommentsService = class CommentsService {
    constructor(CommentsModel, UserModel, EventModel) {
        this.CommentsModel = CommentsModel;
        this.UserModel = UserModel;
        this.EventModel = EventModel;
    }
    async createComment(createCommentDto) {
        const newComment = await new this.CommentsModel(createCommentDto);
        await this.UserModel.findByIdAndUpdate(createCommentDto.id_user, { $push: { comments: newComment } });
        await this.EventModel.findByIdAndUpdate(createCommentDto.id_event, { $push: { comments: newComment } });
        return newComment.save();
    }
    async updateComment(CommentId, updateCommentDto) {
        const existingComment = await this.CommentsModel.findByIdAndUpdate(CommentId, updateCommentDto, { new: true });
        if (!existingComment) {
            throw new common_1.NotFoundException('Comment #${CommentId} not found');
        }
        return existingComment;
    }
    async getAllComment() {
        const CommentData = await this.CommentsModel.find().populate('user_id');
        if (!CommentData || CommentData.length == 0) {
            throw new common_1.NotFoundException('Comment data not found!');
        }
        return CommentData;
    }
    async findAllByEventAndUser(eventId, userId) {
        const comments = await this.CommentsModel.find({ eventId, userId }).populate('user_id');
        if (!comments || comments.length === 0) {
            throw new common_1.NotFoundException('Comments not found for the event and user.');
        }
        return comments;
    }
    async getComment(CommentId) {
        const existingComment = await this.CommentsModel.findById(CommentId).exec();
        if (!existingComment) {
            throw new common_1.NotFoundException(`Comment #${CommentId} not found`);
        }
        return existingComment;
    }
    async deleteComment(CommentId) {
        const deleteComment = await this.CommentsModel.findByIdAndDelete(CommentId);
        if (!deleteComment) {
            throw new common_1.NotFoundException('Comment #${CommentId} not found');
        }
        return deleteComment;
    }
};
exports.CommentsService = CommentsService;
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('comments')),
    __param(1, (0, mongoose_1.InjectModel)('users')),
    __param(2, (0, mongoose_1.InjectModel)('events')),
    __metadata("design:paramtypes", [mongoose_2.Model, mongoose_2.Model, mongoose_2.Model])
], CommentsService);
//# sourceMappingURL=comments.service.js.map