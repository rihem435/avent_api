import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document, SchemaType, SchemaTypes, Types} from "mongoose";
import * as argon2 from "argon2";

@Schema ({timestamps: true})
export class AdminstratorEntity extends Document {
  role:string // Pour l'heritage
   
  

  
}

export const AdminstratorSchema = SchemaFactory.createForClass(AdminstratorEntity);

