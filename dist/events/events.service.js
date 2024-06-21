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
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let EventsService = class EventsService {
    constructor(EventModel, UserModel) {
        this.EventModel = EventModel;
        this.UserModel = UserModel;
    }
    async createEvent(createEventDto) {
        const newEvent = await new this.EventModel(createEventDto);
        await this.UserModel.findByIdAndUpdate(createEventDto.user_id, { $push: { events: newEvent } });
        return newEvent.save();
    }
    async updateEvent(EventId, updateEventDto) {
        const existingEvent = await this.EventModel.findByIdAndUpdate(EventId, updateEventDto, { new: true });
        if (!existingEvent) {
            throw new common_1.NotFoundException('Event #${EventId} not found');
        }
        return existingEvent;
    }
    async getAllEvent() {
        const EventData = await this.EventModel.find().populate({ path: "comments", populate: { path: 'user_id' } });
        if (!EventData || EventData.length == 0) {
            throw new common_1.NotFoundException('Events data not found!');
        }
        return EventData;
    }
    async getEvent(EventId) {
        const existingEvent = await this.EventModel.findById(EventId).exec();
        if (!existingEvent) {
            throw new common_1.NotFoundException(`User #${EventId} not found`);
        }
        return existingEvent;
    }
    async deleteEvent(EventId) {
        const deleteEvent = await this.EventModel.findByIdAndDelete(EventId);
        if (!deleteEvent) {
            throw new common_1.NotFoundException('User #${EventId} not found');
        }
        return deleteEvent;
    }
    async findEventByUser(user_id) {
        const EventByUser = await this.EventModel.find({ user_id });
        return EventByUser;
    }
};
exports.EventsService = EventsService;
exports.EventsService = EventsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('events')),
    __param(1, (0, mongoose_1.InjectModel)('users')),
    __metadata("design:paramtypes", [mongoose_2.Model, mongoose_2.Model])
], EventsService);
//# sourceMappingURL=events.service.js.map