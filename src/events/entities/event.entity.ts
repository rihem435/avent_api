import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document, SchemaType, SchemaTypes, Types} from "mongoose";
import * as argon2 from "argon2";

@Schema ({timestamps: true})
  export class EventEntity {

    @Prop({required: false})  
      event_parameters: string[];

    @Prop({required: true})  
      event_title: string;
  
    @Prop({required: true}) 
      event_galleries: string[];

  
    @Prop({required: true}) 
      event_date: string;


    @Prop({required: true}) 
      event_time: string;

    @Prop({required: true})  
      event_type: string;

    @Prop({required: true}) 
      event_address: string;

    @Prop ({required: true})
      event_description: string;

    @Prop({required: true}) 
      event_latitude_coordinates: string;

    @Prop({required: true}) 
      event_longitude_coordinates: string;

    @Prop({required: false})  
      event_forum: string[];

    @Prop({required: false})  
      event_discussion: string[];

   



  
  /*-- Déclaration d'une relation bidirectionelle un à plusieurs --*/
  @Prop({type:SchemaTypes.ObjectId, ref:"users"})
    user_id:Types.ObjectId;

  @Prop([{type:SchemaTypes.ObjectId, ref:"invitations"}])
    invitations:Types.ObjectId[];

  @Prop([{type:SchemaTypes.ObjectId, ref:"comments"}])
    comments:Types.ObjectId[];
  
}

export const EventSchema = SchemaFactory.createForClass(EventEntity);

