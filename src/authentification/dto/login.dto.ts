import { IsNotEmpty, IsString } from "class-validator";

export class CreateAuthentificationDto {

   /*-- Déclaration Nom d'Utilisateur --*/
   @IsString()
   @IsNotEmpty()
   readonly user_email: string;
   
   /*-- Déclartaion Mot de Passe  --*/
   @IsString()
   @IsNotEmpty()
   readonly user_password: string;
}
