import { IsNotEmpty, IsString } from "class-validator";

export class CreateCommentDto {

   /*-- Déclaration --*/
   @IsString()
   @IsNotEmpty()
   user_id: string;
   
   /*-- Déclaration --*/
   @IsString()
   @IsNotEmpty()
   event_id: string;

   @IsString()
   @IsNotEmpty()
   comment_message_context: string;



}
