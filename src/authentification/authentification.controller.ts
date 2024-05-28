import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseGuards, Req, UseInterceptors } from '@nestjs/common';
import { AuthentificationService } from './authentification.service';
import { CreateAuthentificationDto } from './dto/login.dto';
/* import { UpdateAuthentificationDto } from './dto/update-authentification.dto'; */
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { createSecureServer } from 'http2';
import { AccessTokenGuard } from './guards/accessToken.guard';
import { AccessTokenStrategy } from './strategies/accessToken.strategie';
import { RefreshTokenGuard } from './guards/refrechToken.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Request } from 'express';

@Controller('authentification')
export class AuthentificationController {
  constructor(private readonly authentificationService: AuthentificationService) {}

  @Post('signup')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './upload/users',
        filename: (_request, file, callback) =>
          callback(null, `${new Date().getTime()}-${file.originalname}`),
                             }),
                             }),)

  signup(@Body() createUserDto: CreateUserDto, @UploadedFile() file) {
    createUserDto.user_profile_photo = file.filename;
    return this.authentificationService.signUp(createUserDto);
  }
 
  @Post('signin')
  signin(@Body() data: CreateAuthentificationDto) {
    return this.authentificationService.signIn(data);
  }


  @UseGuards(AccessTokenGuard)
  @Get('logout')
  logout(@Req() req: Request) {
    this.authentificationService.logOut(req.user['sub']);
  }
  

  @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  refreshTokens(@Req() req: Request) {
    const userId = req.user['sub'];
    const refrechToken = req.user['refereshToken'];
    return this.authentificationService.refeshTokens(userId, refrechToken);
  }



}
