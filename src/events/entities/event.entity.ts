import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document, SchemaType, SchemaTypes, Types} from "mongoose";
import * as argon2 from "argon2";

@Schema ({timestamps: true})
export class EventEntity {

  @Prop({required: true})  
  event_name: string;
  
  @Prop({required: true}) 
  event_place: string;

  @Prop({required: true}) 
  event_galleries: string[];
  
  /*-- Déclaration d'une relation bidirectionelle un à plusieurs --*/
  @Prop({type:SchemaTypes.ObjectId, ref:"users"})
  user_id:Types.ObjectId;

  @Prop([{type:SchemaTypes.ObjectId, ref:"invitations"}])
    invitations:Types.ObjectId[];

    @Prop([{type:SchemaTypes.ObjectId, ref:"comments"}])
    comments:Types.ObjectId[];
  
}

export const EventSchema = SchemaFactory.createForClass(EventEntity);

