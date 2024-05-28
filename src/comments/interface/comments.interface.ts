import { IsNotEmpty, IsString } from "class-validator";
import {Document} from "mongoose";

export interface IComment extends Document {
  
   readonly user_id:String;

   readonly event_id:String;

   readonly comment_message_context:String;
   
}
