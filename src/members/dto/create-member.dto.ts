import {IsBoolean, IsNotEmpty, IsNumber, IsString} from "class-validator";
import { CreateUserDto } from "src/users/dto/create-user.dto";


export class CreateMemberDto extends CreateUserDto {

   @IsString()
   @IsNotEmpty()
   readonly member_civility_title: string;

   @IsString()
   @IsNotEmpty()
   readonly  member_martial_status: string; 
}
