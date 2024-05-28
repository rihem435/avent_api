import { AuthentificationService } from './authentification.service';
import { CreateAuthentificationDto } from './dto/login.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Request } from 'express';
export declare class AuthentificationController {
    private readonly authentificationService;
    constructor(authentificationService: AuthentificationService);
    signup(createUserDto: CreateUserDto, file: any): Promise<any>;
    signin(data: CreateAuthentificationDto): Promise<{
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
        user: import("src/users/interface/users.interface").IUser;
    }>;
    logout(req: Request): void;
    refreshTokens(req: Request): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
