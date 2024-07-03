import {Document} from "mongoose";
export interface IUser extends Document {

   
   readonly user_first_name: string;

   


   readonly user_birth_date: string;


   
   readonly user_email: string;

    user_code: string;

  user_profile_photo: string;

    user_password: string;

      verified: boolean;

   forget_password_token: string;

   refreshtoken: string;
   


   
}