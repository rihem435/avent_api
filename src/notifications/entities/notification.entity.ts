import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema ({timestamps: true})
export class NotificationEntity extends Document {

   @Prop()
      title: string;
   
   @Prop()
      description: string;
   
   @Prop()
      fcmToken: string;

}


export const NotificationSchema = SchemaFactory.createForClass(NotificationEntity);
