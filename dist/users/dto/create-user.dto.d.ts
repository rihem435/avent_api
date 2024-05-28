export declare class CreateUserDto {
    readonly user_civility_title: string;
    readonly user_first_name: string;
    readonly user_middle_name: string;
    readonly user_last_name: string;
    readonly user_pseudonym: string;
    readonly user_birth_date: string;
    readonly user_gender: string;
    readonly user_email: string;
    user_password: string;
    user_profile_photo: string;
    verified: boolean;
    readonly forget_password_token: string;
    readonly refreshtoken: string;
}
