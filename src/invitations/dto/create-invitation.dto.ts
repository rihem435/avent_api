import { IsNotEmpty, IsString } from "class-validator";

export class CreateInvitationDto {

   /* */
   @IsString()
   @IsNotEmpty()
      user_id: string;
   
   /* */
   @IsString()
   @IsNotEmpty()
      event_id: string;
}
