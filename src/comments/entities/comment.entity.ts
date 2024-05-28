import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document, SchemaType, SchemaTypes, Types} from "mongoose";
import * as argon2 from "argon2";


@Schema({timestamps: true})
   export class CommentEntity extends Document {

      @Prop({type:SchemaTypes.ObjectId, ref:"users"})
         user_id:Types.ObjectId;   
      
      @Prop({type:SchemaTypes.ObjectId, ref:"events"})
         event_id:Types.ObjectId;

         @Prop({required: true})
         comment_message_context:string;
   }


export const CommentSchema = SchemaFactory.createForClass(CommentEntity);
