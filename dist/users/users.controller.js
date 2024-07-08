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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const create_mail_dto_1 = require("./dto/create-mail.dto");
const argon2 = require("argon2");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    createUser(createUserDto, file) {
        createUserDto.user_profile_photo = file.filename;
        return this.usersService.createUser(createUserDto);
    }
    getAllUser() {
        return this.usersService.getAllUser();
    }
    getUser(id) {
        return this.usersService.getUser(id);
    }
    async updateUser(id, updateUserDto, file) {
        if (file == undefined || file == null) {
            if (updateUserDto.user_password == undefined) {
                updateUserDto.user_password = (await this.usersService.getUser(id)).user_password;
            }
            else {
                updateUserDto.user_password = await argon2.hash(updateUserDto.user_password);
            }
            updateUserDto.user_profile_photo = (await this.usersService.getUser(id)).user_profile_photo;
            return this.usersService.updateUser(id, updateUserDto);
        }
        else {
            if (updateUserDto.user_password == undefined) {
                updateUserDto.user_password = (await this.usersService.getUser(id)).user_password;
            }
            else {
                updateUserDto.user_password = await argon2.hash(updateUserDto.user_password);
            }
            updateUserDto.user_profile_photo = file.filename;
            return this.usersService.updateUser(id, updateUserDto);
        }
    }
    deleteUser(id) {
        return this.usersService.deleteUser(id);
    }
    async sendMail(response, createMailDto) {
        try {
            const newUser = await this.usersService.sendMail(createMailDto.to, createMailDto.from, createMailDto.subject, createMailDto.text);
            return response.status(common_1.HttpStatus.CREATED).json({
                message: 'mail has been successfully',
                status: common_1.HttpStatus.OK,
                data: newUser
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                status: 400,
                message: 'Error: User not created!' + err,
                data: null
            });
        }
    }
    async verifyCUserByCode(response, code, newPassword) {
        try {
            const existingUser = await this.usersService.verifyUserByCode(code, newPassword);
            console.log(`reset password---------------${existingUser}`);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'User found successfully',
                data: existingUser,
                status: 200
            });
        }
        catch (err) {
            return response.status(err.status).json({
                message: err.response,
                status: common_1.HttpStatus.BAD_REQUEST,
                data: null
            });
        }
    }
    async confirmation_user_account(response, id) {
        try {
            const user = await this.usersService.confirmation_user_account(id);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'User account has been approuved successfully',
                data: user,
                status: 200
            });
        }
        catch (err) {
            return response.status(err.status).json({
                message: err.response,
                status: common_1.HttpStatus.BAD_REQUEST,
                data: null
            });
        }
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './upload/users',
            filename: (_request, file, callback) => callback(null, `${new Date().getTime()}-${file.originalname}`),
        }),
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAllUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUser", null);
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './upload/users',
            filename: (_request, file, callback) => callback(null, `${new Date().getTime()}-${file.originalname}`),
        }),
    })),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Post)("/sendMail"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_mail_dto_1.CreateMailDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "sendMail", null);
__decorate([
    (0, common_1.Get)('/verifyCode/:code'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('code')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "verifyCUserByCode", null);
__decorate([
    (0, common_1.Get)("/confirmaccount/:id"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "confirmation_user_account", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map