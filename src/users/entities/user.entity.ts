import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document, SchemaType, SchemaTypes, Types} from "mongoose";
import * as argon2 from "argon2";

@Schema ({timestamps: true, discriminatorKey: "role"})
export class UserEntity extends Document {

   @Prop ({required: true})
   user_civility_title: string;

   @Prop ({required: true})
   user_first_name: string;

   @Prop ({required: true})
   user_middle_name: string;

   @Prop({required: true}) 
   user_last_name: string;
   
   @Prop({required: true, unique: true}) 
   user_pseudonym: string;

   @Prop({required: true}) 
   user_birth_date: string;

   @Prop({required: true}) 
   user_gender: string;
   
   @Prop ({required: true})
   user_martial_status: string; 

   @Prop({required: true, unique: true}) 
   user_email: string;

   @Prop()
   user_code: string;
  
   @Prop({required: true}) 
   user_password: string;

   @Prop ({required: true})
   user_profile_photo: string;

   @Prop({default: false})
   verified: boolean;
  
   @Prop()
   forget_password_token: string;

   /* -- 
         user_account: string;

         user_profile: string;

         user_login_date: string;
         user_login_time: string;
         
         user_logout_date: string;
         user_logout_time: string;

         user_playgame_time_start: string;
         user_playgame_time_end: string;

         user_dashboard: string;

         user_total_score: string;

         user_dashboard_rank: string;

         user_playgame_level: string;

         user_access_number_try: string;
         
         user_digital_badges: string;
   -- */

   /* -- @Prop()
   api_token: string; -- */

   /* -- @Prop()
   api_key_token: string; -- */

   @Prop()
   refreshtoken: string;

   /*-- Déclaration d'une relation bidirectionnelle un à plusieurs --*/
   /*-- les accolades :{ }
   les crochets: [ ]
   les parenthèses: ( )--*/

   @Prop([{type:SchemaTypes.ObjectId, ref:"events"}])
   events:Types.ObjectId[];

   @Prop([{type:SchemaTypes.ObjectId, ref:"invitations"}])
    invitations:Types.ObjectId[];

   @Prop([{type:SchemaTypes.ObjectId, ref:"comments"}])
    comments:Types.ObjectId[];


}

export const UserSchema = SchemaFactory.createForClass(UserEntity).pre("save", async function(){
   this.user_password = await argon2.hash(this.user_password);
});

