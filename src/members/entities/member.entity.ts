import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document, SchemaType, SchemaTypes, Types} from "mongoose";
import * as argon2 from "argon2";

@Schema ({timestamps: true})
export class MemberEntity extends Document {
  role:string; // Déclaration de L'héritage des attributs de l'acteur "User"
   
  

  
}

export const MemeberSchema = SchemaFactory.createForClass(MemberEntity);

