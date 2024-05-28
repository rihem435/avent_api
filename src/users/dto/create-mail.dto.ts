import { IsNotEmpty, IsString } from "class-validator";

export class CreateMailDto {

   @IsString()
   @IsNotEmpty()
   readonly from: string;

   @IsString()
   @IsNotEmpty()
   readonly subject: string;

   @IsString()
   @IsNotEmpty()
   readonly text: string;

   @IsString()
    @IsNotEmpty()
    readonly to: string;
    
}