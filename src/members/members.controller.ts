import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseInterceptors, UploadedFile } from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './upload/users',
        filename: (_request, file, callback) =>
          callback(null, `${new Date().getTime()}-${file.originalname}`),
                             }),
                             }),)

  create(@Body() createMemberDto: CreateMemberDto,@UploadedFile()file) {
    createMemberDto.user_profile_photo=file.filename;
    return this.membersService.createMember(createMemberDto);
  }

  @Get()
  findAll() {
    return this.membersService.getAllMember();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.membersService.getMember(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto) {
    return this.membersService.updateMember(id, updateMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.membersService.deleteMember(id);
  }
}
