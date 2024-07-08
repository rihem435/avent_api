/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { IUser } from './interface/users.interface';
export declare class UsersService {
    private UserModel;
    private transporter;
    constructor(UserModel: Model<IUser>);
    createUser(createUserDto: CreateUserDto): Promise<IUser>;
    findByUsername(user_name: string): Promise<IUser>;
    findByEmail(email: string): Promise<IUser>;
    findOneUser(id: string): Promise<IUser>;
    updateUser(UserId: string, updateUserDto: UpdateUserDto): Promise<IUser>;
    getAllUser(): Promise<IUser[]>;
    getUser(UserId: string): Promise<IUser>;
    deleteUser(UserId: string): Promise<IUser>;
    sendMail(to: string, from: string, subject: string, content: string): Promise<void>;
    verifyUserByCode(code: string, tokenPassword: string): Promise<IUser>;
    confirmation_user_account(id: string): Promise<IUser>;
    findOneUserAndResetPassword(email: any, password: any): Promise<IUser>;
}
