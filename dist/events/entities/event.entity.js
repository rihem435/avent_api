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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSchema = exports.EventEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let EventEntity = class EventEntity {
};
exports.EventEntity = EventEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], EventEntity.prototype, "event_title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], EventEntity.prototype, "event_galleries", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], EventEntity.prototype, "event_date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], EventEntity.prototype, "event_time", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], EventEntity.prototype, "event_address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], EventEntity.prototype, "event_description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], EventEntity.prototype, "event_latitude_coordinates", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], EventEntity.prototype, "event_longitude_coordinates", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: "users" }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], EventEntity.prototype, "user_id", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: mongoose_2.SchemaTypes.ObjectId, ref: "invitations" }]),
    __metadata("design:type", Array)
], EventEntity.prototype, "invitations", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: mongoose_2.SchemaTypes.ObjectId, ref: "comments" }]),
    __metadata("design:type", Array)
], EventEntity.prototype, "comments", void 0);
exports.EventEntity = EventEntity = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], EventEntity);
exports.EventSchema = mongoose_1.SchemaFactory.createForClass(EventEntity);
//# sourceMappingURL=event.entity.js.map