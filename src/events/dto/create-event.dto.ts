import { IsNotEmpty, IsString } from "class-validator";

export class CreateEventDto {

   @IsString()
   @IsNotEmpty()
   event_name:string;

   @IsString()
   @IsNotEmpty()
   readonly event_place: string;

   @IsString()
   @IsNotEmpty()
   event_galleries: string[];

   @IsString()
   @IsNotEmpty()
   user_id: string;
}
