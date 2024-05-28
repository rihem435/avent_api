import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ModeratorsService } from './moderators.service';
import { CreateModeratorDto } from './dto/create-moderator.dto';
import { UpdateModeratorDto } from './dto/update-moderator.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('moderators')
export class ModeratorsController {
  constructor(private readonly moderatorsService: ModeratorsService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './upload/users',
        filename: (_request, file, callback) =>
          callback(null, `${new Date().getTime()}-${file.originalname}`),
                             }),
                             }),)

  @Post()
  create(@Body() createModeratorDto: CreateModeratorDto, @UploadedFile()file) {
    createModeratorDto.user_profile_photo=file.filename;
    return this.moderatorsService.createModerator(createModeratorDto);
  }
 
  @Get()
  findAll() {
    return this.moderatorsService.getAllModerator();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moderatorsService.getModerator(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModeratorDto: UpdateModeratorDto) {
    return this.moderatorsService.updateModerator(id, updateModeratorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moderatorsService.deleteModrator(id);


  }
}
