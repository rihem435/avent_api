import { Controller, Get, Post, Body, Put, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AdminstratorsService} from './adminstrators.service';
import { CreateAdminstratorDto } from './dto/create-adminstrator.dto';
import { UpdateAdminstratorDto } from './dto/update-adminstrator.dto';
import { file } from '@babel/types';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { string } from 'yargs';

@Controller('adminstrators')
export class AdminstratorsController {
  constructor(private readonly adminstratorsService: AdminstratorsService) {}

 

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './upload/users',
        filename: (_request, file, callback) =>
          callback(null, `${new Date().getTime()}-${file.originalname}`),
                             }),
                             }),)

  create(@Body() createAdminstratorDto: CreateAdminstratorDto, @UploadedFile()file) {
    createAdminstratorDto.user_profile_photo=file.filename
    return this.adminstratorsService.createAdminstrator(createAdminstratorDto);
  }

  @Get()
  findAll() {
    return this.adminstratorsService.getAllAdminstrator();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminstratorsService.getAdminstrator(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAdminstratorDto: UpdateAdminstratorDto) {
    return this.adminstratorsService.updateAdminstrator(id, updateAdminstratorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminstratorsService.deleteAdminstrator(id)
  
  }

}
