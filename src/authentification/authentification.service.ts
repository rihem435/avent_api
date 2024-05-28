import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { CreateAuthentificationDto } from './dto/login.dto';
/*-- import { UpdateAuthentificationDto } from './dto/update-authentification.dto'; --*/
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import * as argon2 from "argon2";
import { Console } from 'console';

@Injectable()
export class AuthentificationService {

  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService) {}
    
    async signUp(CreateUserDto: CreateUserDto): Promise<any> {
      // register => createuser

      //check if user exists
      const userExists = await this.userService.findByUsername(CreateUserDto.user_email);
      if (userExists){
        throw new BadRequestException('User already exists');
      }

      const newUser = await this.userService.createUser(CreateUserDto);

      const tokens = await this.getTokens(newUser._id, newUser.user_email);
      
      await this.updateRefreshToken(newUser._id, tokens.refreshToken);

      return {tokens, newUser};

    }

    /* -- Début Déclaration de la fonction"Logout"  --*/
      async logOut(userId: string) {
        this.userService.updateUser(userId, { refreshtoken: null});
      }

   /* Fin de la déclaration de la fonction "logout" */


   async refeshTokens(UserId: string, refreshToken: string){
    const user = await this.userService.getUser(UserId);
    if (!user || !user.refreshtoken)
      throw new ForbiddenException ('Access Denied');

    const refreshTokenMatches = await argon2.verify(
      user.refreshtoken,
      refreshToken
    );

    if (!refreshTokenMatches) throw new ForbiddenException ('Access Denied');
    const tokens = await this.getTokens(user.id, user.user_email);
    await this.updateRefreshToken(user.id, tokens.refreshToken);
    return tokens;
   }
  /*-- Fin déclaration de la fonction --*/

    async signIn(data: CreateAuthentificationDto) {
      // check if User exists

      const user = await this.userService.findByEmail(data.user_email);
      if(user.verified==false){
        throw new BadRequestException('Your account is not verified yet !')
 }
      if (!user) throw new BadRequestException('User does not exist')
       console.log(data.user_password)
       const passwordMatches = await argon2.verify(user.user_password, data.user_password);
      
       
      if (!passwordMatches)
        throw new BadRequestException('Password is incorrect');
     
      const tokens = await this.getTokens(user._id, user.user_email);
      await this.updateRefreshToken(user._id, tokens.refreshToken);
      return {tokens, user};
    }

    async getTokens(userId: string, user_email: string){
      const[accessToken, refreshToken] = await Promise.all([
        this.jwtService.signAsync(
          { 
            sub:userId,
            user_email,
          },

         {
          secret: "login",
          expiresIn: '1d',
        },
      ),

        this.jwtService.signAsync(
        {
          sub: userId,
          user_email,
        },

        {
          secret: "login",
          expiresIn: '7d',
        },
      ),
    ]);


      return {
        accessToken,
        refreshToken,
         };
    }

    async refreshTokens(userId: string, refreshToken: string){}

    hashData(data: string){
      return argon2.hash(data);
    }


    async updateRefreshToken(userId: string, refreshToken: string) {
      const hashedRefreshToken  = await this.hashData(refreshToken);
      await this.userService.updateUser(userId, {refreshtoken: hashedRefreshToken,

      });
    }



  }



  
      

  

