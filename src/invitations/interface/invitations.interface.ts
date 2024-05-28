import { IsNotEmpty, IsString } from "class-validator";
import {Document} from "mongoose";

export interface IInvitation extends Document {
  
   readonly user_id:String;

   readonly event_id:String;
}
