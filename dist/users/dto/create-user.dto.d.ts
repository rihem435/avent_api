export declare class CreateUserDto {
    readonly user_first_name: string;
    readonly user_last_name: string;
    readonly user_birth_date: string;
    readonly user_email: string;
    user_password: string;
    user_profile_photo: string;
    verified: boolean;
    readonly forget_password_token: string;
    readonly refreshtoken: string;
}
