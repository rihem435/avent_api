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
exports.UserSchema = exports.UserEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const argon2 = require("argon2");
let UserEntity = class UserEntity extends mongoose_2.Document {
};
exports.UserEntity = UserEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "user_first_name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "user_last_name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "user_birth_date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "user_email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserEntity.prototype, "user_code", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "user_password", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserEntity.prototype, "user_profile_photo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "verified", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserEntity.prototype, "forget_password_token", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserEntity.prototype, "refreshtoken", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: mongoose_2.SchemaTypes.ObjectId, ref: "events" }]),
    __metadata("design:type", Array)
], UserEntity.prototype, "events", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: mongoose_2.SchemaTypes.ObjectId, ref: "invitations" }]),
    __metadata("design:type", Array)
], UserEntity.prototype, "invitations", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: mongoose_2.SchemaTypes.ObjectId, ref: "comments" }]),
    __metadata("design:type", Array)
], UserEntity.prototype, "comments", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, discriminatorKey: "role" })
], UserEntity);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(UserEntity).pre("save", async function () {
    this.user_password = await argon2.hash(this.user_password);
});
//# sourceMappingURL=user.entity.js.map