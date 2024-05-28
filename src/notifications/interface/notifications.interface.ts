import { Document } from "mongoose";


export interface INotification extends Document {

   readonly title: String;

   readonly description: String;
   
   readonly fcmtoken: String;


}