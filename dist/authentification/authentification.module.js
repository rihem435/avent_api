"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthentificationModule = void 0;
const common_1 = require("@nestjs/common");
const authentification_service_1 = require("./authentification.service");
const authentification_controller_1 = require("./authentification.controller");
const jwt_1 = require("@nestjs/jwt");
const users_module_1 = require("../users/users.module");
const accessToken_strategie_1 = require("./strategies/accessToken.strategie");
const refrechToken_strategie_1 = require("./strategies/refrechToken.strategie");
let AuthentificationModule = class AuthentificationModule {
};
exports.AuthentificationModule = AuthentificationModule;
exports.AuthentificationModule = AuthentificationModule = __decorate([
    (0, common_1.Module)({
        imports: [jwt_1.JwtModule.register({}), users_module_1.UsersModule],
        controllers: [authentification_controller_1.AuthentificationController],
        providers: [authentification_service_1.AuthentificationService, accessToken_strategie_1.AccessTokenStrategy, refrechToken_strategie_1.RefreshTokenStrategy],
    })
], AuthentificationModule);
//# sourceMappingURL=authentification.module.js.map