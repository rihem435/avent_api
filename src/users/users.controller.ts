import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Put, Res, HttpStatus, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CreateMailDto } from './dto/create-mail.dto';
import * as argon2 from "argon2"
import { response } from 'express';
import { identity } from 'rxjs';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './upload/users',
        filename: (_request, file, callback) =>
          callback(null, `${new Date().getTime()}-${file.originalname}`),
                             }),
                             }),)

    createUser(@Body() createUserDto: CreateUserDto, @UploadedFile() file) {
      createUserDto.user_profile_photo = file.filename;
        return this.usersService.createUser(createUserDto);
  }

  /* -- Méthode "Get" de routage d'affichage -- */
  @Get()
    getAllUser() {
      return this.usersService.getAllUser();
  }

  @Get(':id')
    getUser(@Param('id') id: string) {
      return this.usersService.getUser(id);
  }
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './upload/users',
        filename: (_request, file, callback) =>
          callback(null, `${new Date().getTime()}-${file.originalname}`),
                             }),
                             }),)
  @Put(':id')
  async  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto,@UploadedFile() file) {
      if(file==undefined|| file==null){
        if(updateUserDto.user_password==undefined){
          updateUserDto.user_password=(await this.usersService.getUser(id)).user_password
        } 
        else{
          updateUserDto.user_password=await argon2.hash(updateUserDto.user_password)
        }
        updateUserDto.user_profile_photo=(await this.usersService.getUser(id)).user_profile_photo
        return this.usersService.updateUser(id, updateUserDto);

      }
      else{
        if(updateUserDto.user_password==undefined){
          updateUserDto.user_password=(await this.usersService.getUser(id)).user_password
        } 
        else{
          updateUserDto.user_password=await argon2.hash(updateUserDto.user_password)
        }
        updateUserDto.user_profile_photo=file.filename
        return this.usersService.updateUser(id, updateUserDto);

      }
  }

  @Delete(':id')
    deleteUser(@Param('id') id: string) {
      return this.usersService.deleteUser(id);
  }

  @Post("/sendMail")
  async sendMail(@Res() response, @Body() createMailDto: CreateMailDto) {

    try {
      const newUser = await this.usersService.sendMail(createMailDto.to, createMailDto.from, createMailDto.subject, createMailDto.text);
      return response.status(HttpStatus.CREATED).json({
        message: 'mail has been successfully',
        status: HttpStatus.OK,
        data: newUser
      });} 
      
      catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        status: 400,
        message: 'Error: User not created!' + err,
        data: null
      });
    }
  }


  @Get('/verifyCode/:code')
  async verifyCUserByCode(@Res() response, @Param('code') code: string,@Body() newPassword:string) {

    try {
      const existingUser = await this.usersService.verifyUserByCode(code,newPassword);
      console.log(`reset password---------------${existingUser}`)
      return response.status(HttpStatus.OK).json({
        message: 'User found successfully',
        data: existingUser,
        status: 200
      });} 

        catch (err) {
          return response.status(err.status).json({
            message: err.response,
            status: HttpStatus.BAD_REQUEST,
            data: null
          });
        }
  }

  @Get("/confirmaccount/:id")
    async confirmation_user_account(@Res() response, @Param("id") id:string) {
      try {
            const user = await this.usersService.confirmation_user_account(id) ;

            return response.status(HttpStatus.OK).json({
              message: 'User account has been approuved successfully',
              data: user,
              status: 200
            })
          }


      catch (err) {
        return response.status(err.status).json({
          message: err.response,
          status: HttpStatus.BAD_REQUEST,
          data: null
        });
      }
      
    }

}
