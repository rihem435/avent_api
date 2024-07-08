import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateMailDto } from './dto/create-mail.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: CreateUserDto, file: any): Promise<import("src/users/interface/users.interface").IUser>;
    getAllUser(): Promise<import("src/users/interface/users.interface").IUser[]>;
    getUser(id: string): Promise<import("src/users/interface/users.interface").IUser>;
    updateUser(id: string, updateUserDto: UpdateUserDto, file: any): Promise<import("src/users/interface/users.interface").IUser>;
    deleteUser(id: string): Promise<import("src/users/interface/users.interface").IUser>;
    sendMail(response: any, createMailDto: CreateMailDto): Promise<any>;
    verifyCUserByCode(response: any, code: string, newPassword: string): Promise<any>;
    confirmation_user_account(response: any, id: string): Promise<any>;
}
