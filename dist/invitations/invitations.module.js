"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationsModule = void 0;
const common_1 = require("@nestjs/common");
const invitations_service_1 = require("./invitations.service");
const invitations_controller_1 = require("./invitations.controller");
const mongoose_1 = require("@nestjs/mongoose");
const invitation_entity_1 = require("./entities/invitation.entity");
const user_entity_1 = require("../users/entities/user.entity");
const event_entity_1 = require("../events/entities/event.entity");
let InvitationsModule = class InvitationsModule {
};
exports.InvitationsModule = InvitationsModule;
exports.InvitationsModule = InvitationsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: "invitations", schema: invitation_entity_1.InvitationSchema },
                { name: "users", schema: user_entity_1.UserSchema },
                { name: "events", schema: event_entity_1.EventSchema }
            ])
        ],
        controllers: [invitations_controller_1.InvitationsController],
        providers: [invitations_service_1.InvitationsService],
    })
], InvitationsModule);
//# sourceMappingURL=invitations.module.js.map