import { IsNotEmpty, IsString } from "class-validator";

export class CreateEventDto {

   @IsString()
   @IsNotEmpty()
   event_title:string;

   @IsString()
   @IsNotEmpty()
      event_galleries: string[];

   @IsString()
   @IsNotEmpty()
         event_date: string;   

   @IsString()
   @IsNotEmpty()
      event_time: string;
   
      @IsString()
      @IsNotEmpty()
         event_type: string;

   

   @IsString()
   @IsNotEmpty()
      event_address: string;
   
   @IsString()
   @IsNotEmpty()
      event_latitude_coordinates: string;

   @IsString()
   @IsNotEmpty()
     event_longitude_coordinates: string;


   @IsString()
   @IsNotEmpty()
      event_description: string;

     
      
      @IsString()
      @IsNotEmpty()
         event_discussion: string;

   @IsString()
   @IsNotEmpty()
    user_id: string;
}
