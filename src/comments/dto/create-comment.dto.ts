import { IsNotEmpty, IsString } from "class-validator";

export class CreateCommentDto {

   /*-- Déclaration --*/
   @IsString()
   @IsNotEmpty()
   id_user: string;
   
   /*-- Déclaration --*/
   @IsString()
   @IsNotEmpty()
   id_event: string;

   @IsString()
   @IsNotEmpty()
   comment_message_context: string;



}
