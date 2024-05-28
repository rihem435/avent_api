import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document, SchemaType, SchemaTypes, Types} from "mongoose";
import * as argon2 from "argon2";

@Schema ({timestamps: true})
export class ModeratorEntity extends Document {
  role:string; // Déclaration de L'héritage des attributs de l'acteur "Moderator"
   
  

  
}

export const ModeratorSchema = SchemaFactory.createForClass(ModeratorEntity);

