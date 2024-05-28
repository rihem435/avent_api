import { CreateAuthentificationDto } from './dto/login.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
export declare class AuthentificationService {
    private userService;
    private jwtService;
    private configService;
    constructor(userService: UsersService, jwtService: JwtService, configService: ConfigService);
    signUp(CreateUserDto: CreateUserDto): Promise<any>;
    logOut(userId: string): Promise<void>;
    refeshTokens(UserId: string, refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    signIn(data: CreateAuthentificationDto): Promise<{
        tokens: {
            accessToken: string;
            refreshToken: string;
        };
        user: import("src/users/interface/users.interface").IUser;
    }>;
    getTokens(userId: string, user_email: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refreshTokens(userId: string, refreshToken: string): Promise<void>;
    hashData(data: string): Promise<string>;
    updateRefreshToken(userId: string, refreshToken: string): Promise<void>;
}
