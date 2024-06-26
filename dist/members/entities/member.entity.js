"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemeberSchema = exports.MemberEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let MemberEntity = class MemberEntity extends mongoose_2.Document {
};
exports.MemberEntity = MemberEntity;
exports.MemberEntity = MemberEntity = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], MemberEntity);
exports.MemeberSchema = mongoose_1.SchemaFactory.createForClass(MemberEntity);
//# sourceMappingURL=member.entity.js.map