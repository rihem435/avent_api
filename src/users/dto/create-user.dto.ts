import {IsBoolean, IsNotEmpty, IsNumber, IsString} from "class-validator";


export class CreateUserDto {

   // @IsString()
   // @IsNotEmpty()
   // readonly user_civility_title: string;

   @IsString()
   @IsNotEmpty()
   readonly user_first_name: string;

   // @IsString()
   // @IsNotEmpty()
   // readonly user_middle_name: string;

   @IsString()
   @IsNotEmpty()
   readonly user_last_name: string;

   // @IsString()
   // @IsNotEmpty()
   // readonly user_pseudonym: string;

   @IsString()
   @IsNotEmpty()
   readonly user_birth_date: string;
   
   // @IsString()
   // @IsNotEmpty()
   //    readonly user_gender: string;

   @IsString()
   @IsNotEmpty()
      readonly user_email: string;
   
   @IsString()
   @IsNotEmpty()
      user_password: string;

   @IsString()
   @IsNotEmpty()
      user_profile_photo: string;

   @IsBoolean()
      verified: boolean;

   /* -- role: string; -- */

   readonly forget_password_token: string; 
   
   /* -- @IsString()
   @IsNotEmpty()
   api_token: string; -- */

   /* -- @IsString()
   @IsNotEmpty()
   api_key_token: string; -- */

   readonly refreshtoken: string;


}
