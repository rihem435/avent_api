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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const nodemailer = require("nodemailer");
let UsersService = class UsersService {
    constructor(UserModel) {
        this.UserModel = UserModel;
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'tekaya.taoufik.mohamed@gmail.com',
                pass: 'lpyj uxmk yrmm xrcn',
            },
        });
    }
    async createUser(createUserDto) {
        const newUser = await new this.UserModel(createUserDto);
        return newUser.save();
    }
    async findByUsername(user_name) {
        return this.UserModel.findOne({ user_first_name: user_name }).exec();
    }
    async findByEmail(email) {
        return this.UserModel.findOne({ user_email: email }).exec();
    }
    async findOneUser(id) {
        const oneUser = await this.UserModel.findById(id);
        if (!oneUser) {
            throw new common_1.NotFoundException("user does not found");
        }
        return oneUser;
    }
    async updateUser(UserId, updateUserDto) {
        const existingUser = await this.UserModel.findByIdAndUpdate(UserId, updateUserDto, { new: true });
        if (!existingUser) {
            throw new common_1.NotFoundException('User #${UserId} not found');
        }
        return existingUser;
    }
    async getAllUser() {
        const UserData = await this.UserModel.find();
        if (!UserData || UserData.length == 0) {
            throw new common_1.NotFoundException('Users data not found!');
        }
        return UserData;
    }
    async getUser(UserId) {
        const existingUser = await this.UserModel.findById(UserId).exec();
        if (!existingUser) {
            throw new common_1.NotFoundException(`User #${UserId} not found`);
        }
        return existingUser;
    }
    async deleteUser(UserId) {
        const deleteUser = await this.UserModel.findByIdAndDelete(UserId);
        if (!deleteUser) {
            throw new common_1.NotFoundException('User #${UserId} not found');
        }
        return deleteUser;
    }
    async sendMail(to, from, subject, content) {
        const code = Math.floor(Math.random() * 1000000);
        const existingUser = await this.UserModel.findOne({ user_email: to }).exec();
        if (!existingUser) {
            throw new common_1.NotFoundException(`User #${to} not found`);
        }
        await this.UserModel.updateOne({ user_email: to }, { $set: { user_code: code } });
        const mailOptions = {
            from: from,
            to,
            subject,
            text: " Your code is " + code,
        };
        console.log(`code ${code}`);
        await this.transporter.sendMail(mailOptions);
    }
    async verifyUserByCode(code) {
        const existingUser = await this.UserModel.findOne({ user_code: code }).exec();
        if (!existingUser) {
            throw new common_1.NotFoundException(`User #${code} not found`);
        }
        return existingUser;
    }
    async confirmation_user_account(id) {
        const user = await this.UserModel.findByIdAndUpdate(id, { $set: { verified: true } });
        const mailOptions = {
            from: "tekaya.taoufik.mohamed@gmail.com",
            to: user.user_email,
            subject: " confirmation account ",
            text: " Your user account has been approuved by the adminstrator ",
        };
        await this.transporter.sendMail(mailOptions);
        console.log("first");
        return user;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('users')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map