"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const members_module_1 = require("./members/members.module");
const moderators_module_1 = require("./moderators/moderators.module");
const adminstrators_module_1 = require("./adminstrators/adminstrators.module");
const mongoose_1 = require("@nestjs/mongoose");
const events_module_1 = require("./events/events.module");
const invitations_module_1 = require("./invitations/invitations.module");
const comments_module_1 = require("./comments/comments.module");
const authentification_module_1 = require("./authentification/authentification.module");
const config_1 = require("@nestjs/config");
const notifications_module_1 = require("./notifications/notifications.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://127.0.0.1:27017', { dbName: 'platform_event_db' }),
            users_module_1.UsersModule,
            members_module_1.MembersModule,
            moderators_module_1.ModeratorsModule,
            adminstrators_module_1.AdminstratorsModule,
            events_module_1.EventsModule,
            invitations_module_1.InvitationsModule,
            comments_module_1.CommentsModule,
            authentification_module_1.AuthentificationModule,
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            notifications_module_1.NotificationsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map