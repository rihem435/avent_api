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
exports.AuthentificationService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const argon2 = require("argon2");
let AuthentificationService = class AuthentificationService {
    constructor(userService, jwtService, configService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async signUp(CreateUserDto) {
        const userExists = await this.userService.findByUsername(CreateUserDto.user_email);
        if (userExists) {
            throw new common_1.BadRequestException('User already exists');
        }
        const newUser = await this.userService.createUser(CreateUserDto);
        const tokens = await this.getTokens(newUser._id, newUser.user_email);
        await this.updateRefreshToken(newUser._id, tokens.refreshToken);
        return { tokens, newUser };
    }
    async logOut(userId) {
        this.userService.updateUser(userId, { refreshtoken: null });
    }
    async refeshTokens(UserId, refreshToken) {
        const user = await this.userService.getUser(UserId);
        if (!user || !user.refreshtoken)
            throw new common_1.ForbiddenException('Access Denied');
        const refreshTokenMatches = await argon2.verify(user.refreshtoken, refreshToken);
        if (!refreshTokenMatches)
            throw new common_1.ForbiddenException('Access Denied');
        const tokens = await this.getTokens(user.id, user.user_email);
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return tokens;
    }
    async signIn(data) {
        const user = await this.userService.findByEmail(data.user_email);
        if (user.verified == false) {
            throw new common_1.BadRequestException('Your account is not verified yet !');
        }
        if (!user)
            throw new common_1.BadRequestException('User does not exist');
        console.log(data.user_password);
        const passwordMatches = await argon2.verify(user.user_password, data.user_password);
        if (!passwordMatches)
            throw new common_1.BadRequestException('Password is incorrect');
        const tokens = await this.getTokens(user._id, user.user_email);
        await this.updateRefreshToken(user._id, tokens.refreshToken);
        return { tokens, user };
    }
    async getTokens(userId, user_email) {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync({
                sub: userId,
                user_email,
            }, {
                secret: "login",
                expiresIn: '1d',
            }),
            this.jwtService.signAsync({
                sub: userId,
                user_email,
            }, {
                secret: "login",
                expiresIn: '7d',
            }),
        ]);
        return {
            accessToken,
            refreshToken,
        };
    }
    async refreshTokens(userId, refreshToken) { }
    hashData(data) {
        return argon2.hash(data);
    }
    async updateRefreshToken(userId, refreshToken) {
        const hashedRefreshToken = await this.hashData(refreshToken);
        await this.userService.updateUser(userId, { refreshtoken: hashedRefreshToken,
        });
    }
    async updatePassword(userId, UpdateUserDto) {
        const oneuser = await this.userService.findOneUser(userId);
        if (!oneuser)
            throw new common_1.NotFoundException("user not found");
        const hashedPassword = await argon2.hash(UpdateUserDto.user_password);
        const user = await this.userService.updateUser(userId, {
            ...UpdateUserDto,
            user_password: hashedPassword
        });
        const token = await this.getTokens(oneuser._id, oneuser.user_email);
        return { user, token };
    }
};
exports.AuthentificationService = AuthentificationService;
exports.AuthentificationService = AuthentificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthentificationService);
//# sourceMappingURL=authentification.service.js.map