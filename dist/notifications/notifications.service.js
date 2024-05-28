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
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let NotificationsService = class NotificationsService {
    constructor(NotificationModel) {
        this.NotificationModel = NotificationModel;
    }
    async createNotification(createNotificationDto) {
        const newNotification = await new this.NotificationModel(createNotificationDto);
        return newNotification.save();
    }
    async updateNotification(NotificationId, updateNotificationDto) {
        const existingNotification = await this.NotificationModel.findByIdAndUpdate(NotificationId, updateNotificationDto, { new: true });
        if (!existingNotification) {
            throw new common_1.NotFoundException('Notification #${NotificationId} not found');
        }
        return existingNotification;
    }
    async getAllNotification() {
        const NotificationData = await this.NotificationModel.find();
        if (!NotificationData || NotificationData.length == 0) {
            throw new common_1.NotFoundException('Notification data not found!');
        }
        return NotificationData;
    }
    async getNotification(NotificationId) {
        const existingNotification = await this.NotificationModel.findById(NotificationId).exec();
        if (!existingNotification) {
            throw new common_1.NotFoundException(`Notification #${NotificationId} not found`);
        }
        return existingNotification;
    }
    async deleteNotification(NotificationId) {
        const deleteNotification = await this.NotificationModel.findByIdAndDelete(NotificationId);
        if (!deleteNotification) {
            throw new common_1.NotFoundException('Notification #${NotificationId} not found');
        }
        return deleteNotification;
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('notifications')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map