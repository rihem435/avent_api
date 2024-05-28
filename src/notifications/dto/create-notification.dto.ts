import { IsNotEmpty, IsString } from "class-validator";

export class CreateNotificationDto {

   @IsString()
   @IsNotEmpty()
      title: String;
   
   @IsString()
   @IsNotEmpty()
      description: String;

      @IsString()
      @IsNotEmpty()
         fcmtoken: String;

}
