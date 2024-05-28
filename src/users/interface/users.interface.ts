import {Document} from "mongoose";
export interface IUser extends Document {

   readonly user_civility_title: string;
   
   readonly user_first_name: string;

   readonly user_middle_name: string;
   
   readonly user_last_name: string;

   readonly user_psyeudonym: string;

   readonly user_birth_date: string;

   readonly user_gender: string;

   readonly user_martial_status: string;
   
   readonly user_email: string;

    user_code: string;

  user_profile_photo: string;

    user_password: string;

      verified: boolean;

   forget_password_token: string;

   refreshtoken: string;
   


   
}